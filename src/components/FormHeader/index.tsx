import React from 'react';
import { MdArrowBack, MdDone } from 'react-icons/md';
import Button from '../Button';

import { Container } from './styles';

interface FormHeaderProps {
  title: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <span>
        <Button icon={MdArrowBack} type="button">
          VOLTAR
        </Button>
        <Button icon={MdDone} type="button">
          SALVAR
        </Button>
      </span>
    </Container>
  );
};

export default FormHeader;
