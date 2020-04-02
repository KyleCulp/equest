#!/usr/bin/env node
const { execSync } = require('child_process');
const { basename, dirname, resolve } = require('path');

const projectName = basename(dirname(resolve(__dirname, '..')));

try {
  execSync(
    `docker volume rm ${projectName}_equest-nm_root ${projectName}_equest-pgadmin-volume ${projectName}_equest-postgres-volume ${projectName}_equest-redis-volume ${projectName}_equest-vscode-extensions ${projectName}_equest-vscode-volume`,
    { stdio: 'inherit' }
  );
} catch (e) {
  /* noop */
}
