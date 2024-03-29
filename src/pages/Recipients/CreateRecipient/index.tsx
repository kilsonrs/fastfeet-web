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

interface CreateRecipient {
  name: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
}

const CreateRecipient: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const submitForm = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const handleSubmit = useCallback(
    async (data: CreateRecipient) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          street: Yup.string().required('Rua é obrigatório'),
          number: Yup.number()
            .required()
            .typeError('Número é obrigatório')
            .positive('precisa ser maior que zero'),
          neighborhood: Yup.string().required('Bairro é obrigatório'),
          city: Yup.string().required('Cidade é obrigatório'),
          state: Yup.string().required('Estado é obrigatório'),
          zip_code: Yup.string().required('CEP é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/recipients', data);

        toast.success('Destinatário cadastrado');
        history.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('Erro ao cadastrar destinatário');
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <FormHeader title="Cadastro de destinatário" handleSubmit={submitForm} />
      <Content onSubmit={handleSubmit} ref={formRef}>
        <span className="name">
          <strong>Nome</strong>
          <Input name="name" type="text" />
        </span>
        <span className="street">
          <strong>Rua</strong>
          <Input name="street" type="text" />
        </span>
        <span className="number">
          <strong>Número</strong>
          <Input name="number" type="number" />
        </span>
        <span className="neighborhood">
          <strong>Bairro</strong>
          <Input name="neighborhood" type="text" />
        </span>
        <span className="city">
          <strong>Cidade</strong>
          <Input name="city" type="text" />
        </span>
        <span className="state">
          <strong>Estado</strong>
          <Input name="state" type="text" />
        </span>
        <span className="zip-code">
          <strong>CEP</strong>
          <Input name="zip_code" type="text" />
        </span>
      </Content>
    </Container>
  );
};

export default CreateRecipient;
