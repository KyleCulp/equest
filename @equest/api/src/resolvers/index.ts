import { authenticationResolver } from './authentication.resolver';

export const getGraphqlResolvers = () => {
  return [authenticationResolver];
};