import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled(Form)`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  .email {
    margin-top: 18px;
  }

  strong {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
