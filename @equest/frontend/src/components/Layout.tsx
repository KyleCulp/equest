import { MutationTuple } from '@apollo/client';
import { Input } from '@rebass/forms';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm, ValidationOptions } from 'react-hook-form';
import { Box, Button, Flex } from 'rebass';

import { RegisterInput, useRegisterMutation } from '../generated';

interface Props { }

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box as="form" maxWidth={256}>
      <Flex flexWrap={'wrap'}>{children}</Flex>
    </Box>
  );
};

export default Layout;
