import { RegisterInput } from '@equest/graphql';
import { Input } from '@rebass/forms';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Flex } from 'rebass';

interface formField {
  name: string;
  placeholder: string;
  type: string;
}

const formFields: Array<formField> = [
  {
    name: 'username',
    placeholder: 'Username',
    type: 'text',
  },
  {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  ,
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
];

interface Props {
  setInput: Function;
}

const RegisterForm: React.FC<Props> = ({ setInput }) => {
  const { register, handleSubmit } = useForm<RegisterInput>();

  const onSubmit = async (FormData: RegisterInput, e) => {
    console.log('Submit event', e);
    setInput(FormData);
    console.log(FormData);
  };

  return (
    <Box as="form" maxWidth={256} onSubmit={handleSubmit(onSubmit)}>
      <Flex flexWrap={'wrap'}>
        {formFields.map((field, key) => (
          <Input
            ref={register}
            key={key}
            name={field.name}
            placeholder={field.placeholder}
            type={field.type}
            marginY={2}
            width="100%"
            css={{ textAlign: 'center' }}
          />
        ))}
        <Button type="submit" width="100%">
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default RegisterForm;
