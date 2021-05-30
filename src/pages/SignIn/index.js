import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira o seu nome completo'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

const SignIn = () => {
  const handleSubmit = (data) => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt='Gobarber-logo' />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name='email' type='email' placeholder='Seu e-mail' />
        <Input
          name='password'
          type='password'
          placeholder='Sua senha secreta'
        />

        <button type='submit'>Acessar</button>
        <Link to='/register'>Criar conta gratuita</Link>
      </Form>
    </>
  );
};

export default SignIn;
