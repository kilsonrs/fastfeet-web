import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled(Form)`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 30px;
  grid-template-areas:
    'name   name   name    name'
    'street street number  neigh'
    'city   city  state   zip';
  margin-top: 16px;

  .name {
    grid-area: name;
  }

  .street {
    grid-area: street;
  }

  .number {
    grid-area: number;
  }

  .neighborhood {
    grid-area: neigh;
  }

  .city {
    grid-area: city;
  }

  .state {
    grid-area: state;
  }

  .zip-code {
    grid-area: zip;
  }

  strong {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;