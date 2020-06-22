import { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Intro from '../components/Intro';
import DataSection from '../components/DataSection';


import React from 'react';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <Intro/>
          <Section/>
          <DataSection/>
          <Section/>
          <Section/>
          <Section/>
        </div>
      </Layout>
      
    </div>
  );
};

export default IndexPage;
