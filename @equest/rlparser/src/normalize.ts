import { ParsedReplay, CameraSettings, PlayerItems, ControlConfig, PlayerStats } from './types';
import { cameraSettingsList, playerItemsList, controlConfigList } from './lists';

//https://jetrockets.pro/blog/rmvzzosmz9-rename-the-key-name-in-the-javascript-object#:~:text=How%20to%20rename%20the%20key,%3D%20targetKey%3B%20return%20clonedObj%3B%20%7D%3B
const clone = (obj: any) => Object.assign({}, obj);
const renameKey = (object: any, key: string, newKey: string) => {
  const clonedObj = clone(object);

  const targetKey = clonedObj[key];

  delete clonedObj[key];

  clonedObj[newKey] = targetKey;

  return clonedObj;
};

/*
 * Extract exact data pertaining to table replay_meta
 */
export const extractReplayMeta = (data: ParsedReplay): Partial<ParsedReplay> => {
  let newData = Object.assign({}, data);
  const omitList = ['player_stats', 'team_0_stats', 'team_1_stats'];
  newData = renameKey(newData, 'id', 'replay_id');
  for (let [key, value] of Object.entries(newData)) {
    if (omitList.includes(key)) {
      delete newData[key];
    }
  }

  return newData;
};

// Loop through player_stats array, grab the data & insert it
// Return an array of query results containing each insert result
export const extractPlayerStats = (data: ParsedReplay): Array<Partial<ParsedReplay>> => {
  let newData = Object.assign({}, data);
  let playerData: Array<Partial<ParsedReplay>> = [];
  for (let player of newData['player_stats']) {
    // The replays are outputted with the uploader having their id being replaced by their tm8s
    // And the base 'id' field is the uploaders platform_id
    const duplicate = playerData.filter((x) => (x.id == player['id'] && x.id != data['id']));
    if (duplicate) {
      throw new Error('This replay contains duplicate player_ids');
    }

    let cameraSettings = <CameraSettings>{};
    let controlConfig = <ControlConfig>{};
    let playerItems = <PlayerItems>{};
    for (let [key, value] of Object.entries(player)) {
      if (cameraSettingsList.includes(key)) {
        cameraSettings[key] = player[key];
        delete player[key];
      }
      if (controlConfigList.includes(key)) {
        controlConfig[key] = player[key];
        delete player[key];
      }
      if (playerItemsList.includes(key)) {
        playerItems[key] = player[key];
        delete player[key];
      }
    }
    player['replay_id'] = newData['id'];
    player['camera_settings'] = cameraSettings;
    player['control_config'] = controlConfig;
    player['player_items'] = playerItems;
    player = renameKey(player, 'id', 'platform_id');
    console.log('test 2');

    playerData.push(player);
  }
  return playerData;
};
