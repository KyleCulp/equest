import '@equest/config/src/main';

// /*
//  *	Check that all environmental variables are present, and throw
//  *  an error before continuing if checks fail. This prevents
//  *	needless connections to the database, and a faster restart
//  */

// enum EnvironmentalVariables {
//   NODE_ENV,
//   PG_MASTER_HOST,
//   PG_MASTER_PORT,
//   PG_MASTER_USERNAME,
//   PG_MASTER_PASSWORD,
//   PG_MASTER_NAME,
//   PG_MASTER_ADMIN_USERNAME,
//   PG_MASTER_ADMIN_PASSWORD,
//   REDIS_HOST,
//   REDIS_PORT,
//   REDIS_FAMILY,
//   REDIS_PASSWORD,
//   REDIS_SESSION_DB,
//   REDIS_QUEUE_DB,
//   SERVER_URL,
//   SERVER_PORT,
//   JWT_SECRET,
// }

// /**
//  * Helpful string/number filter for mapping objects
//  *
//  * @param value
//  * @returns True if string; False if number
//  */
// const isString = (value: string | number) => isNaN(Number(value)) === false;

// /**
//  * Convert enum into an array
//  *
//  * @remarks
//  * https://stackoverflow.com/questions/43100718/typescript-enum-to-object-array/51536142#51536142
//  *
//  * @param value - The first input number
//  * @returns The arithmetic mean of `x` and `y`
//  */
// // export function enumToArray(value: typeof EnvironmentalVariables) {
// //   return Object.keys(value)
// //     .filter(isString)
// //     .map((key) => value[key]);
// // }

// /**
//  * Checks if needed environmental variables are available. Throws error at any missing
//  */
// /**
//  * Checks if needed environmental variables are available. Throws error at any missing
//  *
//  * @param envList - The first input number
//  * @returns The arithmetic mean of `x` and `y`
//  */
// // export const checkEnvironmentVariables = (envList) => {
// //   for (const envVar of enumToArray(envList)) {
// //     if (!process.env[envVar]) {
// //       throw new Error('Missing environment variable: ' + envVar);
// //     }
// //   }
// // };
