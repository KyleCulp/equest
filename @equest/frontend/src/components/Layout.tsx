import { RegisterInput, useRegisterMutation } from '../generated'
import { Input } from '@rebass/forms';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm, ValidationOptions } from 'react-hook-form';
import { Box, Button, Flex } from 'rebass';
import { MutationTuple } from '@apollo/client';

interface Props {
}

const Layout: React.FC<Props> = () => {

  return (
    <Box as="form" maxWidth={256} onSubmit={handleSubmit(onSubmit)}>
      <Flex flexWrap={'wrap'}>

      </Flex>
    </Box>
  );
};

export default RegisterForm;
