// https://ihateregex.io/
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/;

/**
 * Verify if string fits the criteria for a valid email
 *
 * @remarks
 * Apparently not perfect, but I doubt we'll run into issues
 *
 * @param primary - Email to verify
 * @returns True if valid email; False if not
 *
 */
export const isEmail = (primary: string) => {
  if (primary.match(emailRegex)) {
    return true;
  }
  return false;
};
