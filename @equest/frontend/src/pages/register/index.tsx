import { RegisterInput, useRegisterMutation } from '@equest/graphql';
import { NextPage } from 'next';
import React, { useState } from 'react';

import RegisterForm from '../../components/RegisterForm';

const RegisterPage: NextPage = () => {
  // const [registerMutation, { data, loading, error }] = useRegisterMutation();
  const [input, setInput] = useState<RegisterInput>();

  return (
    <div>
      <RegisterForm setInput={setInput} />
    </div>
  );
};

export default RegisterPage;
