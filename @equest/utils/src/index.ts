export const isDev: boolean = process.env.NODE_ENV === 'development';
export const isTest = process.env.NODE_ENV === 'test';
export * from './checkEnvironmentVariables';
export * from './regex';
export * from './graphqlErrors';
