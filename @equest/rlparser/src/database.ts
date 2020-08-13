import { parseRocketLeagueReplay } from './parse';
import { ValidateResult } from '@typeonly/validator';
import { rlPgPool, executeTransaction, executeQuery } from './postgres';
import { ParsedReplay, CameraSettings } from './types';
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

export const isReplayDuplicate = async (replay_id: string): Promise<boolean> => {
  const sql = `SELECT 1 FROM rocket_league.carball_replay_meta WHERE replayId = '${replay_id}'`;
  return new Promise((resolve, reject) => {
    executeQuery(sql, [], async (err, result) => {
      if (err) console.log(err);
      if (result['rowCount'] > 0) resolve(true);
      else resolve(false);
    });
  });
};

interface uploadDataToPG {
  replayMeta: any;
  playerStats: any[];
  // parserResults: parseRocketLeagueReplay;
}

export const uploadDataToPG = async ({ replayMeta, playerStats }: uploadDataToPG) => {
  // console.log(replayMeta);
  await executeTransaction(async (client) => {
    // const result = await replay_meta(client, replayMeta);
    const result = await player_stat(client, replayMeta);
    console.log(result);
    // for (let player in playerStats) {
    //   await player_stat(client, player);
    // }
  });
};

const replay_meta = async (client: Client | PoolClient, data: any): Promise<QueryResult<any>> => {
  const mappedColumns = mapParamColumns(Object.keys(data));
  const mappedParams = mapParamNums(Object.keys(data).length);
  const values = Object.values(data);
  const sql = `INSERT INTO rocket_league.carball_replay_meta(${mappedColumns}) VALUES(${mappedParams}) RETURNING *`;

  return await client.query(sql, values);
};

const player_stat = async (client: Client | PoolClient, data: any): Promise<QueryResult<any>> => {
  const mappedColumns = mapParamColumns(Object.keys(data));
  const mappedParams = mapParamNums(Object.keys(data).length);
  const values = Object.values(data);
  const sql = `INSERT INTO rocket_league.carball_player_stats(${mappedColumns}) VALUES(${mappedParams}) RETURNING *`;

  return await client.query(sql, values);
};
