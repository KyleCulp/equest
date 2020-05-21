# Equest

## Initial Setup

### Docker

Any docker installation including docker-compose is required

[Docker Desktop (Includes compose)](https://www.docker.com/products/docker-desktop) Includes compose

Run `docker network create -d bridge equest` on initial setup. A universal network is required to interact with other containers outside this repository.

## Devcontainer

[VSCode Devcontainer setup guide](https://code.visualstudio.com/docs/remote/containers)

[VSCode Remote Development: Container Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

---

## Initialization

Run `yarn init`. This will download dependencies, initialize the postgres database, download and bootstrap all project dependencies, and other neccessities.

## Unique project gotchas

Getting error codes from functions in the database is weird, with alot of borrowed code from graphile/starter. utils handleErrors & graphqlErrors

## Helpful docs

[Graphile Migrate](https://github.com/graphile/migrate)

[Postgraphile](https://www.graphile.org/postgraphile/introduction/)

# Notes

This repo makes use of many frameworks and libraries. Although it may look like resume driven design took place here, this is a student research project for me to gain experience with many technologies and figure out what I want to do after college.
