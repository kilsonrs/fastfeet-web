import React from 'react';
import Header from '../../components/Header';

import { Container, Content } from './styles';

const Dashboard: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default Dashboard;
