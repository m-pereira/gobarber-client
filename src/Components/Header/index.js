import React from 'react';
import { Link } from 'react-router-dom';
import Notification from '../Notification';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-header.svg';

const Header = () => (
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
            <strong>Fulano de tal</strong>
            <Link to='/profile'>Meu perfil</Link>
          </div>

          <img
            src='https://images.apilist.fun/adorable_avatars_api.png'
            alt='Avatar'
          />
        </Profile>
      </aside>
    </Content>
  </Container>
);

export default Header;
