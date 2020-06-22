import { MutationTuple } from '@apollo/client';
import { Input } from '@rebass/forms';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm, ValidationOptions } from 'react-hook-form';
import { Box, Button, Flex } from 'rebass';
import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';

import { RegisterInput, useRegisterMutation } from '../generated';

interface Props { }

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>EQuest</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700,900" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet"></link>

        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.4.2/umd/popper.min.js" integrity="sha256-XahKYIZhnEztrOcCTmaEErjYDLoLqBoDJbVMYybyjH8=" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
      </Head>

      <NavBar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
