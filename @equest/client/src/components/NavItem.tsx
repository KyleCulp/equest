import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends LinkProps {
  active?: boolean;
}

export const NavItem: React.FC<Props> = ({ to, children, active }) => {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
};
