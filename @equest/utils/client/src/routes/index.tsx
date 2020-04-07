// Global Imports
import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Login} exact path={LinkConstants.LOGIN} />
      </Switch>
    </BrowserRouter>
  );
};
