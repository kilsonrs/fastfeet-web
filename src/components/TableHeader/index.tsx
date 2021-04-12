import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { MdAdd, MdSearch } from 'react-icons/md';
import { FormHandles } from '@unform/core';
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
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const handleInputChange = useCallback(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        formRef.current?.submitForm();
      }, 300),
    );
  }, [timer]);

  return (
    <Container>
      <nav>
        <Form onSubmit={onSubmitSearch} ref={formRef}>
          <Input
            name="search"
            icon={MdSearch}
            placeholder={placeholder}
            handleInputChange={handleInputChange}
          />
        </Form>
        <Button icon={MdAdd} onClick={onCreateItem}>
          CADASTRAR
        </Button>
      </nav>
    </Container>
  );
};

export default TableHeader;
