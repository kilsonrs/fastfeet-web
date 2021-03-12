import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import Button from '../Button';
import Input from '../Input';

import { Container } from './styles';

interface TableHeaderProps {
  handleSubmit(data: string): void;
  placeholder: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  handleSubmit,
  placeholder,
}) => {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <nav>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="search" icon={MdSearch} placeholder={placeholder} />
        </Form>
        <Button icon={MdAdd}>CADASTRAR</Button>
      </nav>
    </Container>
  );
};

export default TableHeader;
