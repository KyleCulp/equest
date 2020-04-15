import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());

const req = require.context('../src', true, /\.story\.(ts|tsx)$/);

configure(() => {
  req.keys().forEach((filename) => req(filename));
}, module);
