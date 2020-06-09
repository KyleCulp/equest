import '@equest/config';
export const isDev: boolean = process.env.NODE_ENV === 'development';
export const isTest: boolean = process.env.NODE_ENV === 'test';
// export * from './checkEnvironmentVariables';
export * from './regex';
// export * from './graphqlErrors';
export * from './redisInstance';
export * from './S3Config';
