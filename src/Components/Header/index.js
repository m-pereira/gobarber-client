import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notification from '../Notification';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-header.svg';

const Header = () => {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt='GoBarber' />
          <Link to='/dashboard'>DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to='/profile'>Meu perfil</Link>
            </div>

            <img
              src={
                profile.avatar.url ||
                'https://images.apilist.fun/adorable_avatars_api.png'
              }
              alt='Avatar'
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
