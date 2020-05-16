/* eslint-disable */
/* THIS IS A GENERATED FILE - DO NOT MODIFY */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: string;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
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

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `UserAccount`. */
  createUserAccount?: Maybe<CreateUserAccountPayload>;
  /** Updates a single `UserAccount` using its globally unique id and a patch. */
  updateUserAccount?: Maybe<UpdateUserAccountPayload>;
  /** Updates a single `UserAccount` using a unique key and a patch. */
  updateUserAccountByUserId?: Maybe<UpdateUserAccountPayload>;
  /** Updates a single `UserAccount` using a unique key and a patch. */
  updateUserAccountByUsername?: Maybe<UpdateUserAccountPayload>;
  /** Deletes a single `UserAccount` using its globally unique id. */
  deleteUserAccount?: Maybe<DeleteUserAccountPayload>;
  /** Deletes a single `UserAccount` using a unique key. */
  deleteUserAccountByUserId?: Maybe<DeleteUserAccountPayload>;
  /** Deletes a single `UserAccount` using a unique key. */
  deleteUserAccountByUsername?: Maybe<DeleteUserAccountPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
  register?: Maybe<RegisterPayload>;
  login?: Maybe<LoginPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserAccountArgs = {
  input: CreateUserAccountInput;
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
  userAccountByUserId?: Maybe<UserAccount>;
  userAccountByUsername?: Maybe<UserAccount>;
  currentPerson?: Maybe<UserAccount>;
  /** Reads a single `UserAccount` using its globally unique `ID`. */
  userAccount?: Maybe<UserAccount>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
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
export type QueryUserAccountArgs = {
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
  /**  (live) */
  userAccountByUserId?: Maybe<UserAccount>;
  /**  (live) */
  userAccountByUsername?: Maybe<UserAccount>;
  /**  (live) */
  currentPerson?: Maybe<UserAccount>;
  /** Reads a single `UserAccount` using its globally unique `ID`. (live) */
  userAccount?: Maybe<UserAccount>;
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
export type SubscriptionUserAccountArgs = {
  nodeId: Scalars['ID'];
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

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<
    { __typename?: 'RegisterPayload' } & {
      user: { __typename?: 'UserAccount' } & Pick<
        UserAccount,
        'userId' | 'username' | 'roles'
      >;
    }
  >;
};

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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateUserAccountInput: CreateUserAccountInput;
  CreateUserAccountPayload: ResolverTypeWrapper<CreateUserAccountPayload>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  DeleteUserAccountByUserIdInput: DeleteUserAccountByUserIdInput;
  DeleteUserAccountByUsernameInput: DeleteUserAccountByUsernameInput;
  DeleteUserAccountInput: DeleteUserAccountInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  DeleteUserAccountPayload: ResolverTypeWrapper<DeleteUserAccountPayload>;
  LoginInput: LoginInput;
  LoginPayload: ResolverTypeWrapper<LoginPayload>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Query'] | ResolversTypes['UserAccount'];
  Query: ResolverTypeWrapper<{}>;
  RegisterInput: RegisterInput;
  RegisterPayload: ResolverTypeWrapper<RegisterPayload>;
  RegisterUserInput: RegisterUserInput;
  RegisterUserPayload: ResolverTypeWrapper<RegisterUserPayload>;
  Subscription: ResolverTypeWrapper<{}>;
  UpdateUserAccountByUserIdInput: UpdateUserAccountByUserIdInput;
  UpdateUserAccountByUsernameInput: UpdateUserAccountByUsernameInput;
  UpdateUserAccountInput: UpdateUserAccountInput;
  UpdateUserAccountPayload: ResolverTypeWrapper<UpdateUserAccountPayload>;
  UserAccount: ResolverTypeWrapper<UserAccount>;
  UserAccountInput: UserAccountInput;
  UserAccountPatch: UserAccountPatch;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  CreateUserAccountInput: CreateUserAccountInput;
  CreateUserAccountPayload: CreateUserAccountPayload;
  Datetime: Scalars['Datetime'];
  DeleteUserAccountByUserIdInput: DeleteUserAccountByUserIdInput;
  DeleteUserAccountByUsernameInput: DeleteUserAccountByUsernameInput;
  DeleteUserAccountInput: DeleteUserAccountInput;
  ID: Scalars['ID'];
  DeleteUserAccountPayload: DeleteUserAccountPayload;
  LoginInput: LoginInput;
  LoginPayload: LoginPayload;
  Mutation: {};
  Node: ResolversParentTypes['Query'] | ResolversParentTypes['UserAccount'];
  Query: {};
  RegisterInput: RegisterInput;
  RegisterPayload: RegisterPayload;
  RegisterUserInput: RegisterUserInput;
  RegisterUserPayload: RegisterUserPayload;
  Subscription: {};
  UpdateUserAccountByUserIdInput: UpdateUserAccountByUserIdInput;
  UpdateUserAccountByUsernameInput: UpdateUserAccountByUsernameInput;
  UpdateUserAccountInput: UpdateUserAccountInput;
  UpdateUserAccountPayload: UpdateUserAccountPayload;
  UserAccount: UserAccount;
  UserAccountInput: UserAccountInput;
  UserAccountPatch: UserAccountPatch;
  UUID: Scalars['UUID'];
};

export type CreateUserAccountPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateUserAccountPayload'] = ResolversParentTypes['CreateUserAccountPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  userAccount?: Resolver<
    Maybe<ResolversTypes['UserAccount']>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface DatetimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteUserAccountPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeleteUserAccountPayload'] = ResolversParentTypes['DeleteUserAccountPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  userAccount?: Resolver<
    Maybe<ResolversTypes['UserAccount']>,
    ParentType,
    ContextType
  >;
  deletedUserAccountId?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type LoginPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LoginPayload'] = ResolversParentTypes['LoginPayload']
> = {
  user?: Resolver<ResolversTypes['UserAccount'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createUserAccount?: Resolver<
    Maybe<ResolversTypes['CreateUserAccountPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserAccountArgs, 'input'>
  >;
  updateUserAccount?: Resolver<
    Maybe<ResolversTypes['UpdateUserAccountPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserAccountArgs, 'input'>
  >;
  updateUserAccountByUserId?: Resolver<
    Maybe<ResolversTypes['UpdateUserAccountPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserAccountByUserIdArgs, 'input'>
  >;
  updateUserAccountByUsername?: Resolver<
    Maybe<ResolversTypes['UpdateUserAccountPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserAccountByUsernameArgs, 'input'>
  >;
  deleteUserAccount?: Resolver<
    Maybe<ResolversTypes['DeleteUserAccountPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserAccountArgs, 'input'>
  >;
  deleteUserAccountByUserId?: Resolver<
    Maybe<ResolversTypes['DeleteUserAccountPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserAccountByUserIdArgs, 'input'>
  >;
  deleteUserAccountByUsername?: Resolver<
    Maybe<ResolversTypes['DeleteUserAccountPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserAccountByUsernameArgs, 'input'>
  >;
  registerUser?: Resolver<
    Maybe<ResolversTypes['RegisterUserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationRegisterUserArgs, 'input'>
  >;
  register?: Resolver<
    Maybe<ResolversTypes['RegisterPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, 'input'>
  >;
  login?: Resolver<
    Maybe<ResolversTypes['LoginPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'input'>
  >;
};

export type NodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<
    'Query' | 'UserAccount',
    ParentType,
    ContextType
  >;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['Node']>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, 'nodeId'>
  >;
  userAccountByUserId?: Resolver<
    Maybe<ResolversTypes['UserAccount']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserAccountByUserIdArgs, 'userId'>
  >;
  userAccountByUsername?: Resolver<
    Maybe<ResolversTypes['UserAccount']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserAccountByUsernameArgs, 'username'>
  >;
  currentPerson?: Resolver<
    Maybe<ResolversTypes['UserAccount']>,
    ParentType,
    ContextType
  >;
  userAccount?: Resolver<
    Maybe<ResolversTypes['UserAccount']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserAccountArgs, 'nodeId'>
  >;
};

export type RegisterPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegisterPayload'] = ResolversParentTypes['RegisterPayload']
> = {
  user?: Resolver<ResolversTypes['UserAccount'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type RegisterUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegisterUserPayload'] = ResolversParentTypes['RegisterUserPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  userAccount?: Resolver<
    Maybe<ResolversTypes['UserAccount']>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  query?: SubscriptionResolver<
    ResolversTypes['Query'],
    'query',
    ParentType,
    ContextType
  >;
  nodeId?: SubscriptionResolver<
    ResolversTypes['ID'],
    'nodeId',
    ParentType,
    ContextType
  >;
  node?: SubscriptionResolver<
    Maybe<ResolversTypes['Node']>,
    'node',
    ParentType,
    ContextType,
    RequireFields<SubscriptionNodeArgs, 'nodeId'>
  >;
  userAccountByUserId?: SubscriptionResolver<
    Maybe<ResolversTypes['UserAccount']>,
    'userAccountByUserId',
    ParentType,
    ContextType,
    RequireFields<SubscriptionUserAccountByUserIdArgs, 'userId'>
  >;
  userAccountByUsername?: SubscriptionResolver<
    Maybe<ResolversTypes['UserAccount']>,
    'userAccountByUsername',
    ParentType,
    ContextType,
    RequireFields<SubscriptionUserAccountByUsernameArgs, 'username'>
  >;
  currentPerson?: SubscriptionResolver<
    Maybe<ResolversTypes['UserAccount']>,
    'currentPerson',
    ParentType,
    ContextType
  >;
  userAccount?: SubscriptionResolver<
    Maybe<ResolversTypes['UserAccount']>,
    'userAccount',
    ParentType,
    ContextType,
    RequireFields<SubscriptionUserAccountArgs, 'nodeId'>
  >;
};

export type UpdateUserAccountPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateUserAccountPayload'] = ResolversParentTypes['UpdateUserAccountPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  userAccount?: Resolver<
    Maybe<ResolversTypes['UserAccount']>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UserAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserAccount'] = ResolversParentTypes['UserAccount']
> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes['Datetime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['Datetime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type Resolvers<ContextType = any> = {
  CreateUserAccountPayload?: CreateUserAccountPayloadResolvers<ContextType>;
  Datetime?: GraphQLScalarType;
  DeleteUserAccountPayload?: DeleteUserAccountPayloadResolvers<ContextType>;
  LoginPayload?: LoginPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers;
  Query?: QueryResolvers<ContextType>;
  RegisterPayload?: RegisterPayloadResolvers<ContextType>;
  RegisterUserPayload?: RegisterUserPayloadResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
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
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

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
export function useRegisterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(RegisterDocument, baseOptions);
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<
  RegisterMutation
>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
