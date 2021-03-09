import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Content>
        <img src={Logo} alt="FastFeet" />
        <nav>
          <ul>
            <li>
              <Link to="/order-list">ENCOMENDAS</Link>
            </li>
            <li>
              <Link to="/deliveryman-list">ENTREGADORES</Link>
            </li>
            <li>
              <Link to="/recipient-list">DESTINATÁRIOS</Link>
            </li>
            <li>
              <Link to="/issue-list">PROBLEMAS</Link>
            </li>
          </ul>
        </nav>
        <FiLogOut size={24} color="#999999" onClick={() => signOut()} />
      </Content>
    </Container>
  );
};

export default Header;
