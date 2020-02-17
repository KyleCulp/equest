const { Client } = require('pg');

async function main() {
  const connectionString = process.env.ROOT_DATABASE_URL;
  if (!connectionString) {
    throw new Error('ROOT_DATABASE_URL not set!');
  }
  // const sqlFile = readFileSync('./migrations/afterReset.sql').toString();
  const databaseOwner = process.env.DATABASE_OWNER;
  const databaseOwnerPassword = process.env.DATABASE_OWNER_PASSWORD;

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
  `;
  const client = new Client({ connectionString });

  client.connect();
  client.query(sqlFile, (err, result) => {
    if (err) {
      console.log('error: ', err);
      process.exit(1);
    }
    console.log('Installation of schema complete.');
    process.exit(0);
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
