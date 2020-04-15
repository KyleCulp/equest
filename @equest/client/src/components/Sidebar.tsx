import React from 'react';
import { NavItem } from './NavItem';
import { NavItemList } from './NavItemList';

type Props = {};

const itemListData = [
  {
    label: 'Home',
    to: '/'
  }
];
export const Sidebar: React.FC<Props> = ({}) => {
  return (
    <div>
      {/* <NavItemList {itemListData} /> */}
      <ul>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/login">Login</NavItem>
        <NavItem to="/register">register</NavItem>
      </ul>
    </div>
  );
};
