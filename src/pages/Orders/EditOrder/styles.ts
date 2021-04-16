import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled(Form)`
  background: var(--color-white);
  border-radius: 4px;
  padding: 32px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 8px;
  grid-column-gap: 32px;
  grid-template-areas:
    'd e'
    'p p ';
  margin-top: 16px;

  .product {
    grid-area: p;
  }

  strong {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
