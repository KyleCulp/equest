import React from 'react';
import { Sidebar } from './Sidebar';
type Props = {};

export const Layout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
