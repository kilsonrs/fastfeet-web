import React from 'react';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingDeliverersTable: React.FC = () => {
  return (
    <Container>
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
    </Container>
  );
};

export default LoadingDeliverersTable;
