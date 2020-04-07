import { authenticationResolver } from './authenticationResolver';

export const serverResolvers = () => {
  return [authenticationResolver];
};
