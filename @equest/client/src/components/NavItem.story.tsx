import React from 'react';
import { action } from '@storybook/addon-actions';

import { NavItem } from './NavItem';

export default {
  component: NavItem,
  title: 'NavItem',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const navItemData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

export const Default = () => (
  <NavItem to="/" {...actionsData}>
    Home
  </NavItem>
);

export const Active = () => (
  <NavItem to="/" {...actionsData}>
    {' '}
  </NavItem>
);
