import React, { useCallback } from 'react';

import { Form } from '@unform/web';

import Logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const handleSubmit = useCallback((data: SignInFormData) => {
    const { email, password } = data;
    console.log(email, password);
  }, []);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={Logo} alt="FastFeet" />

        <strong>SEU E-MAIL</strong>
        <Input name="email" />

        <strong>SUA SENHA</strong>
        <Input name="password" type="password" />

        <Button type="submit">Entrar no sistema</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
