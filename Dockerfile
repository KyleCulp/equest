ARG USER_UID=${UID:-1000}
ARG SETUP_MODE=normal
ARG TARGET

#### Stage 1: Build source
FROM node:12 as builder

ENV NODE_ENV=development
ARG TARGET

WORKDIR /workspace

COPY lerna.json package.json package-lock.json tsconfig.json /workspace/

COPY @equest/ /workspace/@equest/

COPY data/ /workspace/data/

RUN yarn

RUN lerna exec run "${TARGET}":build

###########################
#### Stage 2: Minimize size of image
FROM node:12 as clean

ARG NODE_ENV
ARG TARGET

COPY --from=builder /workspace/@equest/${TARGET}/package.json /workspace/@equest/${TARGET}/dist/ /app/
# COPY --from=builder /workspace/@equest/${TARGET}/dist/ /workspace/@equest/${TARGET}/dist/

RUN rm -Rf /workspace/node_modules /workspace/@equest/*/node_modules

#######
FROM node:12

ARG NODE_ENV
ARG PORT

ENV PORT=$PORT

EXPOSE $PORT

WORKDIR /app

COPY --from=clean /app/ /app/

RUN npm install --save-prod --save-exact

ENTRYPOINT node index.js