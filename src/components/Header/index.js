import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logopurple from '~/assets/logo-purple.svg';
import Notification from '~/components/Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logopurple} alt="GoBarber logo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Caique Roschel</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
