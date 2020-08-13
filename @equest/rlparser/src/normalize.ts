import { ParsedReplay, CameraSettings, PlayerStats, Player } from './types';
import { cameraSettingsList, playerItemsList, controlConfigList } from './lists';
import { isArray } from 'util';

const nestIdList = ['playerId', 'primaryPlayer', 'victimId', 'attackerId'];

const fixId = (arr: Array<{ [index: string]: any }>) => {
  // dont even remember writing this code but
  // this if is for arrays of objects to fix
  if (isArray(arr)) {
    arr.forEach((element: { [index: string]: any }) => {
      for (let x in element) {
        if (nestIdList.includes(x)) {
          element[x] = element[x]['id'];
        }
      }
      arr.push(element);
    });
  }
  return arr;
};

export const extractReplayMeta = (data: any) => {
  // Deep duplicate the object, cause the object's memory location is currently the json file
  const replayData = Object.assign({}, data);
  let normalizedObject: Record<string, any> = replayData['gameMetadata'];
  Object.assign(
    // https://stackoverflow.com/questions/33036487/one-liner-to-flatten-nested-object
    {},
    ...(function _flatten(o): any {
      return [].concat(...Object.keys(o).map((k) => (typeof o[k] === 'object' ? _flatten(o[k]) : { [k]: o[k] })));
    })(normalizedObject)
  );
  normalizedObject['replayId'] = normalizedObject['id'];
  delete normalizedObject['id'];

  normalizedObject['team0Score'] = normalizedObject['score']['team0Score'];
  normalizedObject['team1Score'] = normalizedObject['score']['team1Score'];
  delete normalizedObject['score'];

  normalizedObject['goals'] = fixId(normalizedObject['goals']);
  normalizedObject['demos'] = fixId(normalizedObject['demos']);
  normalizedObject['primaryPlayer'] = normalizedObject['primaryPlayer']['id'];

  return normalizedObject;
};

const omitList = [
  'numStolenBoosts',
  'wastedBig',
  'wastedSmall',
  'ballHitBackward',
  'pass_',
  'passed',
  'dribble',
  'dribbleContinuation',
  'shot',
  'goal',
  'assist',
  'assisted',
  'save',
  'aerial',
  'averageDuration',
  'wastedUsage',
  'totalShots',
  'perPossessionStats',
];

// When flattening objects, anything on this list will have
// its parent object name append to it in front, such as
// 'loadout_titleid'
const appendKeyList = ['loadout', 'cameraSettings'];

const flattenObject = (obj: any) => {
  let newObj: { [index: string]: any } = {};

  for (let i in obj) {
    if (!obj.hasOwnProperty(i)) continue; // ?

    if (typeof obj[i] == 'object') {
      let flatObject = flattenObject(obj[i]);
      if (appendKeyList.includes(i)) {
        for (let x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
          newObj[i + '_' + x] = flatObject[x];
        }
      } else {
        for (let x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
          newObj[x] = flatObject[x];
        }
      }
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
};

const extractPlayerStat = (player: any) => {
  let normalizedObject = Object.assign({}, player);
  normalizedObject = flattenObject(normalizedObject);
  for (const [key, value] of Object.entries(normalizedObject)) {
    if (omitList.includes(key)) delete normalizedObject[key];
  }

  if (normalizedObject['isOrange'] == 0) normalizedObject['team'] = 'blue';
  else normalizedObject['team'] = 'orange';
  delete normalizedObject['isOrange'];

  normalizedObject['platform_id'] = normalizedObject['id'];
  delete normalizedObject['id'];

  return normalizedObject;
};

export const extractPlayerStats = (data: any): Array<{ [index: string]: any }> => {
  // Deep duplicate the object, cause the object's memory location is currently the json file
  const replayData: Array<any> = data['players'];
  let normalizedArray: Array<any> = [];
  // normalizedArray.push(extractPlayerStat(replayData[0]));
  for (let player of replayData) {
    normalizedArray.push(extractPlayerStat(player));
  }

  return normalizedArray;
};
