import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { Layout } from '../../components/Layout';

export const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
};
