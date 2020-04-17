import React from 'react';
import { UserAccount } from '@equest/graphql';

interface UserState {
  user?: Partial<UserAccount>;
}

export const UserContext = React.createContext<UserState>({});
