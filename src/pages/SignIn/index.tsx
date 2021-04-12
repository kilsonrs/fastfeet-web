import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import Logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(8, 'Pelo menos 8 dígitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/orders');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('Erro ao fazer login');
        }
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <img src={Logo} alt="FastFeet" />

        <strong>SEU E-MAIL</strong>
        <Input name="email" containerStyle={{ height: 45 }} />

        <strong>SUA SENHA</strong>
        <Input
          name="password"
          type="password"
          containerStyle={{ height: 45 }}
        />

        <Button type="submit">Entrar no sistema</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
