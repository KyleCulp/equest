const { Client } = require('pg');
const prompt = require('prompt');
require('dotenv').config();

prompt.start();

async function installPostgres() {
  const connectionString = process.env.ROOT_DATABASE_URL;
  if (!connectionString) {
    throw new Error('ROOT_DATABASE_URL not set!');
  }

  const databaseOwner = process.env.PG_MASTER_ADMIN_USERNAME;
  const databaseOwnerPassword = process.env.PG_MASTER_ADMIN_PASSWORD;

  const databaseUser = process.env.PG_MASTER_USERNAME;
  const databaseUserPassword = process.env.PG_MASTER_PASSWORD;

  const sqlFile = `
    DO $do$
      BEGIN
        IF NOT EXISTS (
          SELECT
          FROM
            pg_catalog.pg_roles
          WHERE
            rolname = '${databaseOwner}') THEN
        CREATE ROLE ${databaseOwner} SUPERUSER LOGIN PASSWORD '${databaseOwnerPassword}';
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
    if (err) {
      console.log('error: ', err);
    }
    client.end();
  });
}

installPostgres();

async function main() {
  await installPostgres();
  console.log(
    'This will reset the database, are you sure you want to do this? (Y/N) <---'
  );
  prompt.get(['answer'], function (err, result) {
    try {
      execSync(
        `yarn workspace @equest/database reset && yarn workspace @equest/database migrate`,
        { stdio: 'inherit' }
      );
    } catch (e) {
      /* noop */
    }
  });

}



main();
