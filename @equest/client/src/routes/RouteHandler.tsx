import { Route, Redirect } from 'react-router';
import { RouteConfig } from './routes';
import React from 'react';

export const RouteHandler = (route: RouteConfig) => {
  // if (route.private && false /* check auth function */) {
  //   <Redirect to="/" />;
  // }
  return (
    <Route
      path={route.path}
      // exact={route.exact}
      render={(props) => <route.component {...props} />}
    />
  );
};
