/* eslint-disable */
/* THIS IS A GENERATED FILE - DO NOT MODIFY */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: string;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};


/** All input for the create `Meta` mutation. */
export type CreateMetaInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Meta` to be created by this mutation. */
  meta: MetaInput;
};

/** The output of our create `Meta` mutation. */
export type CreateMetaPayload = {
  __typename?: 'CreateMetaPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Meta` that was created by this mutation. */
  meta?: Maybe<Meta>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `StatsPlayer` mutation. */
export type CreateStatsPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `StatsPlayer` to be created by this mutation. */
  statsPlayer: StatsPlayerInput;
};

/** The output of our create `StatsPlayer` mutation. */
export type CreateStatsPlayerPayload = {
  __typename?: 'CreateStatsPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `StatsPlayer` that was created by this mutation. */
  statsPlayer?: Maybe<StatsPlayer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Meta` that is related to this `StatsPlayer`. */
  metaByReplayId?: Maybe<Meta>;
};

/** All input for the create `StatsTeam` mutation. */
export type CreateStatsTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `StatsTeam` to be created by this mutation. */
  statsTeam: StatsTeamInput;
};

/** The output of our create `StatsTeam` mutation. */
export type CreateStatsTeamPayload = {
  __typename?: 'CreateStatsTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `StatsTeam` that was created by this mutation. */
  statsTeam?: Maybe<StatsTeam>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Team` mutation. */
export type CreateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Team` to be created by this mutation. */
  team: TeamInput;
};

/** The output of our create `Team` mutation. */
export type CreateTeamPayload = {
  __typename?: 'CreateTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Team` that was created by this mutation. */
  team?: Maybe<Team>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `UserAccount` mutation. */
export type CreateUserAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserAccount` to be created by this mutation. */
  userAccount: UserAccountInput;
};

/** The output of our create `UserAccount` mutation. */
export type CreateUserAccountPayload = {
  __typename?: 'CreateUserAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserAccount` that was created by this mutation. */
  userAccount?: Maybe<UserAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** All input for the `deleteMetaByReplayId` mutation. */
export type DeleteMetaByReplayIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  replayId: Scalars['String'];
};

/** All input for the `deleteMeta` mutation. */
export type DeleteMetaInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Meta` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Meta` mutation. */
export type DeleteMetaPayload = {
  __typename?: 'DeleteMetaPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Meta` that was deleted by this mutation. */
  meta?: Maybe<Meta>;
  deletedMetaId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteStatsPlayerByReplayIdAndPlatformId` mutation. */
export type DeleteStatsPlayerByReplayIdAndPlatformIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  replayId: Scalars['String'];
  platformId: Scalars['String'];
};

/** All input for the `deleteStatsPlayer` mutation. */
export type DeleteStatsPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `StatsPlayer` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `StatsPlayer` mutation. */
export type DeleteStatsPlayerPayload = {
  __typename?: 'DeleteStatsPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `StatsPlayer` that was deleted by this mutation. */
  statsPlayer?: Maybe<StatsPlayer>;
  deletedStatsPlayerId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Meta` that is related to this `StatsPlayer`. */
  metaByReplayId?: Maybe<Meta>;
};

/** All input for the `deleteStatsTeamByReplayIdAndTeamId` mutation. */
export type DeleteStatsTeamByReplayIdAndTeamIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  replayId: Scalars['String'];
  teamId: Scalars['String'];
};

/** All input for the `deleteStatsTeam` mutation. */
export type DeleteStatsTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `StatsTeam` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `StatsTeam` mutation. */
export type DeleteStatsTeamPayload = {
  __typename?: 'DeleteStatsTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `StatsTeam` that was deleted by this mutation. */
  statsTeam?: Maybe<StatsTeam>;
  deletedStatsTeamId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteTeamByTeamId` mutation. */
export type DeleteTeamByTeamIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
};

/** All input for the `deleteTeam` mutation. */
export type DeleteTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Team` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Team` mutation. */
export type DeleteTeamPayload = {
  __typename?: 'DeleteTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Team` that was deleted by this mutation. */
  team?: Maybe<Team>;
  deletedTeamId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteUserAccountByUserId` mutation. */
export type DeleteUserAccountByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A user's unique ID. */
  userId: Scalars['UUID'];
};

/** All input for the `deleteUserAccountByUsername` mutation. */
export type DeleteUserAccountByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

/** All input for the `deleteUserAccount` mutation. */
export type DeleteUserAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserAccount` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `UserAccount` mutation. */
export type DeleteUserAccountPayload = {
  __typename?: 'DeleteUserAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserAccount` that was deleted by this mutation. */
  userAccount?: Maybe<UserAccount>;
  deletedUserAccountId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  user: UserAccount;
};

export type Meta = Node & {
  __typename?: 'Meta';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  replayId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  team0Score?: Maybe<Scalars['Int']>;
  team1Score?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['BigFloat']>;
  gameServerId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  matchGuid?: Maybe<Scalars['String']>;
  teamSize?: Maybe<Scalars['Int']>;
  playlist?: Maybe<Scalars['Int']>;
  isOrange?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `StatsPlayer`. */
  statsPlayersByReplayIdList: Array<StatsPlayer>;
};


export type MetaStatsPlayersByReplayIdListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<StatsPlayersOrderBy>>;
  condition?: Maybe<StatsPlayerCondition>;
};

/** A condition to be used against `Meta` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MetaCondition = {
  /** Checks for equality with the object’s `replayId` field. */
  replayId?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Meta` */
export type MetaInput = {
  replayId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  team0Score?: Maybe<Scalars['Int']>;
  team1Score?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['BigFloat']>;
  gameServerId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  matchGuid?: Maybe<Scalars['String']>;
  teamSize?: Maybe<Scalars['Int']>;
  playlist?: Maybe<Scalars['Int']>;
  isOrange?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Meta`. Fields that are set will be updated. */
export type MetaPatch = {
  replayId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  team0Score?: Maybe<Scalars['Int']>;
  team1Score?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['BigFloat']>;
  gameServerId?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  matchGuid?: Maybe<Scalars['String']>;
  teamSize?: Maybe<Scalars['Int']>;
  playlist?: Maybe<Scalars['Int']>;
  isOrange?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Methods to use when ordering `Meta`. */
export enum MetasOrderBy {
  Natural = 'NATURAL',
  ReplayIdAsc = 'REPLAY_ID_ASC',
  ReplayIdDesc = 'REPLAY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `UserAccount`. */
  createUserAccount?: Maybe<CreateUserAccountPayload>;
  /** Creates a single `Meta`. */
  createMeta?: Maybe<CreateMetaPayload>;
  /** Creates a single `StatsPlayer`. */
  createStatsPlayer?: Maybe<CreateStatsPlayerPayload>;
  /** Creates a single `StatsTeam`. */
  createStatsTeam?: Maybe<CreateStatsTeamPayload>;
  /** Creates a single `Team`. */
  createTeam?: Maybe<CreateTeamPayload>;
  /** Updates a single `UserAccount` using its globally unique id and a patch. */
  updateUserAccount?: Maybe<UpdateUserAccountPayload>;
  /** Updates a single `UserAccount` using a unique key and a patch. */
  updateUserAccountByUserId?: Maybe<UpdateUserAccountPayload>;
  /** Updates a single `UserAccount` using a unique key and a patch. */
  updateUserAccountByUsername?: Maybe<UpdateUserAccountPayload>;
  /** Updates a single `Meta` using its globally unique id and a patch. */
  updateMeta?: Maybe<UpdateMetaPayload>;
  /** Updates a single `Meta` using a unique key and a patch. */
  updateMetaByReplayId?: Maybe<UpdateMetaPayload>;
  /** Updates a single `StatsPlayer` using its globally unique id and a patch. */
  updateStatsPlayer?: Maybe<UpdateStatsPlayerPayload>;
  /** Updates a single `StatsPlayer` using a unique key and a patch. */
  updateStatsPlayerByReplayIdAndPlatformId?: Maybe<UpdateStatsPlayerPayload>;
  /** Updates a single `StatsTeam` using its globally unique id and a patch. */
  updateStatsTeam?: Maybe<UpdateStatsTeamPayload>;
  /** Updates a single `StatsTeam` using a unique key and a patch. */
  updateStatsTeamByReplayIdAndTeamId?: Maybe<UpdateStatsTeamPayload>;
  /** Updates a single `Team` using its globally unique id and a patch. */
  updateTeam?: Maybe<UpdateTeamPayload>;
  /** Updates a single `Team` using a unique key and a patch. */
  updateTeamByTeamId?: Maybe<UpdateTeamPayload>;
  /** Deletes a single `UserAccount` using its globally unique id. */
  deleteUserAccount?: Maybe<DeleteUserAccountPayload>;
  /** Deletes a single `UserAccount` using a unique key. */
  deleteUserAccountByUserId?: Maybe<DeleteUserAccountPayload>;
  /** Deletes a single `UserAccount` using a unique key. */
  deleteUserAccountByUsername?: Maybe<DeleteUserAccountPayload>;
  /** Deletes a single `Meta` using its globally unique id. */
  deleteMeta?: Maybe<DeleteMetaPayload>;
  /** Deletes a single `Meta` using a unique key. */
  deleteMetaByReplayId?: Maybe<DeleteMetaPayload>;
  /** Deletes a single `StatsPlayer` using its globally unique id. */
  deleteStatsPlayer?: Maybe<DeleteStatsPlayerPayload>;
  /** Deletes a single `StatsPlayer` using a unique key. */
  deleteStatsPlayerByReplayIdAndPlatformId?: Maybe<DeleteStatsPlayerPayload>;
  /** Deletes a single `StatsTeam` using its globally unique id. */
  deleteStatsTeam?: Maybe<DeleteStatsTeamPayload>;
  /** Deletes a single `StatsTeam` using a unique key. */
  deleteStatsTeamByReplayIdAndTeamId?: Maybe<DeleteStatsTeamPayload>;
  /** Deletes a single `Team` using its globally unique id. */
  deleteTeam?: Maybe<DeleteTeamPayload>;
  /** Deletes a single `Team` using a unique key. */
  deleteTeamByTeamId?: Maybe<DeleteTeamPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
  register?: Maybe<RegisterPayload>;
  login?: Maybe<LoginPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserAccountArgs = {
  input: CreateUserAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMetaArgs = {
  input: CreateMetaInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStatsPlayerArgs = {
  input: CreateStatsPlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStatsTeamArgs = {
  input: CreateStatsTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserAccountArgs = {
  input: UpdateUserAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserAccountByUserIdArgs = {
  input: UpdateUserAccountByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserAccountByUsernameArgs = {
  input: UpdateUserAccountByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMetaArgs = {
  input: UpdateMetaInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMetaByReplayIdArgs = {
  input: UpdateMetaByReplayIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStatsPlayerArgs = {
  input: UpdateStatsPlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStatsPlayerByReplayIdAndPlatformIdArgs = {
  input: UpdateStatsPlayerByReplayIdAndPlatformIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStatsTeamArgs = {
  input: UpdateStatsTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStatsTeamByReplayIdAndTeamIdArgs = {
  input: UpdateStatsTeamByReplayIdAndTeamIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamByTeamIdArgs = {
  input: UpdateTeamByTeamIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAccountArgs = {
  input: DeleteUserAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAccountByUserIdArgs = {
  input: DeleteUserAccountByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAccountByUsernameArgs = {
  input: DeleteUserAccountByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMetaArgs = {
  input: DeleteMetaInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMetaByReplayIdArgs = {
  input: DeleteMetaByReplayIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStatsPlayerArgs = {
  input: DeleteStatsPlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStatsPlayerByReplayIdAndPlatformIdArgs = {
  input: DeleteStatsPlayerByReplayIdAndPlatformIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStatsTeamArgs = {
  input: DeleteStatsTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStatsTeamByReplayIdAndTeamIdArgs = {
  input: DeleteStatsTeamByReplayIdAndTeamIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamByTeamIdArgs = {
  input: DeleteTeamByTeamIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationLoginArgs = {
  input: LoginInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads a set of `Meta`. */
  allMetasList?: Maybe<Array<Meta>>;
  /** Reads a set of `StatsPlayer`. */
  allStatsPlayersList?: Maybe<Array<StatsPlayer>>;
  /** Reads a set of `StatsTeam`. */
  allStatsTeamsList?: Maybe<Array<StatsTeam>>;
  /** Reads a set of `Team`. */
  allTeamsList?: Maybe<Array<Team>>;
  userAccountByUserId?: Maybe<UserAccount>;
  userAccountByUsername?: Maybe<UserAccount>;
  metaByReplayId?: Maybe<Meta>;
  statsPlayerByReplayIdAndPlatformId?: Maybe<StatsPlayer>;
  statsTeamByReplayIdAndTeamId?: Maybe<StatsTeam>;
  teamByTeamId?: Maybe<Team>;
  currentPerson?: Maybe<UserAccount>;
  /** Reads a single `UserAccount` using its globally unique `ID`. */
  userAccount?: Maybe<UserAccount>;
  /** Reads a single `Meta` using its globally unique `ID`. */
  meta?: Maybe<Meta>;
  /** Reads a single `StatsPlayer` using its globally unique `ID`. */
  statsPlayer?: Maybe<StatsPlayer>;
  /** Reads a single `StatsTeam` using its globally unique `ID`. */
  statsTeam?: Maybe<StatsTeam>;
  /** Reads a single `Team` using its globally unique `ID`. */
  team?: Maybe<Team>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMetasListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<MetasOrderBy>>;
  condition?: Maybe<MetaCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStatsPlayersListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<StatsPlayersOrderBy>>;
  condition?: Maybe<StatsPlayerCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllStatsTeamsListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<StatsTeamsOrderBy>>;
  condition?: Maybe<StatsTeamCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTeamsListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TeamsOrderBy>>;
  condition?: Maybe<TeamCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserAccountByUserIdArgs = {
  userId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserAccountByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetaByReplayIdArgs = {
  replayId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStatsPlayerByReplayIdAndPlatformIdArgs = {
  replayId: Scalars['String'];
  platformId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStatsTeamByReplayIdAndTeamIdArgs = {
  replayId: Scalars['String'];
  teamId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamByTeamIdArgs = {
  teamId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserAccountArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetaArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStatsPlayerArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStatsTeamArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamArgs = {
  nodeId: Scalars['ID'];
};

export type RegisterInput = {
  username?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  user: UserAccount;
};

/** All input for the `registerUser` mutation. */
export type RegisterUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

/** The output of our `registerUser` mutation. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  userAccount?: Maybe<UserAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type StatsPlayer = Node & {
  __typename?: 'StatsPlayer';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  replayId: Scalars['String'];
  platformId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  assists?: Maybe<Scalars['Int']>;
  saves?: Maybe<Scalars['Int']>;
  shots?: Maybe<Scalars['Int']>;
  possessionTime?: Maybe<Scalars['BigFloat']>;
  turnovers?: Maybe<Scalars['BigFloat']>;
  turnoversOnMyHalf?: Maybe<Scalars['BigFloat']>;
  wonTurnovers?: Maybe<Scalars['BigFloat']>;
  timeOnGround?: Maybe<Scalars['BigFloat']>;
  timeLowInAir?: Maybe<Scalars['BigFloat']>;
  timeHighInAir?: Maybe<Scalars['BigFloat']>;
  timeInDefendingHalf?: Maybe<Scalars['BigFloat']>;
  timeInAttackingHalf?: Maybe<Scalars['BigFloat']>;
  timeInDefendingThird?: Maybe<Scalars['BigFloat']>;
  timeInNeutralThird?: Maybe<Scalars['BigFloat']>;
  timeInAttackingThird?: Maybe<Scalars['BigFloat']>;
  timeBehindBall?: Maybe<Scalars['BigFloat']>;
  timeInFrontBall?: Maybe<Scalars['BigFloat']>;
  timeNearWall?: Maybe<Scalars['BigFloat']>;
  timeInCorner?: Maybe<Scalars['BigFloat']>;
  timeOnWall?: Maybe<Scalars['BigFloat']>;
  averageSpeed?: Maybe<Scalars['BigFloat']>;
  averageHitDistance?: Maybe<Scalars['BigFloat']>;
  averageDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  totalGoals?: Maybe<Scalars['BigFloat']>;
  totalHits?: Maybe<Scalars['BigFloat']>;
  totalPasses?: Maybe<Scalars['BigFloat']>;
  totalDribbles?: Maybe<Scalars['BigFloat']>;
  totalDribbleConts?: Maybe<Scalars['BigFloat']>;
  totalAerials?: Maybe<Scalars['BigFloat']>;
  totalClears?: Maybe<Scalars['BigFloat']>;
  timeAtSlowSpeed?: Maybe<Scalars['BigFloat']>;
  timeAtSuperSonic?: Maybe<Scalars['BigFloat']>;
  timeAtBoostSpeed?: Maybe<Scalars['BigFloat']>;
  timeInFrontOfCenterOfMass?: Maybe<Scalars['BigFloat']>;
  timeBehindCenterOfMass?: Maybe<Scalars['BigFloat']>;
  timeMostForwardPlayer?: Maybe<Scalars['BigFloat']>;
  timeMostBackPlayer?: Maybe<Scalars['BigFloat']>;
  timeBetweenPlayers?: Maybe<Scalars['BigFloat']>;
  pass_?: Maybe<Scalars['BigFloat']>;
  passed?: Maybe<Scalars['BigFloat']>;
  dribble?: Maybe<Scalars['BigFloat']>;
  dribbleContinuation?: Maybe<Scalars['BigFloat']>;
  shot?: Maybe<Scalars['BigFloat']>;
  goal?: Maybe<Scalars['BigFloat']>;
  assist?: Maybe<Scalars['BigFloat']>;
  assisted?: Maybe<Scalars['BigFloat']>;
  save?: Maybe<Scalars['BigFloat']>;
  aerial?: Maybe<Scalars['BigFloat']>;
  averageDuration?: Maybe<Scalars['BigFloat']>;
  averageHits?: Maybe<Scalars['BigFloat']>;
  count?: Maybe<Scalars['BigFloat']>;
  totalKickoffs?: Maybe<Scalars['BigFloat']>;
  numTimeBoost?: Maybe<Scalars['BigFloat']>;
  numTimeCheat?: Maybe<Scalars['BigFloat']>;
  numTimeGoToBall?: Maybe<Scalars['BigFloat']>;
  numTimeDefend?: Maybe<Scalars['BigFloat']>;
  numTimeAfk?: Maybe<Scalars['BigFloat']>;
  averageBoostUsed?: Maybe<Scalars['BigFloat']>;
  turnoversOnTheirHalf?: Maybe<Scalars['BigFloat']>;
  totalSaves?: Maybe<Scalars['BigFloat']>;
  numTimeFirstTouch?: Maybe<Scalars['BigFloat']>;
  totalShots?: Maybe<Scalars['BigFloat']>;
  totalCarries?: Maybe<Scalars['BigFloat']>;
  totalFlicks?: Maybe<Scalars['BigFloat']>;
  longestCarry?: Maybe<Scalars['BigFloat']>;
  furthestCarry?: Maybe<Scalars['BigFloat']>;
  totalCarryTime?: Maybe<Scalars['BigFloat']>;
  averageCarryTime?: Maybe<Scalars['BigFloat']>;
  fastestCarrySpeed?: Maybe<Scalars['BigFloat']>;
  totalCarryDistance?: Maybe<Scalars['BigFloat']>;
  averageZDistance?: Maybe<Scalars['BigFloat']>;
  averageXyDistance?: Maybe<Scalars['BigFloat']>;
  averageBallZVelocity?: Maybe<Scalars['BigFloat']>;
  varianceXyDistance?: Maybe<Scalars['BigFloat']>;
  varianceZDistance?: Maybe<Scalars['BigFloat']>;
  varianceBallZVelocity?: Maybe<Scalars['BigFloat']>;
  averageCarrySpeed?: Maybe<Scalars['BigFloat']>;
  distanceAlongPath?: Maybe<Scalars['BigFloat']>;
  /** Reads a single `Meta` that is related to this `StatsPlayer`. */
  metaByReplayId?: Maybe<Meta>;
};

/**
 * A condition to be used against `StatsPlayer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type StatsPlayerCondition = {
  /** Checks for equality with the object’s `replayId` field. */
  replayId?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `StatsPlayer` */
export type StatsPlayerInput = {
  replayId: Scalars['String'];
  platformId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  assists?: Maybe<Scalars['Int']>;
  saves?: Maybe<Scalars['Int']>;
  shots?: Maybe<Scalars['Int']>;
  possessionTime?: Maybe<Scalars['BigFloat']>;
  turnovers?: Maybe<Scalars['BigFloat']>;
  turnoversOnMyHalf?: Maybe<Scalars['BigFloat']>;
  wonTurnovers?: Maybe<Scalars['BigFloat']>;
  timeOnGround?: Maybe<Scalars['BigFloat']>;
  timeLowInAir?: Maybe<Scalars['BigFloat']>;
  timeHighInAir?: Maybe<Scalars['BigFloat']>;
  timeInDefendingHalf?: Maybe<Scalars['BigFloat']>;
  timeInAttackingHalf?: Maybe<Scalars['BigFloat']>;
  timeInDefendingThird?: Maybe<Scalars['BigFloat']>;
  timeInNeutralThird?: Maybe<Scalars['BigFloat']>;
  timeInAttackingThird?: Maybe<Scalars['BigFloat']>;
  timeBehindBall?: Maybe<Scalars['BigFloat']>;
  timeInFrontBall?: Maybe<Scalars['BigFloat']>;
  timeNearWall?: Maybe<Scalars['BigFloat']>;
  timeInCorner?: Maybe<Scalars['BigFloat']>;
  timeOnWall?: Maybe<Scalars['BigFloat']>;
  averageSpeed?: Maybe<Scalars['BigFloat']>;
  averageHitDistance?: Maybe<Scalars['BigFloat']>;
  averageDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  totalGoals?: Maybe<Scalars['BigFloat']>;
  totalHits?: Maybe<Scalars['BigFloat']>;
  totalPasses?: Maybe<Scalars['BigFloat']>;
  totalDribbles?: Maybe<Scalars['BigFloat']>;
  totalDribbleConts?: Maybe<Scalars['BigFloat']>;
  totalAerials?: Maybe<Scalars['BigFloat']>;
  totalClears?: Maybe<Scalars['BigFloat']>;
  timeAtSlowSpeed?: Maybe<Scalars['BigFloat']>;
  timeAtSuperSonic?: Maybe<Scalars['BigFloat']>;
  timeAtBoostSpeed?: Maybe<Scalars['BigFloat']>;
  timeInFrontOfCenterOfMass?: Maybe<Scalars['BigFloat']>;
  timeBehindCenterOfMass?: Maybe<Scalars['BigFloat']>;
  timeMostForwardPlayer?: Maybe<Scalars['BigFloat']>;
  timeMostBackPlayer?: Maybe<Scalars['BigFloat']>;
  timeBetweenPlayers?: Maybe<Scalars['BigFloat']>;
  pass_?: Maybe<Scalars['BigFloat']>;
  passed?: Maybe<Scalars['BigFloat']>;
  dribble?: Maybe<Scalars['BigFloat']>;
  dribbleContinuation?: Maybe<Scalars['BigFloat']>;
  shot?: Maybe<Scalars['BigFloat']>;
  goal?: Maybe<Scalars['BigFloat']>;
  assist?: Maybe<Scalars['BigFloat']>;
  assisted?: Maybe<Scalars['BigFloat']>;
  save?: Maybe<Scalars['BigFloat']>;
  aerial?: Maybe<Scalars['BigFloat']>;
  averageDuration?: Maybe<Scalars['BigFloat']>;
  averageHits?: Maybe<Scalars['BigFloat']>;
  count?: Maybe<Scalars['BigFloat']>;
  totalKickoffs?: Maybe<Scalars['BigFloat']>;
  numTimeBoost?: Maybe<Scalars['BigFloat']>;
  numTimeCheat?: Maybe<Scalars['BigFloat']>;
  numTimeGoToBall?: Maybe<Scalars['BigFloat']>;
  numTimeDefend?: Maybe<Scalars['BigFloat']>;
  numTimeAfk?: Maybe<Scalars['BigFloat']>;
  averageBoostUsed?: Maybe<Scalars['BigFloat']>;
  turnoversOnTheirHalf?: Maybe<Scalars['BigFloat']>;
  totalSaves?: Maybe<Scalars['BigFloat']>;
  numTimeFirstTouch?: Maybe<Scalars['BigFloat']>;
  totalShots?: Maybe<Scalars['BigFloat']>;
  totalCarries?: Maybe<Scalars['BigFloat']>;
  totalFlicks?: Maybe<Scalars['BigFloat']>;
  longestCarry?: Maybe<Scalars['BigFloat']>;
  furthestCarry?: Maybe<Scalars['BigFloat']>;
  totalCarryTime?: Maybe<Scalars['BigFloat']>;
  averageCarryTime?: Maybe<Scalars['BigFloat']>;
  fastestCarrySpeed?: Maybe<Scalars['BigFloat']>;
  totalCarryDistance?: Maybe<Scalars['BigFloat']>;
  averageZDistance?: Maybe<Scalars['BigFloat']>;
  averageXyDistance?: Maybe<Scalars['BigFloat']>;
  averageBallZVelocity?: Maybe<Scalars['BigFloat']>;
  varianceXyDistance?: Maybe<Scalars['BigFloat']>;
  varianceZDistance?: Maybe<Scalars['BigFloat']>;
  varianceBallZVelocity?: Maybe<Scalars['BigFloat']>;
  averageCarrySpeed?: Maybe<Scalars['BigFloat']>;
  distanceAlongPath?: Maybe<Scalars['BigFloat']>;
};

/** Represents an update to a `StatsPlayer`. Fields that are set will be updated. */
export type StatsPlayerPatch = {
  replayId?: Maybe<Scalars['String']>;
  platformId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  assists?: Maybe<Scalars['Int']>;
  saves?: Maybe<Scalars['Int']>;
  shots?: Maybe<Scalars['Int']>;
  possessionTime?: Maybe<Scalars['BigFloat']>;
  turnovers?: Maybe<Scalars['BigFloat']>;
  turnoversOnMyHalf?: Maybe<Scalars['BigFloat']>;
  wonTurnovers?: Maybe<Scalars['BigFloat']>;
  timeOnGround?: Maybe<Scalars['BigFloat']>;
  timeLowInAir?: Maybe<Scalars['BigFloat']>;
  timeHighInAir?: Maybe<Scalars['BigFloat']>;
  timeInDefendingHalf?: Maybe<Scalars['BigFloat']>;
  timeInAttackingHalf?: Maybe<Scalars['BigFloat']>;
  timeInDefendingThird?: Maybe<Scalars['BigFloat']>;
  timeInNeutralThird?: Maybe<Scalars['BigFloat']>;
  timeInAttackingThird?: Maybe<Scalars['BigFloat']>;
  timeBehindBall?: Maybe<Scalars['BigFloat']>;
  timeInFrontBall?: Maybe<Scalars['BigFloat']>;
  timeNearWall?: Maybe<Scalars['BigFloat']>;
  timeInCorner?: Maybe<Scalars['BigFloat']>;
  timeOnWall?: Maybe<Scalars['BigFloat']>;
  averageSpeed?: Maybe<Scalars['BigFloat']>;
  averageHitDistance?: Maybe<Scalars['BigFloat']>;
  averageDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  totalGoals?: Maybe<Scalars['BigFloat']>;
  totalHits?: Maybe<Scalars['BigFloat']>;
  totalPasses?: Maybe<Scalars['BigFloat']>;
  totalDribbles?: Maybe<Scalars['BigFloat']>;
  totalDribbleConts?: Maybe<Scalars['BigFloat']>;
  totalAerials?: Maybe<Scalars['BigFloat']>;
  totalClears?: Maybe<Scalars['BigFloat']>;
  timeAtSlowSpeed?: Maybe<Scalars['BigFloat']>;
  timeAtSuperSonic?: Maybe<Scalars['BigFloat']>;
  timeAtBoostSpeed?: Maybe<Scalars['BigFloat']>;
  timeInFrontOfCenterOfMass?: Maybe<Scalars['BigFloat']>;
  timeBehindCenterOfMass?: Maybe<Scalars['BigFloat']>;
  timeMostForwardPlayer?: Maybe<Scalars['BigFloat']>;
  timeMostBackPlayer?: Maybe<Scalars['BigFloat']>;
  timeBetweenPlayers?: Maybe<Scalars['BigFloat']>;
  pass_?: Maybe<Scalars['BigFloat']>;
  passed?: Maybe<Scalars['BigFloat']>;
  dribble?: Maybe<Scalars['BigFloat']>;
  dribbleContinuation?: Maybe<Scalars['BigFloat']>;
  shot?: Maybe<Scalars['BigFloat']>;
  goal?: Maybe<Scalars['BigFloat']>;
  assist?: Maybe<Scalars['BigFloat']>;
  assisted?: Maybe<Scalars['BigFloat']>;
  save?: Maybe<Scalars['BigFloat']>;
  aerial?: Maybe<Scalars['BigFloat']>;
  averageDuration?: Maybe<Scalars['BigFloat']>;
  averageHits?: Maybe<Scalars['BigFloat']>;
  count?: Maybe<Scalars['BigFloat']>;
  totalKickoffs?: Maybe<Scalars['BigFloat']>;
  numTimeBoost?: Maybe<Scalars['BigFloat']>;
  numTimeCheat?: Maybe<Scalars['BigFloat']>;
  numTimeGoToBall?: Maybe<Scalars['BigFloat']>;
  numTimeDefend?: Maybe<Scalars['BigFloat']>;
  numTimeAfk?: Maybe<Scalars['BigFloat']>;
  averageBoostUsed?: Maybe<Scalars['BigFloat']>;
  turnoversOnTheirHalf?: Maybe<Scalars['BigFloat']>;
  totalSaves?: Maybe<Scalars['BigFloat']>;
  numTimeFirstTouch?: Maybe<Scalars['BigFloat']>;
  totalShots?: Maybe<Scalars['BigFloat']>;
  totalCarries?: Maybe<Scalars['BigFloat']>;
  totalFlicks?: Maybe<Scalars['BigFloat']>;
  longestCarry?: Maybe<Scalars['BigFloat']>;
  furthestCarry?: Maybe<Scalars['BigFloat']>;
  totalCarryTime?: Maybe<Scalars['BigFloat']>;
  averageCarryTime?: Maybe<Scalars['BigFloat']>;
  fastestCarrySpeed?: Maybe<Scalars['BigFloat']>;
  totalCarryDistance?: Maybe<Scalars['BigFloat']>;
  averageZDistance?: Maybe<Scalars['BigFloat']>;
  averageXyDistance?: Maybe<Scalars['BigFloat']>;
  averageBallZVelocity?: Maybe<Scalars['BigFloat']>;
  varianceXyDistance?: Maybe<Scalars['BigFloat']>;
  varianceZDistance?: Maybe<Scalars['BigFloat']>;
  varianceBallZVelocity?: Maybe<Scalars['BigFloat']>;
  averageCarrySpeed?: Maybe<Scalars['BigFloat']>;
  distanceAlongPath?: Maybe<Scalars['BigFloat']>;
};

/** Methods to use when ordering `StatsPlayer`. */
export enum StatsPlayersOrderBy {
  Natural = 'NATURAL',
  ReplayIdAsc = 'REPLAY_ID_ASC',
  ReplayIdDesc = 'REPLAY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type StatsTeam = Node & {
  __typename?: 'StatsTeam';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  teamId: Scalars['String'];
  replayId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigFloat']>;
  possession?: Maybe<Scalars['BigFloat']>;
  possessionTime?: Maybe<Scalars['BigFloat']>;
  turnovers?: Maybe<Scalars['BigFloat']>;
  turnoversOnMyHalf?: Maybe<Scalars['BigFloat']>;
  turnoversOnTheirHalf?: Maybe<Scalars['BigFloat']>;
  wonTurnovers?: Maybe<Scalars['BigFloat']>;
  hitCounts?: Maybe<Scalars['BigFloat']>;
  totalGoals?: Maybe<Scalars['BigFloat']>;
  totalHits?: Maybe<Scalars['BigFloat']>;
  totalPasses?: Maybe<Scalars['BigFloat']>;
  totalShots?: Maybe<Scalars['BigFloat']>;
  totalDribbles?: Maybe<Scalars['BigFloat']>;
  totalDribbleConts?: Maybe<Scalars['BigFloat']>;
  totalAerials?: Maybe<Scalars['BigFloat']>;
  totalClears?: Maybe<Scalars['BigFloat']>;
  totalSaves?: Maybe<Scalars['BigFloat']>;
  centerOfMass?: Maybe<Scalars['BigFloat']>;
  positionalTendencies?: Maybe<Scalars['BigFloat']>;
  timeOnGround?: Maybe<Scalars['BigFloat']>;
  timeLowInAir?: Maybe<Scalars['BigFloat']>;
  timeHighInAir?: Maybe<Scalars['BigFloat']>;
  timeInDefendingHalf?: Maybe<Scalars['BigFloat']>;
  timeInAttackingHalf?: Maybe<Scalars['BigFloat']>;
  timeInDefendingThird?: Maybe<Scalars['BigFloat']>;
  timeInNeutralThird?: Maybe<Scalars['BigFloat']>;
  timeInAttackingThird?: Maybe<Scalars['BigFloat']>;
  timeBehindBall?: Maybe<Scalars['BigFloat']>;
  timeInFrontBall?: Maybe<Scalars['BigFloat']>;
  timeNearWall?: Maybe<Scalars['BigFloat']>;
  timeInCorner?: Maybe<Scalars['BigFloat']>;
  timeOnWall?: Maybe<Scalars['BigFloat']>;
  averageDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  averageMaxDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  timeClumped?: Maybe<Scalars['BigFloat']>;
  timeBoondocks?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `StatsTeam` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type StatsTeamCondition = {
  /** Checks for equality with the object’s `replayId` field. */
  replayId?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `StatsTeam` */
export type StatsTeamInput = {
  teamId: Scalars['String'];
  replayId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigFloat']>;
  possession?: Maybe<Scalars['BigFloat']>;
  possessionTime?: Maybe<Scalars['BigFloat']>;
  turnovers?: Maybe<Scalars['BigFloat']>;
  turnoversOnMyHalf?: Maybe<Scalars['BigFloat']>;
  turnoversOnTheirHalf?: Maybe<Scalars['BigFloat']>;
  wonTurnovers?: Maybe<Scalars['BigFloat']>;
  hitCounts?: Maybe<Scalars['BigFloat']>;
  totalGoals?: Maybe<Scalars['BigFloat']>;
  totalHits?: Maybe<Scalars['BigFloat']>;
  totalPasses?: Maybe<Scalars['BigFloat']>;
  totalShots?: Maybe<Scalars['BigFloat']>;
  totalDribbles?: Maybe<Scalars['BigFloat']>;
  totalDribbleConts?: Maybe<Scalars['BigFloat']>;
  totalAerials?: Maybe<Scalars['BigFloat']>;
  totalClears?: Maybe<Scalars['BigFloat']>;
  totalSaves?: Maybe<Scalars['BigFloat']>;
  centerOfMass?: Maybe<Scalars['BigFloat']>;
  positionalTendencies?: Maybe<Scalars['BigFloat']>;
  timeOnGround?: Maybe<Scalars['BigFloat']>;
  timeLowInAir?: Maybe<Scalars['BigFloat']>;
  timeHighInAir?: Maybe<Scalars['BigFloat']>;
  timeInDefendingHalf?: Maybe<Scalars['BigFloat']>;
  timeInAttackingHalf?: Maybe<Scalars['BigFloat']>;
  timeInDefendingThird?: Maybe<Scalars['BigFloat']>;
  timeInNeutralThird?: Maybe<Scalars['BigFloat']>;
  timeInAttackingThird?: Maybe<Scalars['BigFloat']>;
  timeBehindBall?: Maybe<Scalars['BigFloat']>;
  timeInFrontBall?: Maybe<Scalars['BigFloat']>;
  timeNearWall?: Maybe<Scalars['BigFloat']>;
  timeInCorner?: Maybe<Scalars['BigFloat']>;
  timeOnWall?: Maybe<Scalars['BigFloat']>;
  averageDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  averageMaxDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  timeClumped?: Maybe<Scalars['BigFloat']>;
  timeBoondocks?: Maybe<Scalars['BigFloat']>;
};

/** Represents an update to a `StatsTeam`. Fields that are set will be updated. */
export type StatsTeamPatch = {
  teamId?: Maybe<Scalars['String']>;
  replayId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigFloat']>;
  possession?: Maybe<Scalars['BigFloat']>;
  possessionTime?: Maybe<Scalars['BigFloat']>;
  turnovers?: Maybe<Scalars['BigFloat']>;
  turnoversOnMyHalf?: Maybe<Scalars['BigFloat']>;
  turnoversOnTheirHalf?: Maybe<Scalars['BigFloat']>;
  wonTurnovers?: Maybe<Scalars['BigFloat']>;
  hitCounts?: Maybe<Scalars['BigFloat']>;
  totalGoals?: Maybe<Scalars['BigFloat']>;
  totalHits?: Maybe<Scalars['BigFloat']>;
  totalPasses?: Maybe<Scalars['BigFloat']>;
  totalShots?: Maybe<Scalars['BigFloat']>;
  totalDribbles?: Maybe<Scalars['BigFloat']>;
  totalDribbleConts?: Maybe<Scalars['BigFloat']>;
  totalAerials?: Maybe<Scalars['BigFloat']>;
  totalClears?: Maybe<Scalars['BigFloat']>;
  totalSaves?: Maybe<Scalars['BigFloat']>;
  centerOfMass?: Maybe<Scalars['BigFloat']>;
  positionalTendencies?: Maybe<Scalars['BigFloat']>;
  timeOnGround?: Maybe<Scalars['BigFloat']>;
  timeLowInAir?: Maybe<Scalars['BigFloat']>;
  timeHighInAir?: Maybe<Scalars['BigFloat']>;
  timeInDefendingHalf?: Maybe<Scalars['BigFloat']>;
  timeInAttackingHalf?: Maybe<Scalars['BigFloat']>;
  timeInDefendingThird?: Maybe<Scalars['BigFloat']>;
  timeInNeutralThird?: Maybe<Scalars['BigFloat']>;
  timeInAttackingThird?: Maybe<Scalars['BigFloat']>;
  timeBehindBall?: Maybe<Scalars['BigFloat']>;
  timeInFrontBall?: Maybe<Scalars['BigFloat']>;
  timeNearWall?: Maybe<Scalars['BigFloat']>;
  timeInCorner?: Maybe<Scalars['BigFloat']>;
  timeOnWall?: Maybe<Scalars['BigFloat']>;
  averageDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  averageMaxDistanceFromCenter?: Maybe<Scalars['BigFloat']>;
  timeClumped?: Maybe<Scalars['BigFloat']>;
  timeBoondocks?: Maybe<Scalars['BigFloat']>;
};

/** Methods to use when ordering `StatsTeam`. */
export enum StatsTeamsOrderBy {
  Natural = 'NATURAL',
  ReplayIdAsc = 'REPLAY_ID_ASC',
  ReplayIdDesc = 'REPLAY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type Subscription = {
  __typename?: 'Subscription';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form. (live)
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. (live) */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. (live) */
  node?: Maybe<Node>;
  /** Reads a set of `Meta`. (live) */
  allMetasList?: Maybe<Array<Meta>>;
  /** Reads a set of `StatsPlayer`. (live) */
  allStatsPlayersList?: Maybe<Array<StatsPlayer>>;
  /** Reads a set of `StatsTeam`. (live) */
  allStatsTeamsList?: Maybe<Array<StatsTeam>>;
  /** Reads a set of `Team`. (live) */
  allTeamsList?: Maybe<Array<Team>>;
  /**  (live) */
  userAccountByUserId?: Maybe<UserAccount>;
  /**  (live) */
  userAccountByUsername?: Maybe<UserAccount>;
  /**  (live) */
  metaByReplayId?: Maybe<Meta>;
  /**  (live) */
  statsPlayerByReplayIdAndPlatformId?: Maybe<StatsPlayer>;
  /**  (live) */
  statsTeamByReplayIdAndTeamId?: Maybe<StatsTeam>;
  /**  (live) */
  teamByTeamId?: Maybe<Team>;
  /**  (live) */
  currentPerson?: Maybe<UserAccount>;
  /** Reads a single `UserAccount` using its globally unique `ID`. (live) */
  userAccount?: Maybe<UserAccount>;
  /** Reads a single `Meta` using its globally unique `ID`. (live) */
  meta?: Maybe<Meta>;
  /** Reads a single `StatsPlayer` using its globally unique `ID`. (live) */
  statsPlayer?: Maybe<StatsPlayer>;
  /** Reads a single `StatsTeam` using its globally unique `ID`. (live) */
  statsTeam?: Maybe<StatsTeam>;
  /** Reads a single `Team` using its globally unique `ID`. (live) */
  team?: Maybe<Team>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionNodeArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionAllMetasListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<MetasOrderBy>>;
  condition?: Maybe<MetaCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionAllStatsPlayersListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<StatsPlayersOrderBy>>;
  condition?: Maybe<StatsPlayerCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionAllStatsTeamsListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<StatsTeamsOrderBy>>;
  condition?: Maybe<StatsTeamCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionAllTeamsListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TeamsOrderBy>>;
  condition?: Maybe<TeamCondition>;
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserAccountByUserIdArgs = {
  userId: Scalars['UUID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserAccountByUsernameArgs = {
  username: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionMetaByReplayIdArgs = {
  replayId: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionStatsPlayerByReplayIdAndPlatformIdArgs = {
  replayId: Scalars['String'];
  platformId: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionStatsTeamByReplayIdAndTeamIdArgs = {
  replayId: Scalars['String'];
  teamId: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionTeamByTeamIdArgs = {
  teamId: Scalars['String'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionUserAccountArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionMetaArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionStatsPlayerArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionStatsTeamArgs = {
  nodeId: Scalars['ID'];
};


/**
 * The root subscription type: contains events and live queries you can subscribe to with the `subscription` operation.
 * 
 * #### Live Queries
 * 
 * Live query fields are differentiated by containing `(live)` at the end of their
 * description, they are added for each field in the `Query` type. When you
 * subscribe to a live query field, the selection set will be evaluated and sent to
 * the client, and then most things\* that would cause the output of the selection
 * set to change will trigger the selection set to be re-evaluated and the results
 * to be re-sent to the client.
 * 
 * _(\* Not everything: typically only changes to persisted data referenced by the query are detected, not computed fields.)_
 * 
 * Live queries can be very expensive, so try and keep them small and focussed.
 * 
 * #### Events
 * 
 * Event fields will run their selection set when, and only when, the specified
 * server-side event occurs. This makes them a lot more efficient than Live
 * Queries, but it is still recommended that you keep payloads fairly small.
 */
export type SubscriptionTeamArgs = {
  nodeId: Scalars['ID'];
};

export type Team = Node & {
  __typename?: 'Team';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  teamId: Scalars['String'];
  players?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A condition to be used against `Team` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TeamCondition = {
  /** Checks for equality with the object’s `teamId` field. */
  teamId?: Maybe<Scalars['String']>;
};

/** An input for mutations affecting `Team` */
export type TeamInput = {
  teamId: Scalars['String'];
  players?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Represents an update to a `Team`. Fields that are set will be updated. */
export type TeamPatch = {
  teamId?: Maybe<Scalars['String']>;
  players?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Methods to use when ordering `Team`. */
export enum TeamsOrderBy {
  Natural = 'NATURAL',
  TeamIdAsc = 'TEAM_ID_ASC',
  TeamIdDesc = 'TEAM_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateMetaByReplayId` mutation. */
export type UpdateMetaByReplayIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Meta` being updated. */
  metaPatch: MetaPatch;
  replayId: Scalars['String'];
};

/** All input for the `updateMeta` mutation. */
export type UpdateMetaInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Meta` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Meta` being updated. */
  metaPatch: MetaPatch;
};

/** The output of our update `Meta` mutation. */
export type UpdateMetaPayload = {
  __typename?: 'UpdateMetaPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Meta` that was updated by this mutation. */
  meta?: Maybe<Meta>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateStatsPlayerByReplayIdAndPlatformId` mutation. */
export type UpdateStatsPlayerByReplayIdAndPlatformIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `StatsPlayer` being updated. */
  statsPlayerPatch: StatsPlayerPatch;
  replayId: Scalars['String'];
  platformId: Scalars['String'];
};

/** All input for the `updateStatsPlayer` mutation. */
export type UpdateStatsPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `StatsPlayer` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `StatsPlayer` being updated. */
  statsPlayerPatch: StatsPlayerPatch;
};

/** The output of our update `StatsPlayer` mutation. */
export type UpdateStatsPlayerPayload = {
  __typename?: 'UpdateStatsPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `StatsPlayer` that was updated by this mutation. */
  statsPlayer?: Maybe<StatsPlayer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Meta` that is related to this `StatsPlayer`. */
  metaByReplayId?: Maybe<Meta>;
};

/** All input for the `updateStatsTeamByReplayIdAndTeamId` mutation. */
export type UpdateStatsTeamByReplayIdAndTeamIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `StatsTeam` being updated. */
  statsTeamPatch: StatsTeamPatch;
  replayId: Scalars['String'];
  teamId: Scalars['String'];
};

/** All input for the `updateStatsTeam` mutation. */
export type UpdateStatsTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `StatsTeam` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `StatsTeam` being updated. */
  statsTeamPatch: StatsTeamPatch;
};

/** The output of our update `StatsTeam` mutation. */
export type UpdateStatsTeamPayload = {
  __typename?: 'UpdateStatsTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `StatsTeam` that was updated by this mutation. */
  statsTeam?: Maybe<StatsTeam>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateTeamByTeamId` mutation. */
export type UpdateTeamByTeamIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Team` being updated. */
  teamPatch: TeamPatch;
  teamId: Scalars['String'];
};

/** All input for the `updateTeam` mutation. */
export type UpdateTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Team` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Team` being updated. */
  teamPatch: TeamPatch;
};

/** The output of our update `Team` mutation. */
export type UpdateTeamPayload = {
  __typename?: 'UpdateTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Team` that was updated by this mutation. */
  team?: Maybe<Team>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `updateUserAccountByUserId` mutation. */
export type UpdateUserAccountByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `UserAccount` being updated. */
  userAccountPatch: UserAccountPatch;
  /** A user's unique ID. */
  userId: Scalars['UUID'];
};

/** All input for the `updateUserAccountByUsername` mutation. */
export type UpdateUserAccountByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `UserAccount` being updated. */
  userAccountPatch: UserAccountPatch;
  username: Scalars['String'];
};

/** All input for the `updateUserAccount` mutation. */
export type UpdateUserAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserAccount` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `UserAccount` being updated. */
  userAccountPatch: UserAccountPatch;
};

/** The output of our update `UserAccount` mutation. */
export type UpdateUserAccountPayload = {
  __typename?: 'UpdateUserAccountPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserAccount` that was updated by this mutation. */
  userAccount?: Maybe<UserAccount>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** A user who can log in to the application. */
export type UserAccount = Node & {
  __typename?: 'UserAccount';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** A user's unique ID. */
  userId: Scalars['UUID'];
  username?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `UserAccount` */
export type UserAccountInput = {
  /** A user's unique ID. */
  userId?: Maybe<Scalars['UUID']>;
  username?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `UserAccount`. Fields that are set will be updated. */
export type UserAccountPatch = {
  /** A user's unique ID. */
  userId?: Maybe<Scalars['UUID']>;
  username?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};


export type RegisterMutationVariables = {
  input: RegisterInput;
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'RegisterPayload' }
    & { user: (
      { __typename?: 'UserAccount' }
      & Pick<UserAccount, 'userId' | 'username' | 'roles'>
    ) }
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Query'] | ResolversTypes['Meta'] | ResolversTypes['StatsPlayer'] | ResolversTypes['StatsTeam'] | ResolversTypes['Team'] | ResolversTypes['UserAccount'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MetasOrderBy: MetasOrderBy;
  MetaCondition: MetaCondition;
  String: ResolverTypeWrapper<Scalars['String']>;
  Meta: ResolverTypeWrapper<Meta>;
  BigFloat: ResolverTypeWrapper<Scalars['BigFloat']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  StatsPlayersOrderBy: StatsPlayersOrderBy;
  StatsPlayerCondition: StatsPlayerCondition;
  StatsPlayer: ResolverTypeWrapper<StatsPlayer>;
  StatsTeamsOrderBy: StatsTeamsOrderBy;
  StatsTeamCondition: StatsTeamCondition;
  StatsTeam: ResolverTypeWrapper<StatsTeam>;
  TeamsOrderBy: TeamsOrderBy;
  TeamCondition: TeamCondition;
  Team: ResolverTypeWrapper<Team>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  UserAccount: ResolverTypeWrapper<UserAccount>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateUserAccountInput: CreateUserAccountInput;
  UserAccountInput: UserAccountInput;
  CreateUserAccountPayload: ResolverTypeWrapper<CreateUserAccountPayload>;
  CreateMetaInput: CreateMetaInput;
  MetaInput: MetaInput;
  CreateMetaPayload: ResolverTypeWrapper<CreateMetaPayload>;
  CreateStatsPlayerInput: CreateStatsPlayerInput;
  StatsPlayerInput: StatsPlayerInput;
  CreateStatsPlayerPayload: ResolverTypeWrapper<CreateStatsPlayerPayload>;
  CreateStatsTeamInput: CreateStatsTeamInput;
  StatsTeamInput: StatsTeamInput;
  CreateStatsTeamPayload: ResolverTypeWrapper<CreateStatsTeamPayload>;
  CreateTeamInput: CreateTeamInput;
  TeamInput: TeamInput;
  CreateTeamPayload: ResolverTypeWrapper<CreateTeamPayload>;
  UpdateUserAccountInput: UpdateUserAccountInput;
  UserAccountPatch: UserAccountPatch;
  UpdateUserAccountPayload: ResolverTypeWrapper<UpdateUserAccountPayload>;
  UpdateUserAccountByUserIdInput: UpdateUserAccountByUserIdInput;
  UpdateUserAccountByUsernameInput: UpdateUserAccountByUsernameInput;
  UpdateMetaInput: UpdateMetaInput;
  MetaPatch: MetaPatch;
  UpdateMetaPayload: ResolverTypeWrapper<UpdateMetaPayload>;
  UpdateMetaByReplayIdInput: UpdateMetaByReplayIdInput;
  UpdateStatsPlayerInput: UpdateStatsPlayerInput;
  StatsPlayerPatch: StatsPlayerPatch;
  UpdateStatsPlayerPayload: ResolverTypeWrapper<UpdateStatsPlayerPayload>;
  UpdateStatsPlayerByReplayIdAndPlatformIdInput: UpdateStatsPlayerByReplayIdAndPlatformIdInput;
  UpdateStatsTeamInput: UpdateStatsTeamInput;
  StatsTeamPatch: StatsTeamPatch;
  UpdateStatsTeamPayload: ResolverTypeWrapper<UpdateStatsTeamPayload>;
  UpdateStatsTeamByReplayIdAndTeamIdInput: UpdateStatsTeamByReplayIdAndTeamIdInput;
  UpdateTeamInput: UpdateTeamInput;
  TeamPatch: TeamPatch;
  UpdateTeamPayload: ResolverTypeWrapper<UpdateTeamPayload>;
  UpdateTeamByTeamIdInput: UpdateTeamByTeamIdInput;
  DeleteUserAccountInput: DeleteUserAccountInput;
  DeleteUserAccountPayload: ResolverTypeWrapper<DeleteUserAccountPayload>;
  DeleteUserAccountByUserIdInput: DeleteUserAccountByUserIdInput;
  DeleteUserAccountByUsernameInput: DeleteUserAccountByUsernameInput;
  DeleteMetaInput: DeleteMetaInput;
  DeleteMetaPayload: ResolverTypeWrapper<DeleteMetaPayload>;
  DeleteMetaByReplayIdInput: DeleteMetaByReplayIdInput;
  DeleteStatsPlayerInput: DeleteStatsPlayerInput;
  DeleteStatsPlayerPayload: ResolverTypeWrapper<DeleteStatsPlayerPayload>;
  DeleteStatsPlayerByReplayIdAndPlatformIdInput: DeleteStatsPlayerByReplayIdAndPlatformIdInput;
  DeleteStatsTeamInput: DeleteStatsTeamInput;
  DeleteStatsTeamPayload: ResolverTypeWrapper<DeleteStatsTeamPayload>;
  DeleteStatsTeamByReplayIdAndTeamIdInput: DeleteStatsTeamByReplayIdAndTeamIdInput;
  DeleteTeamInput: DeleteTeamInput;
  DeleteTeamPayload: ResolverTypeWrapper<DeleteTeamPayload>;
  DeleteTeamByTeamIdInput: DeleteTeamByTeamIdInput;
  RegisterUserInput: RegisterUserInput;
  RegisterUserPayload: ResolverTypeWrapper<RegisterUserPayload>;
  RegisterInput: RegisterInput;
  RegisterPayload: ResolverTypeWrapper<RegisterPayload>;
  LoginInput: LoginInput;
  LoginPayload: ResolverTypeWrapper<LoginPayload>;
  Subscription: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Node: ResolversParentTypes['Query'] | ResolversParentTypes['Meta'] | ResolversParentTypes['StatsPlayer'] | ResolversParentTypes['StatsTeam'] | ResolversParentTypes['Team'] | ResolversParentTypes['UserAccount'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  MetasOrderBy: MetasOrderBy;
  MetaCondition: MetaCondition;
  String: Scalars['String'];
  Meta: Meta;
  BigFloat: Scalars['BigFloat'];
  Datetime: Scalars['Datetime'];
  StatsPlayersOrderBy: StatsPlayersOrderBy;
  StatsPlayerCondition: StatsPlayerCondition;
  StatsPlayer: StatsPlayer;
  StatsTeamsOrderBy: StatsTeamsOrderBy;
  StatsTeamCondition: StatsTeamCondition;
  StatsTeam: StatsTeam;
  TeamsOrderBy: TeamsOrderBy;
  TeamCondition: TeamCondition;
  Team: Team;
  UUID: Scalars['UUID'];
  UserAccount: UserAccount;
  Mutation: {};
  CreateUserAccountInput: CreateUserAccountInput;
  UserAccountInput: UserAccountInput;
  CreateUserAccountPayload: CreateUserAccountPayload;
  CreateMetaInput: CreateMetaInput;
  MetaInput: MetaInput;
  CreateMetaPayload: CreateMetaPayload;
  CreateStatsPlayerInput: CreateStatsPlayerInput;
  StatsPlayerInput: StatsPlayerInput;
  CreateStatsPlayerPayload: CreateStatsPlayerPayload;
  CreateStatsTeamInput: CreateStatsTeamInput;
  StatsTeamInput: StatsTeamInput;
  CreateStatsTeamPayload: CreateStatsTeamPayload;
  CreateTeamInput: CreateTeamInput;
  TeamInput: TeamInput;
  CreateTeamPayload: CreateTeamPayload;
  UpdateUserAccountInput: UpdateUserAccountInput;
  UserAccountPatch: UserAccountPatch;
  UpdateUserAccountPayload: UpdateUserAccountPayload;
  UpdateUserAccountByUserIdInput: UpdateUserAccountByUserIdInput;
  UpdateUserAccountByUsernameInput: UpdateUserAccountByUsernameInput;
  UpdateMetaInput: UpdateMetaInput;
  MetaPatch: MetaPatch;
  UpdateMetaPayload: UpdateMetaPayload;
  UpdateMetaByReplayIdInput: UpdateMetaByReplayIdInput;
  UpdateStatsPlayerInput: UpdateStatsPlayerInput;
  StatsPlayerPatch: StatsPlayerPatch;
  UpdateStatsPlayerPayload: UpdateStatsPlayerPayload;
  UpdateStatsPlayerByReplayIdAndPlatformIdInput: UpdateStatsPlayerByReplayIdAndPlatformIdInput;
  UpdateStatsTeamInput: UpdateStatsTeamInput;
  StatsTeamPatch: StatsTeamPatch;
  UpdateStatsTeamPayload: UpdateStatsTeamPayload;
  UpdateStatsTeamByReplayIdAndTeamIdInput: UpdateStatsTeamByReplayIdAndTeamIdInput;
  UpdateTeamInput: UpdateTeamInput;
  TeamPatch: TeamPatch;
  UpdateTeamPayload: UpdateTeamPayload;
  UpdateTeamByTeamIdInput: UpdateTeamByTeamIdInput;
  DeleteUserAccountInput: DeleteUserAccountInput;
  DeleteUserAccountPayload: DeleteUserAccountPayload;
  DeleteUserAccountByUserIdInput: DeleteUserAccountByUserIdInput;
  DeleteUserAccountByUsernameInput: DeleteUserAccountByUsernameInput;
  DeleteMetaInput: DeleteMetaInput;
  DeleteMetaPayload: DeleteMetaPayload;
  DeleteMetaByReplayIdInput: DeleteMetaByReplayIdInput;
  DeleteStatsPlayerInput: DeleteStatsPlayerInput;
  DeleteStatsPlayerPayload: DeleteStatsPlayerPayload;
  DeleteStatsPlayerByReplayIdAndPlatformIdInput: DeleteStatsPlayerByReplayIdAndPlatformIdInput;
  DeleteStatsTeamInput: DeleteStatsTeamInput;
  DeleteStatsTeamPayload: DeleteStatsTeamPayload;
  DeleteStatsTeamByReplayIdAndTeamIdInput: DeleteStatsTeamByReplayIdAndTeamIdInput;
  DeleteTeamInput: DeleteTeamInput;
  DeleteTeamPayload: DeleteTeamPayload;
  DeleteTeamByTeamIdInput: DeleteTeamByTeamIdInput;
  RegisterUserInput: RegisterUserInput;
  RegisterUserPayload: RegisterUserPayload;
  RegisterInput: RegisterInput;
  RegisterPayload: RegisterPayload;
  LoginInput: LoginInput;
  LoginPayload: LoginPayload;
  Subscription: {};
  Boolean: Scalars['Boolean'];
};

export interface BigFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigFloat'], any> {
  name: 'BigFloat';
}

export type CreateMetaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMetaPayload'] = ResolversParentTypes['CreateMetaPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CreateStatsPlayerPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateStatsPlayerPayload'] = ResolversParentTypes['CreateStatsPlayerPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statsPlayer?: Resolver<Maybe<ResolversTypes['StatsPlayer']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  metaByReplayId?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CreateStatsTeamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateStatsTeamPayload'] = ResolversParentTypes['CreateStatsTeamPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statsTeam?: Resolver<Maybe<ResolversTypes['StatsTeam']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CreateTeamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTeamPayload'] = ResolversParentTypes['CreateTeamPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CreateUserAccountPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserAccountPayload'] = ResolversParentTypes['CreateUserAccountPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteMetaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteMetaPayload'] = ResolversParentTypes['DeleteMetaPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  deletedMetaId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type DeleteStatsPlayerPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteStatsPlayerPayload'] = ResolversParentTypes['DeleteStatsPlayerPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statsPlayer?: Resolver<Maybe<ResolversTypes['StatsPlayer']>, ParentType, ContextType>;
  deletedStatsPlayerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  metaByReplayId?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type DeleteStatsTeamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteStatsTeamPayload'] = ResolversParentTypes['DeleteStatsTeamPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statsTeam?: Resolver<Maybe<ResolversTypes['StatsTeam']>, ParentType, ContextType>;
  deletedStatsTeamId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type DeleteTeamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTeamPayload'] = ResolversParentTypes['DeleteTeamPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  deletedTeamId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type DeleteUserAccountPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserAccountPayload'] = ResolversParentTypes['DeleteUserAccountPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>;
  deletedUserAccountId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginPayload'] = ResolversParentTypes['LoginPayload']> = {
  user?: Resolver<ResolversTypes['UserAccount'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type MetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  replayId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  map?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team0Score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team1Score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  gameServerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  serverName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchGuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playlist?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isOrange?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  statsPlayersByReplayIdList?: Resolver<Array<ResolversTypes['StatsPlayer']>, ParentType, ContextType, RequireFields<MetaStatsPlayersByReplayIdListArgs, never>>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUserAccount?: Resolver<Maybe<ResolversTypes['CreateUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserAccountArgs, 'input'>>;
  createMeta?: Resolver<Maybe<ResolversTypes['CreateMetaPayload']>, ParentType, ContextType, RequireFields<MutationCreateMetaArgs, 'input'>>;
  createStatsPlayer?: Resolver<Maybe<ResolversTypes['CreateStatsPlayerPayload']>, ParentType, ContextType, RequireFields<MutationCreateStatsPlayerArgs, 'input'>>;
  createStatsTeam?: Resolver<Maybe<ResolversTypes['CreateStatsTeamPayload']>, ParentType, ContextType, RequireFields<MutationCreateStatsTeamArgs, 'input'>>;
  createTeam?: Resolver<Maybe<ResolversTypes['CreateTeamPayload']>, ParentType, ContextType, RequireFields<MutationCreateTeamArgs, 'input'>>;
  updateUserAccount?: Resolver<Maybe<ResolversTypes['UpdateUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserAccountArgs, 'input'>>;
  updateUserAccountByUserId?: Resolver<Maybe<ResolversTypes['UpdateUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserAccountByUserIdArgs, 'input'>>;
  updateUserAccountByUsername?: Resolver<Maybe<ResolversTypes['UpdateUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserAccountByUsernameArgs, 'input'>>;
  updateMeta?: Resolver<Maybe<ResolversTypes['UpdateMetaPayload']>, ParentType, ContextType, RequireFields<MutationUpdateMetaArgs, 'input'>>;
  updateMetaByReplayId?: Resolver<Maybe<ResolversTypes['UpdateMetaPayload']>, ParentType, ContextType, RequireFields<MutationUpdateMetaByReplayIdArgs, 'input'>>;
  updateStatsPlayer?: Resolver<Maybe<ResolversTypes['UpdateStatsPlayerPayload']>, ParentType, ContextType, RequireFields<MutationUpdateStatsPlayerArgs, 'input'>>;
  updateStatsPlayerByReplayIdAndPlatformId?: Resolver<Maybe<ResolversTypes['UpdateStatsPlayerPayload']>, ParentType, ContextType, RequireFields<MutationUpdateStatsPlayerByReplayIdAndPlatformIdArgs, 'input'>>;
  updateStatsTeam?: Resolver<Maybe<ResolversTypes['UpdateStatsTeamPayload']>, ParentType, ContextType, RequireFields<MutationUpdateStatsTeamArgs, 'input'>>;
  updateStatsTeamByReplayIdAndTeamId?: Resolver<Maybe<ResolversTypes['UpdateStatsTeamPayload']>, ParentType, ContextType, RequireFields<MutationUpdateStatsTeamByReplayIdAndTeamIdArgs, 'input'>>;
  updateTeam?: Resolver<Maybe<ResolversTypes['UpdateTeamPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTeamArgs, 'input'>>;
  updateTeamByTeamId?: Resolver<Maybe<ResolversTypes['UpdateTeamPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTeamByTeamIdArgs, 'input'>>;
  deleteUserAccount?: Resolver<Maybe<ResolversTypes['DeleteUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserAccountArgs, 'input'>>;
  deleteUserAccountByUserId?: Resolver<Maybe<ResolversTypes['DeleteUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserAccountByUserIdArgs, 'input'>>;
  deleteUserAccountByUsername?: Resolver<Maybe<ResolversTypes['DeleteUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserAccountByUsernameArgs, 'input'>>;
  deleteMeta?: Resolver<Maybe<ResolversTypes['DeleteMetaPayload']>, ParentType, ContextType, RequireFields<MutationDeleteMetaArgs, 'input'>>;
  deleteMetaByReplayId?: Resolver<Maybe<ResolversTypes['DeleteMetaPayload']>, ParentType, ContextType, RequireFields<MutationDeleteMetaByReplayIdArgs, 'input'>>;
  deleteStatsPlayer?: Resolver<Maybe<ResolversTypes['DeleteStatsPlayerPayload']>, ParentType, ContextType, RequireFields<MutationDeleteStatsPlayerArgs, 'input'>>;
  deleteStatsPlayerByReplayIdAndPlatformId?: Resolver<Maybe<ResolversTypes['DeleteStatsPlayerPayload']>, ParentType, ContextType, RequireFields<MutationDeleteStatsPlayerByReplayIdAndPlatformIdArgs, 'input'>>;
  deleteStatsTeam?: Resolver<Maybe<ResolversTypes['DeleteStatsTeamPayload']>, ParentType, ContextType, RequireFields<MutationDeleteStatsTeamArgs, 'input'>>;
  deleteStatsTeamByReplayIdAndTeamId?: Resolver<Maybe<ResolversTypes['DeleteStatsTeamPayload']>, ParentType, ContextType, RequireFields<MutationDeleteStatsTeamByReplayIdAndTeamIdArgs, 'input'>>;
  deleteTeam?: Resolver<Maybe<ResolversTypes['DeleteTeamPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTeamArgs, 'input'>>;
  deleteTeamByTeamId?: Resolver<Maybe<ResolversTypes['DeleteTeamPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTeamByTeamIdArgs, 'input'>>;
  registerUser?: Resolver<Maybe<ResolversTypes['RegisterUserPayload']>, ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'input'>>;
  register?: Resolver<Maybe<ResolversTypes['RegisterPayload']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginPayload']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'Meta' | 'StatsPlayer' | 'StatsTeam' | 'Team' | 'UserAccount', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  allMetasList?: Resolver<Maybe<Array<ResolversTypes['Meta']>>, ParentType, ContextType, RequireFields<QueryAllMetasListArgs, never>>;
  allStatsPlayersList?: Resolver<Maybe<Array<ResolversTypes['StatsPlayer']>>, ParentType, ContextType, RequireFields<QueryAllStatsPlayersListArgs, never>>;
  allStatsTeamsList?: Resolver<Maybe<Array<ResolversTypes['StatsTeam']>>, ParentType, ContextType, RequireFields<QueryAllStatsTeamsListArgs, never>>;
  allTeamsList?: Resolver<Maybe<Array<ResolversTypes['Team']>>, ParentType, ContextType, RequireFields<QueryAllTeamsListArgs, never>>;
  userAccountByUserId?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType, RequireFields<QueryUserAccountByUserIdArgs, 'userId'>>;
  userAccountByUsername?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType, RequireFields<QueryUserAccountByUsernameArgs, 'username'>>;
  metaByReplayId?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType, RequireFields<QueryMetaByReplayIdArgs, 'replayId'>>;
  statsPlayerByReplayIdAndPlatformId?: Resolver<Maybe<ResolversTypes['StatsPlayer']>, ParentType, ContextType, RequireFields<QueryStatsPlayerByReplayIdAndPlatformIdArgs, 'replayId' | 'platformId'>>;
  statsTeamByReplayIdAndTeamId?: Resolver<Maybe<ResolversTypes['StatsTeam']>, ParentType, ContextType, RequireFields<QueryStatsTeamByReplayIdAndTeamIdArgs, 'replayId' | 'teamId'>>;
  teamByTeamId?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QueryTeamByTeamIdArgs, 'teamId'>>;
  currentPerson?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>;
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType, RequireFields<QueryUserAccountArgs, 'nodeId'>>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType, RequireFields<QueryMetaArgs, 'nodeId'>>;
  statsPlayer?: Resolver<Maybe<ResolversTypes['StatsPlayer']>, ParentType, ContextType, RequireFields<QueryStatsPlayerArgs, 'nodeId'>>;
  statsTeam?: Resolver<Maybe<ResolversTypes['StatsTeam']>, ParentType, ContextType, RequireFields<QueryStatsTeamArgs, 'nodeId'>>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QueryTeamArgs, 'nodeId'>>;
};

export type RegisterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterPayload'] = ResolversParentTypes['RegisterPayload']> = {
  user?: Resolver<ResolversTypes['UserAccount'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type RegisterUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterUserPayload'] = ResolversParentTypes['RegisterUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type StatsPlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatsPlayer'] = ResolversParentTypes['StatsPlayer']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  replayId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  assists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saves?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shots?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  possessionTime?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  turnovers?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  turnoversOnMyHalf?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  wonTurnovers?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeOnGround?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeLowInAir?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeHighInAir?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInDefendingHalf?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInAttackingHalf?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInDefendingThird?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInNeutralThird?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInAttackingThird?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeBehindBall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInFrontBall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeNearWall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInCorner?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeOnWall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageSpeed?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageHitDistance?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageDistanceFromCenter?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalGoals?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalHits?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalPasses?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalDribbles?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalDribbleConts?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalAerials?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalClears?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeAtSlowSpeed?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeAtSuperSonic?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeAtBoostSpeed?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInFrontOfCenterOfMass?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeBehindCenterOfMass?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeMostForwardPlayer?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeMostBackPlayer?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeBetweenPlayers?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  pass_?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  passed?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  dribble?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  dribbleContinuation?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  shot?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  goal?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  assist?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  assisted?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  save?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  aerial?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageDuration?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageHits?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalKickoffs?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  numTimeBoost?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  numTimeCheat?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  numTimeGoToBall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  numTimeDefend?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  numTimeAfk?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageBoostUsed?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  turnoversOnTheirHalf?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalSaves?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  numTimeFirstTouch?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalShots?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalCarries?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalFlicks?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  longestCarry?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  furthestCarry?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalCarryTime?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageCarryTime?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  fastestCarrySpeed?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalCarryDistance?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageZDistance?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageXyDistance?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageBallZVelocity?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  varianceXyDistance?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  varianceZDistance?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  varianceBallZVelocity?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageCarrySpeed?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  distanceAlongPath?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  metaByReplayId?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type StatsTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatsTeam'] = ResolversParentTypes['StatsTeam']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replayId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  possession?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  possessionTime?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  turnovers?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  turnoversOnMyHalf?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  turnoversOnTheirHalf?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  wonTurnovers?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  hitCounts?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalGoals?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalHits?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalPasses?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalShots?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalDribbles?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalDribbleConts?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalAerials?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalClears?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  totalSaves?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  centerOfMass?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  positionalTendencies?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeOnGround?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeLowInAir?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeHighInAir?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInDefendingHalf?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInAttackingHalf?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInDefendingThird?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInNeutralThird?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInAttackingThird?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeBehindBall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInFrontBall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeNearWall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeInCorner?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeOnWall?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageDistanceFromCenter?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  averageMaxDistanceFromCenter?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeClumped?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  timeBoondocks?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  query?: SubscriptionResolver<ResolversTypes['Query'], "query", ParentType, ContextType>;
  nodeId?: SubscriptionResolver<ResolversTypes['ID'], "nodeId", ParentType, ContextType>;
  node?: SubscriptionResolver<Maybe<ResolversTypes['Node']>, "node", ParentType, ContextType, RequireFields<SubscriptionNodeArgs, 'nodeId'>>;
  allMetasList?: SubscriptionResolver<Maybe<Array<ResolversTypes['Meta']>>, "allMetasList", ParentType, ContextType, RequireFields<SubscriptionAllMetasListArgs, never>>;
  allStatsPlayersList?: SubscriptionResolver<Maybe<Array<ResolversTypes['StatsPlayer']>>, "allStatsPlayersList", ParentType, ContextType, RequireFields<SubscriptionAllStatsPlayersListArgs, never>>;
  allStatsTeamsList?: SubscriptionResolver<Maybe<Array<ResolversTypes['StatsTeam']>>, "allStatsTeamsList", ParentType, ContextType, RequireFields<SubscriptionAllStatsTeamsListArgs, never>>;
  allTeamsList?: SubscriptionResolver<Maybe<Array<ResolversTypes['Team']>>, "allTeamsList", ParentType, ContextType, RequireFields<SubscriptionAllTeamsListArgs, never>>;
  userAccountByUserId?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "userAccountByUserId", ParentType, ContextType, RequireFields<SubscriptionUserAccountByUserIdArgs, 'userId'>>;
  userAccountByUsername?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "userAccountByUsername", ParentType, ContextType, RequireFields<SubscriptionUserAccountByUsernameArgs, 'username'>>;
  metaByReplayId?: SubscriptionResolver<Maybe<ResolversTypes['Meta']>, "metaByReplayId", ParentType, ContextType, RequireFields<SubscriptionMetaByReplayIdArgs, 'replayId'>>;
  statsPlayerByReplayIdAndPlatformId?: SubscriptionResolver<Maybe<ResolversTypes['StatsPlayer']>, "statsPlayerByReplayIdAndPlatformId", ParentType, ContextType, RequireFields<SubscriptionStatsPlayerByReplayIdAndPlatformIdArgs, 'replayId' | 'platformId'>>;
  statsTeamByReplayIdAndTeamId?: SubscriptionResolver<Maybe<ResolversTypes['StatsTeam']>, "statsTeamByReplayIdAndTeamId", ParentType, ContextType, RequireFields<SubscriptionStatsTeamByReplayIdAndTeamIdArgs, 'replayId' | 'teamId'>>;
  teamByTeamId?: SubscriptionResolver<Maybe<ResolversTypes['Team']>, "teamByTeamId", ParentType, ContextType, RequireFields<SubscriptionTeamByTeamIdArgs, 'teamId'>>;
  currentPerson?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "currentPerson", ParentType, ContextType>;
  userAccount?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "userAccount", ParentType, ContextType, RequireFields<SubscriptionUserAccountArgs, 'nodeId'>>;
  meta?: SubscriptionResolver<Maybe<ResolversTypes['Meta']>, "meta", ParentType, ContextType, RequireFields<SubscriptionMetaArgs, 'nodeId'>>;
  statsPlayer?: SubscriptionResolver<Maybe<ResolversTypes['StatsPlayer']>, "statsPlayer", ParentType, ContextType, RequireFields<SubscriptionStatsPlayerArgs, 'nodeId'>>;
  statsTeam?: SubscriptionResolver<Maybe<ResolversTypes['StatsTeam']>, "statsTeam", ParentType, ContextType, RequireFields<SubscriptionStatsTeamArgs, 'nodeId'>>;
  team?: SubscriptionResolver<Maybe<ResolversTypes['Team']>, "team", ParentType, ContextType, RequireFields<SubscriptionTeamArgs, 'nodeId'>>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UpdateMetaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateMetaPayload'] = ResolversParentTypes['UpdateMetaPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UpdateStatsPlayerPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateStatsPlayerPayload'] = ResolversParentTypes['UpdateStatsPlayerPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statsPlayer?: Resolver<Maybe<ResolversTypes['StatsPlayer']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  metaByReplayId?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UpdateStatsTeamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateStatsTeamPayload'] = ResolversParentTypes['UpdateStatsTeamPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statsTeam?: Resolver<Maybe<ResolversTypes['StatsTeam']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UpdateTeamPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTeamPayload'] = ResolversParentTypes['UpdateTeamPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UpdateUserAccountPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserAccountPayload'] = ResolversParentTypes['UpdateUserAccountPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UserAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccount'] = ResolversParentTypes['UserAccount']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type Resolvers<ContextType = any> = {
  BigFloat?: GraphQLScalarType;
  CreateMetaPayload?: CreateMetaPayloadResolvers<ContextType>;
  CreateStatsPlayerPayload?: CreateStatsPlayerPayloadResolvers<ContextType>;
  CreateStatsTeamPayload?: CreateStatsTeamPayloadResolvers<ContextType>;
  CreateTeamPayload?: CreateTeamPayloadResolvers<ContextType>;
  CreateUserAccountPayload?: CreateUserAccountPayloadResolvers<ContextType>;
  Datetime?: GraphQLScalarType;
  DeleteMetaPayload?: DeleteMetaPayloadResolvers<ContextType>;
  DeleteStatsPlayerPayload?: DeleteStatsPlayerPayloadResolvers<ContextType>;
  DeleteStatsTeamPayload?: DeleteStatsTeamPayloadResolvers<ContextType>;
  DeleteTeamPayload?: DeleteTeamPayloadResolvers<ContextType>;
  DeleteUserAccountPayload?: DeleteUserAccountPayloadResolvers<ContextType>;
  LoginPayload?: LoginPayloadResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers;
  Query?: QueryResolvers<ContextType>;
  RegisterPayload?: RegisterPayloadResolvers<ContextType>;
  RegisterUserPayload?: RegisterUserPayloadResolvers<ContextType>;
  StatsPlayer?: StatsPlayerResolvers<ContextType>;
  StatsTeam?: StatsTeamResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  UpdateMetaPayload?: UpdateMetaPayloadResolvers<ContextType>;
  UpdateStatsPlayerPayload?: UpdateStatsPlayerPayloadResolvers<ContextType>;
  UpdateStatsTeamPayload?: UpdateStatsTeamPayloadResolvers<ContextType>;
  UpdateTeamPayload?: UpdateTeamPayloadResolvers<ContextType>;
  UpdateUserAccountPayload?: UpdateUserAccountPayloadResolvers<ContextType>;
  UserAccount?: UserAccountResolvers<ContextType>;
  UUID?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    user {
      userId
      username
      roles
    }
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;