ARG USER_UID=${UID:-1000}
ARG SETUP_MODE=normal
ARG TARGET
ARG REGISTRY

#### Stage 1: Build source
FROM node:12-alpine as builder

ENV NODE_ENV=development

WORKDIR /workspace

COPY lerna.json package.json package-lock.lock tsconfig.json /workspace/

COPY @equest /workspace/@equest/

COPY data/ /workspace/data/

RUN npm config set registry "${REGISTRY}"

RUN npm install --no-progress

RUN npm run build

###########################
#### Stage 2: Minimize size
FROM node:12-alpine as clean

ARG NODE_ENV

# COPY --from=builder /workspace/lerna.json /workspace/package.json /workspace/package-lock.json /workspace/
COPY --from=builder /workspace/package.json /workspace/package-lock.json /workspace/dist/ /workspace/@equest/${TARGET}/


FROM node:12-alpine

ARG NODE_ENV
ARG REGISTRY

EXPOSE $PORT

WORKDIR /workspace

COPY -from=clean /workspace/ /workspace/

RUN npm config set registry "${REGISTRY}"

RUN npm install --save-prod --save-exact

ENTRYPOINT node dist/index.js