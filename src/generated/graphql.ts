import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Datetime: any,
};



export type BaseNode = {
   __typename?: 'BaseNode',
  id: Scalars['ID'],
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};

export type CheckEmailInput = {
  email: Scalars['String'],
};

export type CreateDeviceInput = {
  device: Scalars['ID'],
};

export type CreateDevicePayload = {
   __typename?: 'CreateDevicePayload',
  token: Scalars['String'],
};


export type Device = Node & {
   __typename?: 'Device',
  owner?: Maybe<User>,
  name?: Maybe<Scalars['String']>,
  usersInvited?: Maybe<Array<Maybe<User>>>,
  pendingInvites?: Maybe<Array<Maybe<Scalars['String']>>>,
  logs?: Maybe<LogConnection>,
  id: Scalars['ID'],
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};


export type DeviceLogsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type LigarReceptorInput = {
  device: Scalars['ID'],
};

export type Log = Node & {
   __typename?: 'Log',
  id: Scalars['ID'],
  user?: Maybe<User>,
  action?: Maybe<LogAction>,
  payload?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Datetime']>,
};

export enum LogAction {
  On = 'ON',
  Off = 'OFF',
  RemoveUser = 'REMOVE_USER',
  InviteUser = 'INVITE_USER',
  CancelInvite = 'CANCEL_INVITE',
  AlexaSkill = 'ALEXA_SKILL'
}

export type LogConnection = {
   __typename?: 'LogConnection',
  edges: Array<Maybe<LogEdge>>,
  pageInfo: PageInfo,
};

export type LogEdge = {
   __typename?: 'LogEdge',
  cursor?: Maybe<Scalars['String']>,
  node?: Maybe<Log>,
};

export type LoginPayload = {
   __typename?: 'LoginPayload',
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  createDevice: CreateDevicePayload,
  sendInvite: SendInvitePayload,
  cancelInvite: ResponsePayload,
  login: LoginPayload,
  removeUser: ResponsePayload,
  registerNewDevice: RegisterNewDevicePayload,
  checkEmail: ResponsePayload,
  registerWithInvite: RegisterUserPayload,
  registerWithDevice: RegisterUserPayload,
  checkQRCode: ResponsePayload,
  switch?: Maybe<Scalars['Boolean']>,
  ligarReceptor?: Maybe<Scalars['Boolean']>,
  getStatus?: Maybe<Scalars['Boolean']>,
};


export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput
};


export type MutationSendInviteArgs = {
  input: SendInviteInput
};


export type MutationCancelInviteArgs = {
  input: SendInviteInput
};


export type MutationRemoveUserArgs = {
  input: RemoveUserInput
};


export type MutationRegisterNewDeviceArgs = {
  input: RegisterNewDeviceInput
};


export type MutationCheckEmailArgs = {
  input: CheckEmailInput
};


export type MutationRegisterWithDeviceArgs = {
  input: RegisterWithDeviceInput
};


export type MutationCheckQrCodeArgs = {
  input: RegisterWithDeviceInput
};


export type MutationSwitchArgs = {
  input: SwitchInput
};


export type MutationLigarReceptorArgs = {
  input: LigarReceptorInput
};


export type MutationGetStatusArgs = {
  input: LigarReceptorInput
};

export type MyDevicesPayload = {
   __typename?: 'MyDevicesPayload',
  owned?: Maybe<Array<Maybe<Device>>>,
  guest?: Maybe<Array<Maybe<Device>>>,
};

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Payload = {
   __typename?: 'Payload',
  error?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  node?: Maybe<Node>,
  myDevices: MyDevicesPayload,
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type RegisterNewDeviceInput = {
  qrcode: Scalars['String'],
  name: Scalars['String'],
};

export type RegisterNewDevicePayload = {
   __typename?: 'RegisterNewDevicePayload',
  device?: Maybe<Device>,
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type RegisterUserPayload = {
   __typename?: 'RegisterUserPayload',
  user?: Maybe<User>,
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type RegisterWithDeviceInput = {
  qrcode: Scalars['String'],
  name?: Maybe<Scalars['String']>,
};

export type RemoveUserInput = {
  device: Scalars['ID'],
  user: Scalars['ID'],
};

export type ResponsePayload = {
   __typename?: 'ResponsePayload',
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type SendInviteInput = {
  device: Scalars['ID'],
  email: Scalars['String'],
};

export type SendInvitePayload = {
   __typename?: 'SendInvitePayload',
  user?: Maybe<User>,
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  switched?: Maybe<SwitchedPayload>,
};

export enum Switch {
  On = 'ON',
  Off = 'OFF'
}

export type SwitchedPayload = {
   __typename?: 'SwitchedPayload',
  turned?: Maybe<Switch>,
  device?: Maybe<Device>,
};

export type SwitchInput = {
  turn: Switch,
  device: Scalars['ID'],
};

export type User = Node & {
   __typename?: 'User',
  email?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => Maybe<TTypes>;

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
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Node: ResolverTypeWrapper<Node>,
  MyDevicesPayload: ResolverTypeWrapper<MyDevicesPayload>,
  Device: ResolverTypeWrapper<Device>,
  User: ResolverTypeWrapper<User>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  LogConnection: ResolverTypeWrapper<LogConnection>,
  LogEdge: ResolverTypeWrapper<LogEdge>,
  Log: ResolverTypeWrapper<Log>,
  LogAction: LogAction,
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateDeviceInput: CreateDeviceInput,
  CreateDevicePayload: ResolverTypeWrapper<CreateDevicePayload>,
  SendInviteInput: SendInviteInput,
  SendInvitePayload: ResolverTypeWrapper<SendInvitePayload>,
  ResponsePayload: ResolverTypeWrapper<ResponsePayload>,
  LoginPayload: ResolverTypeWrapper<LoginPayload>,
  RemoveUserInput: RemoveUserInput,
  RegisterNewDeviceInput: RegisterNewDeviceInput,
  RegisterNewDevicePayload: ResolverTypeWrapper<RegisterNewDevicePayload>,
  CheckEmailInput: CheckEmailInput,
  RegisterUserPayload: ResolverTypeWrapper<RegisterUserPayload>,
  RegisterWithDeviceInput: RegisterWithDeviceInput,
  SwitchInput: SwitchInput,
  SWITCH: Switch,
  LigarReceptorInput: LigarReceptorInput,
  Subscription: ResolverTypeWrapper<{}>,
  SwitchedPayload: ResolverTypeWrapper<SwitchedPayload>,
  BaseNode: ResolverTypeWrapper<BaseNode>,
  Payload: ResolverTypeWrapper<Payload>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ID: Scalars['ID'],
  Node: Node,
  MyDevicesPayload: MyDevicesPayload,
  Device: Device,
  User: User,
  String: Scalars['String'],
  Int: Scalars['Int'],
  LogConnection: LogConnection,
  LogEdge: LogEdge,
  Log: Log,
  LogAction: LogAction,
  Datetime: Scalars['Datetime'],
  PageInfo: PageInfo,
  Boolean: Scalars['Boolean'],
  Mutation: {},
  CreateDeviceInput: CreateDeviceInput,
  CreateDevicePayload: CreateDevicePayload,
  SendInviteInput: SendInviteInput,
  SendInvitePayload: SendInvitePayload,
  ResponsePayload: ResponsePayload,
  LoginPayload: LoginPayload,
  RemoveUserInput: RemoveUserInput,
  RegisterNewDeviceInput: RegisterNewDeviceInput,
  RegisterNewDevicePayload: RegisterNewDevicePayload,
  CheckEmailInput: CheckEmailInput,
  RegisterUserPayload: RegisterUserPayload,
  RegisterWithDeviceInput: RegisterWithDeviceInput,
  SwitchInput: SwitchInput,
  SWITCH: Switch,
  LigarReceptorInput: LigarReceptorInput,
  Subscription: {},
  SwitchedPayload: SwitchedPayload,
  BaseNode: BaseNode,
  Payload: Payload,
};

export type OwnerDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BaseNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseNode'] = ResolversParentTypes['BaseNode']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CreateDevicePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateDevicePayload'] = ResolversParentTypes['CreateDevicePayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime'
}

export type DeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Device'] = ResolversParentTypes['Device']> = {
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  usersInvited?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  pendingInvites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, DeviceLogsArgs>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  action?: Resolver<Maybe<ResolversTypes['LogAction']>, ParentType, ContextType>,
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>,
};

export type LogConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogConnection'] = ResolversParentTypes['LogConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['LogEdge']>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
};

export type LogEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogEdge'] = ResolversParentTypes['LogEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Log']>, ParentType, ContextType>,
};

export type LoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginPayload'] = ResolversParentTypes['LoginPayload']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createDevice?: Resolver<ResolversTypes['CreateDevicePayload'], ParentType, ContextType, RequireFields<MutationCreateDeviceArgs, 'input'>>,
  sendInvite?: Resolver<ResolversTypes['SendInvitePayload'], ParentType, ContextType, RequireFields<MutationSendInviteArgs, 'input'>>,
  cancelInvite?: Resolver<ResolversTypes['ResponsePayload'], ParentType, ContextType, RequireFields<MutationCancelInviteArgs, 'input'>>,
  login?: Resolver<ResolversTypes['LoginPayload'], ParentType, ContextType>,
  removeUser?: Resolver<ResolversTypes['ResponsePayload'], ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'input'>>,
  registerNewDevice?: Resolver<ResolversTypes['RegisterNewDevicePayload'], ParentType, ContextType, RequireFields<MutationRegisterNewDeviceArgs, 'input'>>,
  checkEmail?: Resolver<ResolversTypes['ResponsePayload'], ParentType, ContextType, RequireFields<MutationCheckEmailArgs, 'input'>>,
  registerWithInvite?: Resolver<ResolversTypes['RegisterUserPayload'], ParentType, ContextType>,
  registerWithDevice?: Resolver<ResolversTypes['RegisterUserPayload'], ParentType, ContextType, RequireFields<MutationRegisterWithDeviceArgs, 'input'>>,
  checkQRCode?: Resolver<ResolversTypes['ResponsePayload'], ParentType, ContextType, RequireFields<MutationCheckQrCodeArgs, 'input'>>,
  switch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSwitchArgs, 'input'>>,
  ligarReceptor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationLigarReceptorArgs, 'input'>>,
  getStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationGetStatusArgs, 'input'>>,
};

export type MyDevicesPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyDevicesPayload'] = ResolversParentTypes['MyDevicesPayload']> = {
  owned?: Resolver<Maybe<Array<Maybe<ResolversTypes['Device']>>>, ParentType, ContextType>,
  guest?: Resolver<Maybe<Array<Maybe<ResolversTypes['Device']>>>, ParentType, ContextType>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Device' | 'User' | 'Log', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payload'] = ResolversParentTypes['Payload']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>,
  myDevices?: Resolver<ResolversTypes['MyDevicesPayload'], ParentType, ContextType>,
};

export type RegisterNewDevicePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterNewDevicePayload'] = ResolversParentTypes['RegisterNewDevicePayload']> = {
  device?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RegisterUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterUserPayload'] = ResolversParentTypes['RegisterUserPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ResponsePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponsePayload'] = ResolversParentTypes['ResponsePayload']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SendInvitePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendInvitePayload'] = ResolversParentTypes['SendInvitePayload']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  switched?: SubscriptionResolver<Maybe<ResolversTypes['SwitchedPayload']>, "switched", ParentType, ContextType>,
};

export type SwitchedPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SwitchedPayload'] = ResolversParentTypes['SwitchedPayload']> = {
  turned?: Resolver<Maybe<ResolversTypes['SWITCH']>, ParentType, ContextType>,
  device?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  BaseNode?: BaseNodeResolvers<ContextType>,
  CreateDevicePayload?: CreateDevicePayloadResolvers<ContextType>,
  Datetime?: GraphQLScalarType,
  Device?: DeviceResolvers<ContextType>,
  Log?: LogResolvers<ContextType>,
  LogConnection?: LogConnectionResolvers<ContextType>,
  LogEdge?: LogEdgeResolvers<ContextType>,
  LoginPayload?: LoginPayloadResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  MyDevicesPayload?: MyDevicesPayloadResolvers<ContextType>,
  Node?: NodeResolvers,
  PageInfo?: PageInfoResolvers<ContextType>,
  Payload?: PayloadResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  RegisterNewDevicePayload?: RegisterNewDevicePayloadResolvers<ContextType>,
  RegisterUserPayload?: RegisterUserPayloadResolvers<ContextType>,
  ResponsePayload?: ResponsePayloadResolvers<ContextType>,
  SendInvitePayload?: SendInvitePayloadResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  SwitchedPayload?: SwitchedPayloadResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  owner?: OwnerDirectiveResolver<any, any, ContextType>,
  auth?: AuthDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;