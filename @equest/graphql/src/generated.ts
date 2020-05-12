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
  UUID: any;
  JSON: { [key: string]: any };
  Datetime: string;
};

export type Query = Node & {
   __typename?: 'Query';
  query: Query;
  nodeId: Scalars['ID'];
  node?: Maybe<Node>;
  allTestTablesList?: Maybe<Array<TestTable>>;
  testTableByUserId?: Maybe<TestTable>;
  userAccountByUserId?: Maybe<UserAccount>;
  userAccountByUsername?: Maybe<UserAccount>;
  currentPerson?: Maybe<UserAccount>;
  testTable?: Maybe<TestTable>;
  userAccount?: Maybe<UserAccount>;
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


export type QueryAllTestTablesListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TestTablesOrderBy>>;
  condition?: Maybe<TestTableCondition>;
};


export type QueryTestTableByUserIdArgs = {
  userId: Scalars['UUID'];
};


export type QueryUserAccountByUserIdArgs = {
  userId: Scalars['UUID'];
};


export type QueryUserAccountByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryTestTableArgs = {
  nodeId: Scalars['ID'];
};


export type QueryUserAccountArgs = {
  nodeId: Scalars['ID'];
};

export type Node = {
  nodeId: Scalars['ID'];
};

export enum TestTablesOrderBy {
  Natural = 'NATURAL',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TestTableCondition = {
  userId?: Maybe<Scalars['UUID']>;
};


export type TestTable = Node & {
   __typename?: 'TestTable';
  nodeId: Scalars['ID'];
  userId: Scalars['UUID'];
  data?: Maybe<Scalars['JSON']>;
};


export type UserAccount = Node & {
   __typename?: 'UserAccount';
  nodeId: Scalars['ID'];
  userId: Scalars['UUID'];
  username?: Maybe<Scalars['String']>;
  emailConfirmed: Scalars['Boolean'];
  roles: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};


export type Mutation = {
   __typename?: 'Mutation';
  createTestTable?: Maybe<CreateTestTablePayload>;
  createUserAccount?: Maybe<CreateUserAccountPayload>;
  updateTestTable?: Maybe<UpdateTestTablePayload>;
  updateTestTableByUserId?: Maybe<UpdateTestTablePayload>;
  updateUserAccount?: Maybe<UpdateUserAccountPayload>;
  updateUserAccountByUserId?: Maybe<UpdateUserAccountPayload>;
  updateUserAccountByUsername?: Maybe<UpdateUserAccountPayload>;
  deleteTestTable?: Maybe<DeleteTestTablePayload>;
  deleteTestTableByUserId?: Maybe<DeleteTestTablePayload>;
  deleteUserAccount?: Maybe<DeleteUserAccountPayload>;
  deleteUserAccountByUserId?: Maybe<DeleteUserAccountPayload>;
  deleteUserAccountByUsername?: Maybe<DeleteUserAccountPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
  register?: Maybe<RegisterPayload>;
  login?: Maybe<LoginPayload>;
};


export type MutationCreateTestTableArgs = {
  input: CreateTestTableInput;
};


export type MutationCreateUserAccountArgs = {
  input: CreateUserAccountInput;
};


export type MutationUpdateTestTableArgs = {
  input: UpdateTestTableInput;
};


export type MutationUpdateTestTableByUserIdArgs = {
  input: UpdateTestTableByUserIdInput;
};


export type MutationUpdateUserAccountArgs = {
  input: UpdateUserAccountInput;
};


export type MutationUpdateUserAccountByUserIdArgs = {
  input: UpdateUserAccountByUserIdInput;
};


export type MutationUpdateUserAccountByUsernameArgs = {
  input: UpdateUserAccountByUsernameInput;
};


export type MutationDeleteTestTableArgs = {
  input: DeleteTestTableInput;
};


export type MutationDeleteTestTableByUserIdArgs = {
  input: DeleteTestTableByUserIdInput;
};


export type MutationDeleteUserAccountArgs = {
  input: DeleteUserAccountInput;
};


export type MutationDeleteUserAccountByUserIdArgs = {
  input: DeleteUserAccountByUserIdInput;
};


export type MutationDeleteUserAccountByUsernameArgs = {
  input: DeleteUserAccountByUsernameInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type CreateTestTableInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  testTable: TestTableInput;
};

export type TestTableInput = {
  userId?: Maybe<Scalars['UUID']>;
  data?: Maybe<Scalars['JSON']>;
};

export type CreateTestTablePayload = {
   __typename?: 'CreateTestTablePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  testTable?: Maybe<TestTable>;
  query?: Maybe<Query>;
};

export type CreateUserAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  userAccount: UserAccountInput;
};

export type UserAccountInput = {
  userId?: Maybe<Scalars['UUID']>;
  username?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

export type CreateUserAccountPayload = {
   __typename?: 'CreateUserAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  userAccount?: Maybe<UserAccount>;
  query?: Maybe<Query>;
};

export type UpdateTestTableInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  testTablePatch: TestTablePatch;
};

export type TestTablePatch = {
  userId?: Maybe<Scalars['UUID']>;
  data?: Maybe<Scalars['JSON']>;
};

export type UpdateTestTablePayload = {
   __typename?: 'UpdateTestTablePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  testTable?: Maybe<TestTable>;
  query?: Maybe<Query>;
};

export type UpdateTestTableByUserIdInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  testTablePatch: TestTablePatch;
  userId: Scalars['UUID'];
};

export type UpdateUserAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  userAccountPatch: UserAccountPatch;
};

export type UserAccountPatch = {
  userId?: Maybe<Scalars['UUID']>;
  username?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

export type UpdateUserAccountPayload = {
   __typename?: 'UpdateUserAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  userAccount?: Maybe<UserAccount>;
  query?: Maybe<Query>;
};

export type UpdateUserAccountByUserIdInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  userAccountPatch: UserAccountPatch;
  userId: Scalars['UUID'];
};

export type UpdateUserAccountByUsernameInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  userAccountPatch: UserAccountPatch;
  username: Scalars['String'];
};

export type DeleteTestTableInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
};

export type DeleteTestTablePayload = {
   __typename?: 'DeleteTestTablePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  testTable?: Maybe<TestTable>;
  deletedTestTableId?: Maybe<Scalars['ID']>;
  query?: Maybe<Query>;
};

export type DeleteTestTableByUserIdInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

export type DeleteUserAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
};

export type DeleteUserAccountPayload = {
   __typename?: 'DeleteUserAccountPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  userAccount?: Maybe<UserAccount>;
  deletedUserAccountId?: Maybe<Scalars['ID']>;
  query?: Maybe<Query>;
};

export type DeleteUserAccountByUserIdInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  userId: Scalars['UUID'];
};

export type DeleteUserAccountByUsernameInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type RegisterUserInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterUserPayload = {
   __typename?: 'RegisterUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  userAccount?: Maybe<UserAccount>;
  query?: Maybe<Query>;
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

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = {
   __typename?: 'LoginPayload';
  user: UserAccount;
};

export type Subscription = {
   __typename?: 'Subscription';
  query: Query;
  nodeId: Scalars['ID'];
  node?: Maybe<Node>;
  allTestTablesList?: Maybe<Array<TestTable>>;
  testTableByUserId?: Maybe<TestTable>;
  userAccountByUserId?: Maybe<UserAccount>;
  userAccountByUsername?: Maybe<UserAccount>;
  currentPerson?: Maybe<UserAccount>;
  testTable?: Maybe<TestTable>;
  userAccount?: Maybe<UserAccount>;
};


export type SubscriptionNodeArgs = {
  nodeId: Scalars['ID'];
};


export type SubscriptionAllTestTablesListArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TestTablesOrderBy>>;
  condition?: Maybe<TestTableCondition>;
};


export type SubscriptionTestTableByUserIdArgs = {
  userId: Scalars['UUID'];
};


export type SubscriptionUserAccountByUserIdArgs = {
  userId: Scalars['UUID'];
};


export type SubscriptionUserAccountByUsernameArgs = {
  username: Scalars['String'];
};


export type SubscriptionTestTableArgs = {
  nodeId: Scalars['ID'];
};


export type SubscriptionUserAccountArgs = {
  nodeId: Scalars['ID'];
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
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Node: ResolversTypes['Query'] | ResolversTypes['TestTable'] | ResolversTypes['UserAccount'],
  TestTablesOrderBy: TestTablesOrderBy,
  TestTableCondition: TestTableCondition,
  UUID: ResolverTypeWrapper<Scalars['UUID']>,
  TestTable: ResolverTypeWrapper<TestTable>,
  JSON: ResolverTypeWrapper<Scalars['JSON']>,
  UserAccount: ResolverTypeWrapper<UserAccount>,
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateTestTableInput: CreateTestTableInput,
  TestTableInput: TestTableInput,
  CreateTestTablePayload: ResolverTypeWrapper<CreateTestTablePayload>,
  CreateUserAccountInput: CreateUserAccountInput,
  UserAccountInput: UserAccountInput,
  CreateUserAccountPayload: ResolverTypeWrapper<CreateUserAccountPayload>,
  UpdateTestTableInput: UpdateTestTableInput,
  TestTablePatch: TestTablePatch,
  UpdateTestTablePayload: ResolverTypeWrapper<UpdateTestTablePayload>,
  UpdateTestTableByUserIdInput: UpdateTestTableByUserIdInput,
  UpdateUserAccountInput: UpdateUserAccountInput,
  UserAccountPatch: UserAccountPatch,
  UpdateUserAccountPayload: ResolverTypeWrapper<UpdateUserAccountPayload>,
  UpdateUserAccountByUserIdInput: UpdateUserAccountByUserIdInput,
  UpdateUserAccountByUsernameInput: UpdateUserAccountByUsernameInput,
  DeleteTestTableInput: DeleteTestTableInput,
  DeleteTestTablePayload: ResolverTypeWrapper<DeleteTestTablePayload>,
  DeleteTestTableByUserIdInput: DeleteTestTableByUserIdInput,
  DeleteUserAccountInput: DeleteUserAccountInput,
  DeleteUserAccountPayload: ResolverTypeWrapper<DeleteUserAccountPayload>,
  DeleteUserAccountByUserIdInput: DeleteUserAccountByUserIdInput,
  DeleteUserAccountByUsernameInput: DeleteUserAccountByUsernameInput,
  RegisterUserInput: RegisterUserInput,
  RegisterUserPayload: ResolverTypeWrapper<RegisterUserPayload>,
  RegisterInput: RegisterInput,
  RegisterPayload: ResolverTypeWrapper<RegisterPayload>,
  LoginInput: LoginInput,
  LoginPayload: ResolverTypeWrapper<LoginPayload>,
  Subscription: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Query: {},
  ID: Scalars['ID'],
  Int: Scalars['Int'],
  Node: ResolversParentTypes['Query'] | ResolversParentTypes['TestTable'] | ResolversParentTypes['UserAccount'],
  TestTablesOrderBy: TestTablesOrderBy,
  TestTableCondition: TestTableCondition,
  UUID: Scalars['UUID'],
  TestTable: TestTable,
  JSON: Scalars['JSON'],
  UserAccount: UserAccount,
  Datetime: Scalars['Datetime'],
  Mutation: {},
  CreateTestTableInput: CreateTestTableInput,
  TestTableInput: TestTableInput,
  CreateTestTablePayload: CreateTestTablePayload,
  CreateUserAccountInput: CreateUserAccountInput,
  UserAccountInput: UserAccountInput,
  CreateUserAccountPayload: CreateUserAccountPayload,
  UpdateTestTableInput: UpdateTestTableInput,
  TestTablePatch: TestTablePatch,
  UpdateTestTablePayload: UpdateTestTablePayload,
  UpdateTestTableByUserIdInput: UpdateTestTableByUserIdInput,
  UpdateUserAccountInput: UpdateUserAccountInput,
  UserAccountPatch: UserAccountPatch,
  UpdateUserAccountPayload: UpdateUserAccountPayload,
  UpdateUserAccountByUserIdInput: UpdateUserAccountByUserIdInput,
  UpdateUserAccountByUsernameInput: UpdateUserAccountByUsernameInput,
  DeleteTestTableInput: DeleteTestTableInput,
  DeleteTestTablePayload: DeleteTestTablePayload,
  DeleteTestTableByUserIdInput: DeleteTestTableByUserIdInput,
  DeleteUserAccountInput: DeleteUserAccountInput,
  DeleteUserAccountPayload: DeleteUserAccountPayload,
  DeleteUserAccountByUserIdInput: DeleteUserAccountByUserIdInput,
  DeleteUserAccountByUsernameInput: DeleteUserAccountByUsernameInput,
  RegisterUserInput: RegisterUserInput,
  RegisterUserPayload: RegisterUserPayload,
  RegisterInput: RegisterInput,
  RegisterPayload: RegisterPayload,
  LoginInput: LoginInput,
  LoginPayload: LoginPayload,
  Subscription: {},
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>,
  allTestTablesList?: Resolver<Maybe<Array<ResolversTypes['TestTable']>>, ParentType, ContextType, RequireFields<QueryAllTestTablesListArgs, never>>,
  testTableByUserId?: Resolver<Maybe<ResolversTypes['TestTable']>, ParentType, ContextType, RequireFields<QueryTestTableByUserIdArgs, 'userId'>>,
  userAccountByUserId?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType, RequireFields<QueryUserAccountByUserIdArgs, 'userId'>>,
  userAccountByUsername?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType, RequireFields<QueryUserAccountByUsernameArgs, 'username'>>,
  currentPerson?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>,
  testTable?: Resolver<Maybe<ResolversTypes['TestTable']>, ParentType, ContextType, RequireFields<QueryTestTableArgs, 'nodeId'>>,
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType, RequireFields<QueryUserAccountArgs, 'nodeId'>>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'TestTable' | 'UserAccount', ParentType, ContextType>,
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID'
}

export type TestTableResolvers<ContextType = any, ParentType extends ResolversParentTypes['TestTable'] = ResolversParentTypes['TestTable']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>,
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type UserAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccount'] = ResolversParentTypes['UserAccount']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>,
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  emailConfirmed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  roles?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createTestTable?: Resolver<Maybe<ResolversTypes['CreateTestTablePayload']>, ParentType, ContextType, RequireFields<MutationCreateTestTableArgs, 'input'>>,
  createUserAccount?: Resolver<Maybe<ResolversTypes['CreateUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserAccountArgs, 'input'>>,
  updateTestTable?: Resolver<Maybe<ResolversTypes['UpdateTestTablePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTestTableArgs, 'input'>>,
  updateTestTableByUserId?: Resolver<Maybe<ResolversTypes['UpdateTestTablePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTestTableByUserIdArgs, 'input'>>,
  updateUserAccount?: Resolver<Maybe<ResolversTypes['UpdateUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserAccountArgs, 'input'>>,
  updateUserAccountByUserId?: Resolver<Maybe<ResolversTypes['UpdateUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserAccountByUserIdArgs, 'input'>>,
  updateUserAccountByUsername?: Resolver<Maybe<ResolversTypes['UpdateUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserAccountByUsernameArgs, 'input'>>,
  deleteTestTable?: Resolver<Maybe<ResolversTypes['DeleteTestTablePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTestTableArgs, 'input'>>,
  deleteTestTableByUserId?: Resolver<Maybe<ResolversTypes['DeleteTestTablePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTestTableByUserIdArgs, 'input'>>,
  deleteUserAccount?: Resolver<Maybe<ResolversTypes['DeleteUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserAccountArgs, 'input'>>,
  deleteUserAccountByUserId?: Resolver<Maybe<ResolversTypes['DeleteUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserAccountByUserIdArgs, 'input'>>,
  deleteUserAccountByUsername?: Resolver<Maybe<ResolversTypes['DeleteUserAccountPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserAccountByUsernameArgs, 'input'>>,
  registerUser?: Resolver<Maybe<ResolversTypes['RegisterUserPayload']>, ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'input'>>,
  register?: Resolver<Maybe<ResolversTypes['RegisterPayload']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>,
  login?: Resolver<Maybe<ResolversTypes['LoginPayload']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>,
};

export type CreateTestTablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTestTablePayload'] = ResolversParentTypes['CreateTestTablePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  testTable?: Resolver<Maybe<ResolversTypes['TestTable']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserAccountPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserAccountPayload'] = ResolversParentTypes['CreateUserAccountPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateTestTablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTestTablePayload'] = ResolversParentTypes['UpdateTestTablePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  testTable?: Resolver<Maybe<ResolversTypes['TestTable']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateUserAccountPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserAccountPayload'] = ResolversParentTypes['UpdateUserAccountPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteTestTablePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTestTablePayload'] = ResolversParentTypes['DeleteTestTablePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  testTable?: Resolver<Maybe<ResolversTypes['TestTable']>, ParentType, ContextType>,
  deletedTestTableId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DeleteUserAccountPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserAccountPayload'] = ResolversParentTypes['DeleteUserAccountPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>,
  deletedUserAccountId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RegisterUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterUserPayload'] = ResolversParentTypes['RegisterUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userAccount?: Resolver<Maybe<ResolversTypes['UserAccount']>, ParentType, ContextType>,
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RegisterPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterPayload'] = ResolversParentTypes['RegisterPayload']> = {
  user?: Resolver<ResolversTypes['UserAccount'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginPayload'] = ResolversParentTypes['LoginPayload']> = {
  user?: Resolver<ResolversTypes['UserAccount'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  query?: SubscriptionResolver<ResolversTypes['Query'], "query", ParentType, ContextType>,
  nodeId?: SubscriptionResolver<ResolversTypes['ID'], "nodeId", ParentType, ContextType>,
  node?: SubscriptionResolver<Maybe<ResolversTypes['Node']>, "node", ParentType, ContextType, RequireFields<SubscriptionNodeArgs, 'nodeId'>>,
  allTestTablesList?: SubscriptionResolver<Maybe<Array<ResolversTypes['TestTable']>>, "allTestTablesList", ParentType, ContextType, RequireFields<SubscriptionAllTestTablesListArgs, never>>,
  testTableByUserId?: SubscriptionResolver<Maybe<ResolversTypes['TestTable']>, "testTableByUserId", ParentType, ContextType, RequireFields<SubscriptionTestTableByUserIdArgs, 'userId'>>,
  userAccountByUserId?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "userAccountByUserId", ParentType, ContextType, RequireFields<SubscriptionUserAccountByUserIdArgs, 'userId'>>,
  userAccountByUsername?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "userAccountByUsername", ParentType, ContextType, RequireFields<SubscriptionUserAccountByUsernameArgs, 'username'>>,
  currentPerson?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "currentPerson", ParentType, ContextType>,
  testTable?: SubscriptionResolver<Maybe<ResolversTypes['TestTable']>, "testTable", ParentType, ContextType, RequireFields<SubscriptionTestTableArgs, 'nodeId'>>,
  userAccount?: SubscriptionResolver<Maybe<ResolversTypes['UserAccount']>, "userAccount", ParentType, ContextType, RequireFields<SubscriptionUserAccountArgs, 'nodeId'>>,
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>,
  Node?: NodeResolvers,
  UUID?: GraphQLScalarType,
  TestTable?: TestTableResolvers<ContextType>,
  JSON?: GraphQLScalarType,
  UserAccount?: UserAccountResolvers<ContextType>,
  Datetime?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  CreateTestTablePayload?: CreateTestTablePayloadResolvers<ContextType>,
  CreateUserAccountPayload?: CreateUserAccountPayloadResolvers<ContextType>,
  UpdateTestTablePayload?: UpdateTestTablePayloadResolvers<ContextType>,
  UpdateUserAccountPayload?: UpdateUserAccountPayloadResolvers<ContextType>,
  DeleteTestTablePayload?: DeleteTestTablePayloadResolvers<ContextType>,
  DeleteUserAccountPayload?: DeleteUserAccountPayloadResolvers<ContextType>,
  RegisterUserPayload?: RegisterUserPayloadResolvers<ContextType>,
  RegisterPayload?: RegisterPayloadResolvers<ContextType>,
  LoginPayload?: LoginPayloadResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
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