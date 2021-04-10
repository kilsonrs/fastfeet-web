import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  loading,
  color,
  ...rest
}) => {
  return (
    <Container type="button" color={color} {...rest}>
      {Icon && <Icon size={24} color="#fff" />}
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default Button;
