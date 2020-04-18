import { UserAccount } from '@equest/graphql';
import React from 'react';

interface UserState {
  user?: Partial<UserAccount>;
}

export const UserContext = React.createContext<UserState>({});
