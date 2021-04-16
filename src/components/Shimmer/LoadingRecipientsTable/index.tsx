import React from 'react';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingRecipientsTable: React.FC = () => {
  return (
    <Container>
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
    </Container>
  );
};

export default LoadingRecipientsTable;
