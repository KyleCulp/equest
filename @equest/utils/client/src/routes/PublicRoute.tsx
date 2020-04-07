import React, { FunctionComponent } from 'react';
import { RouteComponentProps, StaticContext, Route } from 'react-router';

type Props = {
  // https://stackoverflow.com/questions/49274143/react-typescript-hoc-passing-component-as-the-prop
  // Component needs to be passed as a constructor, not component instance.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: FunctionComponent<RouteComponentProps<{}, StaticContext, any>>;
  exact?: boolean;
  path: string;
};

export const PublicRoute = ({ component: Component, ...props }: Props) => (
  <Route {...props} render={(rest) => <Component {...rest} />} />
);
