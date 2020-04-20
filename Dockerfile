# Global args, set before the first FROM, shared by all stages
ARG PORT=5678
ARG NODE_ENV="production"
ARG ROOT_URL="http://localhost:${PORT}"
ARG TARGET="server"

################################################################################
# Build stage 1 - `npm run build`

FROM node:12-alpine as builder
# Import our shared args
ARG NODE_ENV
ARG ROOT_URL

# Cache node_modules for as long as possible
COPY lerna.json package.json package-lock.json /workspace/
COPY @equest/ /workspace/@equest/
WORKDIR /workspace/
RUN npm install --only=dev

COPY tsconfig.json /workspace/
# Folders must be copied separately, files can be copied all at once
COPY scripts/ /workspace/scripts/
COPY data/ /workspace/data/

# Finally run the build script
RUN npm run build

################################################################################
# Build stage 2 - COPY the relevant things (multiple steps)

FROM node:12-alpine as clean
# Import our shared args
ARG NODE_ENV
ARG ROOT_URL

COPY --from=builder /workspace/@equest /workspace

RUN rm -Rf /workspace/node_modules /workspace/@equest/*/node_modules

################################################################################
# Build stage FINAL - COPY everything, once, and then do a clean `yarn install`

FROM node:12-alpine

EXPOSE $PORT
WORKDIR /workspace/
# Copy everything from stage 2, it's already been filtered
COPY --from=clean /workspace/ /workspace/

# Install yarn ASAP because it's the slowest
RUN npm install 

# Import our shared args
ARG PORT
ARG NODE_ENV
ARG ROOT_URL
ARG TARGET

LABEL description="My PostGraphile-powered $TARGET"

# You might want to disable GRAPHILE_TURBO if you have issues
ENV GRAPHILE_TURBO=1 TARGET=$TARGET PORT=$PORT
ENV DATABASE_HOST="pg"
ENV DATABASE_NAME="graphile_starter"
ENV DATABASE_OWNER="${DATABASE_NAME}"
ENV DATABASE_VISITOR="${DATABASE_NAME}_visitor"
ENV DATABASE_AUTHENTICATOR="${DATABASE_NAME}_authenticator"

# Entrypoint last so that we can run `sh` in previous build steps for debugging
ENTRYPOINT yarn "${TARGET}" start