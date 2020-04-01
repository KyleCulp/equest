# Equest

## Initial Setup

### Docker

Any docker installation including docker-compose is required

[Docker Desktop (Includes compose)](https://www.docker.com/products/docker-desktop) Includes compose

Run `docker network create -d bridge equest` on initial setup. A universal network is required to interact with other containers outside this repository.

### Devcontainer

[VSCode Devcontainer setup guide](https://code.visualstudio.com/docs/remote/containers)

[VSCode Remote Development: Container Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Past troubles: Some packages are wrapper for a C program, which have different binaries for windows and linux. Errors relating to this occur when installing node_modules on a windows pc, then opening devcontainer and running on linux with windows binaries.

### Initialiation

Install monorepo packages with `npm i`.

After monorepo cli's are installed, run `npm run init`. This will initialise the postgres database, download and bootstrap all project dependencies, and other neccessities.

## Helpful docs

[Graphile Migrate](https://github.com/graphile/migrate)

[Postgraphile](https://www.graphile.org/postgraphile/introduction/)
