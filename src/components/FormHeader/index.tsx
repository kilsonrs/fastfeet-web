import React from 'react';
import { MdArrowBack, MdDone } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Button from '../Button';

import { Container } from './styles';

interface FormHeaderProps {
  title: string;
  handleSubmit(): void;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, handleSubmit }) => {
  const history = useHistory();
  return (
    <Container>
      <h1>{title}</h1>
      <span>
        <Button
          icon={MdArrowBack}
          type="button"
          color="#CCCCCC"
          onClick={() => history.goBack()}
        >
          VOLTAR
        </Button>
        <Button icon={MdDone} type="button" onClick={handleSubmit}>
          SALVAR
        </Button>
      </span>
    </Container>
  );
};

export default FormHeader;
