import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';

const Profile = () => {
  const profileData = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data));
  };

  return (
    <Container>
      <Form initialData={profileData} onSubmit={handleSubmit}>
        <AvatarInput name='avatar_id' />
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
