import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

const Profile = () => {
  const profileData = useSelector((state) => state.user.profile);

  const handleSubmit = () => {};

  return (
    <Container>
      <Form initialData={profileData} onSubmit={handleSubmit}>
        <Input name='name' placeholder='Nome completo' />
        <Input name='email' type='email' placeholder='Email' />
        <hr />
        <Input name='oldPassword' type='password' placeholder='Senha atual' />
        <Input name='password' type='password' placeholder='Nova senha' />
        <Input
          name='passwordConfirmation'
          type='password'
          placeholder='Repetir nova senha'
        />
        <button type='submit'>Atualizar perfil</button>
      </Form>

      <button type='button'>Sair do GoBarber</button>
    </Container>
  );
};

export default Profile;
