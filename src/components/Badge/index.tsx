import React from 'react';

import { Container, Icon } from './styles';

interface BadgeProps {
  status: string;
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
  return (
    <Container status={status}>
      <Icon />
      <strong>{status}</strong>
    </Container>
  );
};

export default Badge;
