ARG USER_UID=${UID:-1000}
ARG SETUP_MODE=normal
ARG TARGET
ARG REGISTRY

#### Stage 1: Build source
FROM node:12-alpine as builder

ENV NODE_ENV=development
ARG REGISTRY
ARG TARGET

WORKDIR /workspace

COPY lerna.json package.json package-lock.json tsconfig.json /workspace/

COPY @equest/ /workspace/@equest/

COPY data/ /workspace/data/

RUN npm config set registry "${REGISTRY}"

RUN npm install --no-progress

RUN npm run "${TARGET}":build

###########################
#### Stage 2: Minimize size of image
FROM node:12-alpine as clean

ARG NODE_ENV
ARG TARGET

COPY --from=builder /workspace/@equest/${TARGET}/package.json /workspace/@equest/${TARGET}/dist/ /app/
# COPY --from=builder /workspace/@equest/${TARGET}/dist/ /workspace/@equest/${TARGET}/dist/

RUN rm -Rf /workspace/node_modules /workspace/@equest/*/node_modules

#######
FROM node:12-alpine

ARG NODE_ENV
ARG REGISTRY
ARG PORT

ENV PORT=$PORT

EXPOSE $PORT

WORKDIR /app

COPY --from=clean /app/ /app/

RUN npm config set registry "${REGISTRY}"

RUN npm install --save-prod --save-exact

ENTRYPOINT node dist/@equest/${TARGET}/index.js