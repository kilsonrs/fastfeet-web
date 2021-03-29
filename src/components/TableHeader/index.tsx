import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import Button from '../Button';
import Input from '../Input';

import { Container } from './styles';

interface TableHeaderProps {
  onSubmitSearch(data: string): void;
  onCreateItem(): void;
  placeholder: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  onSubmitSearch,
  onCreateItem,
  placeholder,
}) => {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <nav>
        <Form onSubmit={onSubmitSearch} ref={formRef}>
          <Input name="search" icon={MdSearch} placeholder={placeholder} />
        </Form>
        <Button icon={MdAdd} onClick={onCreateItem}>
          CADASTRAR
        </Button>
      </nav>
    </Container>
  );
};

export default TableHeader;
