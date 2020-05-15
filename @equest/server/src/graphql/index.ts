import { isDev } from '@equest/utils';
import PgManyToManyPlugin from '@graphile-contrib/pg-many-to-many';
import { resolve } from 'path';
import { PostGraphileOptions } from 'postgraphile';
import { makePgSmartTagsFromFilePlugin } from 'postgraphile/plugins';

import { getGraphqlResolvers } from './resolvers';

const schemas = ['app_public', 'rocket_league'];

const {
  PG_MASTER_ADMIN_USERNAME,
  PG_MASTER_ADMIN_PASSWORD,
  PG_MASTER_HOST,
  PG_MASTER_PORT,
  PG_MASTER_NAME,
} = process.env;

const ownerConnectionString = `postgres://${PG_MASTER_ADMIN_USERNAME}:${PG_MASTER_ADMIN_PASSWORD}@${PG_MASTER_HOST}:${PG_MASTER_PORT}/${PG_MASTER_NAME}`;

const TagsFilePlugin = makePgSmartTagsFromFilePlugin(
  // We're using JSONC for VSCode compatibility; also using an explicit file
  // path keeps the tests happy.
  resolve(__dirname, '../../postgraphile.tags.jsonc')
);

/*
 * Postgraphile plugins
 * TagsFilePlugin: Describe the schema in json, instead of smart sql comments.
 * PgManyToManyPlugin:
 *
 */
const postgraphilePlugins = [TagsFilePlugin, PgManyToManyPlugin];
const postgraphileResolvers = getGraphqlResolvers();

export const postgraphileOptionsDevelopment: PostGraphileOptions = {
  appendPlugins: postgraphilePlugins.concat(postgraphileResolvers),
  exportJsonSchemaPath: resolve(__dirname, '../../../../data/schema.json'), // export schema file
  exportGqlSchemaPath: resolve(__dirname, '../../../../data/schema.gql'), // export schema file
  watchPg: true,
  retryOnInitFail: false,
  ownerConnectionString: ownerConnectionString,
  subscriptions: true,
  live: true, // Enables live-queries
  // pgDefaultRole: 'app_anonymous',
  dynamicJson: true,
  setofFunctionsContainNulls: false, // Set to true if any setof psql functions return potential null
  classicIds: false,
  disableDefaultMutations: false, // Disables mutations for fields by default
  ignoreRBAC: false,
  ignoreIndexes: false,
  // includeExtensionResources: , // Include psql extension's tables to the graph
  showErrorStack: true,
  extendedErrors: ['hint', 'detail', 'errcode'],
  // handleErrors: true, // no idea what input it needs?
  // prependPlugins: , // No need to load plugins before postgraphile
  // skipPlugins: , // Skip core plugins
  // readCache: , // production only
  // writeCache: , // production only
  // sortExport: false,
  graphqlRoute: '/graphql',
  graphiqlRoute: '/graphiql',
  graphiql: true,
  enhanceGraphiql: true,
  enableCors: false, // Unknown what this does
  bodySizeLimit: '200kB', // Default is '100kB'
  enableQueryBatching: true, // Experimental, allows for multiple queries in one request
  // jwtSecret: 'pleaseacceptmyjwt',
  // jwtVerifyOptions: ,// https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
  // jwtRole: ['app_person'], // The role on the jwt, ['role'] is default
  // jwtPgTypeIdentifier: 'app_public.jwt_token', // The JWT Type in the DB, schema.table_name
  legacyJsonUuid: false,
  disableQueryLog: true,
  allowExplain: true,
  // additionalGraphQLContextFromRequest: , // Hmm
  simpleCollections: 'only', // disable relay stuff, we're using Apollo
  // queryCacheMaxSize: 0, // Query cache size, default is 50MB, 0 is infinite but broken lol
  /*
   * Plugins to enhance the GraphQL schema, see:
   *   https://www.graphile.org/postgraphile/extending/
   */

  graphileBuildOptions: {
    /*
     * Any properties here are merged into the settings passed to each Graphile
     * Engine plugin - useful for configuring how the plugins operate.
     */

    /*
     * We install our own watch fixtures manually because we run PostGraphile
     * with non-database-owner privileges, so we don't need to be warned that
     * they were not installed
     */
    pgSkipInstallingWatchFixtures: true,
  },
};

// Overwrite dev settings with prod settings
export const postgraphileOptionsProduction: PostGraphileOptions = {
  ...postgraphileOptionsDevelopment,
  watchPg: false,
  retryOnInitFail: true,
  extendedErrors: ['errcode'],
  exportGqlSchemaPath: undefined,
  exportJsonSchemaPath: undefined,
};

const postgraphileOptions = isDev
  ? postgraphileOptionsDevelopment
  : postgraphileOptionsProduction;

export const PostgraphileInstance = {
  schemas,
  postgraphileOptions,
};
