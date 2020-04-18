import { useLoginMutation } from '@equest/graphql';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RouteComponentProps } from 'react-router';

import { Layout } from '../../components/Layout';

export const Login: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const onSubmit = async (data) => {
    const response = await login({
      variables: { input: data },
    });
    console.log(response);
  };

  return (
    <Layout>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" ref={register} placeholder="username" />
        <input
          name="password"
          type="password"
          ref={register}
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </Layout>
  );
};
