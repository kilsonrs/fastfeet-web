import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  const { pathname } = useLocation();
  const active = pathname.replace('/', '');
  console.log(active);
  return (
    <Container>
      <Content>
        <img src={Logo} alt="FastFeet" />
        <nav>
          <ul>
            <li className={active === 'orders' ? 'active' : ''}>
              <Link to="/orders">ENCOMENDAS</Link>
            </li>
            <li className={active === 'deliverers' ? 'active' : ''}>
              <Link to="/deliverers">ENTREGADORES</Link>
            </li>
            <li className={active === 'recipients' ? 'active' : ''}>
              <Link to="/recipients">DESTINATÁRIOS</Link>
            </li>
            <li className={active === 'issues' ? 'active' : ''}>
              <Link to="/issues">PROBLEMAS</Link>
            </li>
          </ul>
        </nav>
        <FiLogOut size={24} color="#999999" onClick={() => signOut()} />
      </Content>
    </Container>
  );
};

export default Header;
