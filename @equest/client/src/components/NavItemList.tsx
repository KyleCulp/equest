import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends LinkProps {
  active?: boolean;
}

export const NavItemList: React.FC<Props> = ({ to, children, active }) => {
  return <h1>Hi</h1>;
};
