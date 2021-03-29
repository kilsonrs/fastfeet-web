import React, { FormEvent, useCallback } from 'react';
import FormHeader from '../../../components/FormHeader';
import Input from '../../../components/Input';
import SelectInput from '../../../components/SelectInput';

import { Container, Content } from './styles';

const CreateOrder: React.FC = () => {
  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Container>
      <FormHeader title="Cadastrar encomendas" />
      <Content onSubmit={handleSubmit}>
        <span>
          <strong>Destinatário</strong>
          <SelectInput options={options} />
        </span>
        <span>
          <strong>Entregador</strong>
          <Input name="delyveryman" type="text" />
        </span>
        <span className="product">
          <strong>Nome do produto</strong>
          <Input name="product" type="text" />
        </span>
      </Content>
    </Container>
  );
};

export default CreateOrder;
