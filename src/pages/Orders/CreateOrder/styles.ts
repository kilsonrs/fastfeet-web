import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled(Form)`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  grid-template-areas:
    'd e'
    'p p ';
  margin-top: 16px;

  .package_name {
    grid-area: p;
  }

  strong {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
