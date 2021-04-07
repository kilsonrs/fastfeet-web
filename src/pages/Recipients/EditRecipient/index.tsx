import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import FormHeader from '../../../components/FormHeader';
import Input from '../../../components/Input';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface EditRecipient {
  name: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
}

const EditRecipient: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const submitForm = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const handleSubmit = useCallback(
    async (data: EditRecipient) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          street: Yup.string().required(),
          number: Yup.number().required(),
          neighborhood: Yup.string(),
          city: Yup.string().required(),
          state: Yup.string().required(),
          zip_code: Yup.string().required(),
        });

        // await schema.validate(data, {
        //   abortEarly: false,
        // });

        await api.post('/recipients', data);
        history.goBack();
      } catch (err) {
        console.error(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
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

export default EditRecipient;
