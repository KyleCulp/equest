const { execSync } = require('child_process');
const { basename, dirname, resolve } = require('path');

const projectName = basename(dirname(resolve(__dirname, ".")));

try {
  execSync(
    `docker volume rm ${projectName}_equest-nm_root ${projectName}_nm-equest-client ${projectName}_nm-equest-config ${projectName}_nm-equest-database ${projectName}_nm-equest-frontend ${projectName}_nm-equest-graphql ${projectName}_nm-equest-server ${projectName}_nm-equest-utils ${projectName}_nm-equest-worker `,
    { stdio: 'inherit' }
  );
} catch (e) {
  /* noop */
}
