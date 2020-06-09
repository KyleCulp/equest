const { Client } = require('pg');
const prompt = require('prompt');
require('dotenv').config();

prompt.start();

async function installPostgres() {
  const connectionString = process.env.ROOT_DATABASE_URL;
  if (!connectionString) {
    throw new Error('ROOT_DATABASE_URL not set!');
  }

  const rlParserUsername = process.env.RL_PARSER_USERNAME;
  const rlParserPassword = process.env.RL_PARSER_PASSWORD;

  const databaseUser = process.env.PG_MASTER_USERNAME;
  const databaseUserPassword = process.env.PG_MASTER_PASSWORD;

  const sqlFile = `
    GRANT CONNECT ON DATABASE devadmin to app_rocket_league;

    DO $do$
      BEGIN
        IF NOT EXISTS (
          SELECT
          FROM
            pg_catalog.pg_roles
          WHERE
            rolname = '${rlParserUsername}') THEN
        CREATE ROLE ${rlParserUsername} SUPERUSER LOGIN PASSWORD '${rlParserPassword}';
      END IF;
    END
    $do$;

    DO $do$
      BEGIN
        IF NOT EXISTS (
          SELECT
          FROM
            pg_catalog.pg_roles
          WHERE
            rolname = '${databaseUser}') THEN
        CREATE ROLE ${databaseUser} LOGIN PASSWORD '${databaseUserPassword}';
      END IF;
    END
    $do$;
  `;

  const client = new Client({ connectionString });

  client.connect();
  client.query(sqlFile, (err, result) => {
    client.end();
    if (err) {
      console.log('error: ', err);
    }
    client.end();
  });
}

async function main() {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
  await installPostgres();
  console.log('This will reset the database, are you sure you want to do this? (Y/N) <---');
  prompt.get(['answer'], function (err, result) {
    try {
      execSync(`yarn workspace @equest/database reset && yarn workspace @equest/database migrate`, {
        stdio: 'inherit',
      });
    } catch (e) {
      /* noop */
    }
  });
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
}

main();
