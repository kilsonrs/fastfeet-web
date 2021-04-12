import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import FormHeader from '../../../components/FormHeader';
import Input from '../../../components/Input';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface CreateDeliverymanForm {
  name: string;
  email: string;
}

const CreateDeliveryman: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const submitForm = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const handleSubmit = useCallback(
    async (data: CreateDeliverymanForm) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string().email().required('Email é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/deliverers', data);

        toast.success('Entregador cadastrado com sucesso');
        history.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('Erro ao cadastrar entregador');
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <FormHeader title="Cadastro de entregadores" handleSubmit={submitForm} />
      <Content onSubmit={handleSubmit} ref={formRef}>
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

export default CreateDeliveryman;
