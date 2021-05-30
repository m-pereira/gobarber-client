import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

const SignIn = () => (
  <>
    <img src={logo} alt='Gobarber-logo' />

    <form>
      <input type='email' placeholder='Seu e-mail' />
      <input type='password' placeholder='Sua senha secreta' />

      <button type='submit'>Acessar</button>
      <Link to='/register'>Criar conta gratuita</Link>
    </form>
  </>
);

export default SignIn;
