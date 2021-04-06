import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import FormHeader from '../../../components/FormHeader';
import Input from '../../../components/Input';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface EditDeliverymanForm {
  name: string;
  email: string;
}

interface EditDeliverymanParams {
  id: string;
  name: string;
  email: string;
}

const EditDeliveryman: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory<EditDeliverymanParams>();
  const { id: deliverymanId, name, email } = history.location.state;

  const submitForm = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const handleSubmit = useCallback(
    async (data: EditDeliverymanForm) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string().email().required('Email é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put(`/deliverers/${deliverymanId}`, data);
        history.goBack();
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, deliverymanId],
  );

  return (
    <Container>
      <FormHeader title="Cadastro de entregadores" handleSubmit={submitForm} />
      <Content
        onSubmit={handleSubmit}
        ref={formRef}
        initialData={{ name, email }}
      >
        <span className="name">
          <strong>Nome</strong>
          <Input name="name" type="text" />
        </span>
        <span className="email">
          <strong>Email</strong>
          <Input name="email" type="text" />
        </span>
      </Content>
    </Container>
  );
};

export default EditDeliveryman;
