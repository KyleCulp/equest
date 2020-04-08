import { authenticationResolver } from './authenticationResolver';

export const getGraphqlResolvers = () => {
  return [authenticationResolver];
};
