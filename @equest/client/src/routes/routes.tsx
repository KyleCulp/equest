import React from 'react';
import {
  BrowserRouter,
  Switch,
  RouteComponentProps,
  Link,
  Route,
} from 'react-router-dom';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { RouteHandler } from './RouteHandler';

type Games = 'rocket_league' | 'csgo';

export type RouteConfig = {
  path: string;
  component: React.FC<RouteComponentProps>;
  private: boolean;
  exact: boolean;
  game?: Games;
};

export const pageRoutes: Array<RouteConfig> = [
  {
    path: '/login',
    component: Login,
    private: false,
    exact: false,
  },
  {
    path: '/register',
    component: Register,
    private: false,
    exact: false,
  },
  {
    path: '/',
    component: Home,
    private: false,
    exact: false,
  },
];

const routes = [...pageRoutes];

type Props = {};

export const Routes: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      {/* Some layout components here */}
      <Link to="/">Home Page</Link>
      <Link to="/login">Login Page</Link>
      <Link to="/register">Register Page</Link>

      <Switch>
        {routes.map((route) => {
          console.log('mapping lol');
          return <RouteHandler key={route.path} {...route} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};
