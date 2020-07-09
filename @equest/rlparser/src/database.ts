import { parseRocketLeagueReplay } from './parse';
import { ValidateResult } from '@typeonly/validator';
import { rlPgPool, executeTransaction, executeQuery } from './postgres';
import { ParsedReplay, CameraSettings, PlayerItems, ControlConfig } from './types';
import { PoolClient, Client, QueryResult } from 'pg';
import { cameraSettingsList, controlConfigList, playerItemsList } from './lists';

const mapParamColumns = (keys: Array<string>) => {
  let sql = '';
  for (let i = 0; i < keys.length; i++) {
    if (keys.length - 1 == i) {
      // last column cannot have a trailing comma
      sql = sql.concat(keys[i]);
    } else {
      sql = sql.concat(keys[i], `, `);
    }
  }
  return sql;
};

// Add `$1, $2, $3, ..` to a string
const mapParamNums = (count: number): string => {
  let sql = '';
  for (let i = 1; i <= count; i++) {
    if (count == i) {
      // last column cannot have a trailing comma
      sql = sql.concat('$', String(i));
    } else {
      sql = sql.concat('$', String(i), ', ');
    }
  }
  return sql;
};

//https://jetrockets.pro/blog/rmvzzosmz9-rename-the-key-name-in-the-javascript-object#:~:text=How%20to%20rename%20the%20key,%3D%20targetKey%3B%20return%20clonedObj%3B%20%7D%3B
const clone = (obj: any) => Object.assign({}, obj);
const renameKey = (object: any, key: string, newKey: string) => {
  const clonedObj = clone(object);

  const targetKey = clonedObj[key];

  delete clonedObj[key];

  clonedObj[newKey] = targetKey;

  return clonedObj;
};

export const isReplayDuplicate = async (replay_id: string): Promise<boolean> => {
  const sql = `SELECT 1 FROM rocket_league.replay_meta WHERE replay_id = '${replay_id}'`;
  return new Promise((resolve, reject) => {
    executeQuery(sql, [], async (err, result) => {
      if (err) console.log(err);
      if (result['rowCount'] > 0) resolve(true);
      else resolve(false);
    });
  });
};

interface logs {
  parserResults: parseRocketLeagueReplay;
  validationResults: ValidateResult;
}

// Functions named after sql tables, each handling their own normalization
export const uploadDataToPG = async (data: ParsedReplay, logs: logs): Promise<Array<QueryResult<any>>> => {
  const newData = data; // passing by reference or something caused dumb issues
  let QueryResults: Array<QueryResult<any>> = [];
  await executeTransaction(async (client) => {
    const replayResults = await replay_meta(client, newData);
    // const playerResults = await player_stats(client, newData);
    QueryResults.concat(replayResults, playerResults);
  });
  return new Promise((resolve, reject) => {
    resolve(QueryResults);
  });
};

const replay_meta = async (client: Client | PoolClient, data: ParsedReplay): Promise<QueryResult<any>> => {
  const omitList = ['player_stats', 'team_0_stats', 'team_1_stats'];
  data = renameKey(data, 'id', 'replay_id');
  for (let [key, value] of Object.entries(data)) {
    if (omitList.includes(key)) {
      delete data[key];
    }
  }

  const mappedColumns = mapParamColumns(Object.keys(data));
  const mappedParams = mapParamNums(Object.keys(data).length);
  const values = Object.values(data);

  const sql = `INSERT INTO rocket_league.replay_meta(${mappedColumns}) VALUES(${mappedParams}) RETURNING *`;
  console.log(sql);

  return await client.query(sql, values);
};

// Loop through player_stats array, grab the data & insert it
// Return an array of query results containing each insert result
// const player_stats = async (client: Client | PoolClient, data: ParsedReplay): Promise<Array<QueryResult<any>>> => {
//   let QueryResults: Array<QueryResult<any>> = [];
//   try {
//     for (let player of data['player_stats']) {
//       const duplicate = await isDuplicate(client, data['id'], player['id']);
//       if (duplicate) {
//         console.log('This replay contains duplicate player_ids');
//         throw new Error();
//       }
//       let cameraSettings = <CameraSettings>{};
//       let controlConfig = <ControlConfig>{};
//       let playerItems = <PlayerItems>{};
//       for (let [key, value] of Object.entries(player)) {
//         if (cameraSettingsList.includes(key)) {
//           cameraSettings[key] = player[key];
//           delete player[key];
//         }
//         if (controlConfigList.includes(key)) {
//           controlConfig[key] = player[key];
//           delete player[key];
//         }
//         if (playerItemsList.includes(key)) {
//           playerItems[key] = player[key];
//           delete player[key];
//         }
//       }
//       player['replay_id'] = data['id'];
//       player['camera_settings'] = cameraSettings;
//       player['control_config'] = controlConfig;
//       player['player_items'] = playerItems;
//       player = renameKey(player, 'id', 'platform_id');
//       const mappedColumns = mapParamColumns(Object.keys(player));
//       const mappedParams = mapParamNums(Object.keys(player).length);
//       const values = Object.values(player);
//       const sql = `INSERT INTO rocket_league.player_stats(${mappedColumns}) VALUES(${mappedParams}) RETURNING *`;
//       const results = await client.query(sql, values);
//       QueryResults.push(results);
//     }
//   } catch (e) {
//     if (e) {
//       console.log(e);
//     }
//   }
//   return QueryResults;
// };
