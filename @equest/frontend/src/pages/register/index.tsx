import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import RegisterForm from '../../components/RegisterForm';
import { RegisterInput, useRegisterMutation } from '../../generated';

const RegisterPage: NextPage = () => {
  const [registerMutation, { data, loading, error }] = useRegisterMutation();
  useEffect(() => {});
  const [input, setInput] = useState<RegisterInput>({} as RegisterInput);

  return (
    <div>
      Howdy
      <RegisterForm setInput={setInput} />
    </div>
  );
};

export default RegisterPage;
