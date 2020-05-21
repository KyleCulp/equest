import { MutationTuple } from '@apollo/client';
import { Input } from '@rebass/forms';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm, ValidationOptions } from 'react-hook-form';
import { Box, Button, Flex } from 'rebass';

import { RegisterInput, useRegisterMutation } from '../generated';

interface formField {
  name: string;
  placeholder: string;
  type: string;
  validation: ValidationOptions;
}

const formFields: formField[] = [
  {
    name: 'username',
    placeholder: 'Username',
    type: 'text',
    validation: {
      required: false,
    },
  },
  {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    validation: {
      required: true,
    },
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    validation: {
      required: 'Please enter a password',
      min: 8,
      max: 32,
    },
  },
];

interface Props {
  setInput: Dispatch<SetStateAction<RegisterInput>>;
}

const RegisterForm: React.FC<Props> = ({ setInput }) => {
  const { register, handleSubmit, errors } = useForm<RegisterInput>();
  const [registerMutation, { data, loading, error }] = useRegisterMutation();
  const onSubmit = async (input: RegisterInput) => {
    console.log(input);
    // registerMutation({ variables: { input } });
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Box as="form" maxWidth={256} onSubmit={handleSubmit(onSubmit)}>
      <Flex flexWrap={'wrap'}>
        {formFields.map((field, key) => (
          <div key={key}>
            <Input
              ref={register({
                required: true,
                min: 8,
                max: 32,
              })}
              key={key}
              name={field.name}
              placeholder={field.placeholder}
              defaultValue=""
              type={field.type}
              marginY={2}
              width="100%"
              css={{ textAlign: 'center' }}
            />
          </div>
        ))}
        <Button type="submit" width="100%">
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default RegisterForm;
