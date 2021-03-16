import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.post('/user-sessions', async () => {
      return {
        user: {
          id: 'user_id',
          name: 'admin_user',
          email: 'admin@fastfeet.com.br',
          is_deliveryman: false,
        },
        token: 'any_token',
      };
    });

    this.get('/orders', async () => [
      {
        id: 1,
        recipient: 'Ludwig van Beethoven',
        deliveryman: 'John Doe',
        avatar_url: null,
        street: 'Rua Rui Barbosa',
        number: 1729,
        neighborhood: 'Diadema',
        city: 'São Paulo',
        state: 'São Paulo',
        uf: 'SP',
        zip_code: '11985-580',
        status: 'entregue',
        picked_date: '2021-03-16T18:29:50.132Z',
        delivered_date: '2021-03-16T18:29:50.132Z',
        signature_url:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        id: 2,
        recipient: 'Wolfgang Amadeus',
        deliveryman: 'Gaspar Antunes',
        avatar_url: null,
        street: 'Rua Salvador',
        number: 1729,
        neighborhood: 'Centro',
        city: 'Rio do Sul',
        state: 'Santa Catarina',
        uf: 'SC',
        zip_code: '00960-580',
        status: 'pendente',
        picked_date: null,
        delivered_date: null,
        signature_url: null,
      },
      {
        id: 3,
        recipient: 'Johann Sebastian Bach',
        deliveryman: 'Dai Jiang',
        avatar_url: null,
        street: 'Av. Tiradentes',
        number: 5650,
        neighborhood: 'Jardim Palmeiras',
        city: 'Ribeirão Preto',
        state: 'São Paulo',
        uf: 'SP',
        zip_code: '15970-580',
        status: 'retirada',
        picked_date: '2021-03-16T18:29:50.132Z',
        delivered_date: null,
        signature_url: null,
      },
      {
        id: 4,
        recipient: 'Frédéric Chopin',
        deliveryman: 'Tom Hanson',
        avatar_url: null,
        street: 'Rua Paraíba',
        number: 1729,
        neighborhood: 'Residencial Boa Vista',
        city: 'Rio Claro',
        state: 'São Paulo',
        uf: 'SP',
        zip_code: '00960-580',
        status: 'cancelada',
        picked_date: '2021-03-16T18:29:50.132Z',
        delivered_date: null,
        signature_url: null,
      },
    ]);

    this.get('/deliverers', async () => [
      {
        id: 1,
        avatar_url: null,
        name: 'John Doe',
        email: 'john@doe.com',
      },
      {
        id: 2,
        avatar_url: null,
        name: 'Gaspar Antunes',
        email: 'gaspar@antunes.com',
      },
      {
        id: 3,
        avatar_url: null,
        name: 'Dai Jiang',
        email: 'dai@jiang.com',
      },
      {
        id: 4,
        avatar_url: null,
        name: 'Tom Hanson',
        email: 'tom@hanson.com',
      },
    ]);

    this.get('/issues', async () => [
      {
        id: 1,
        description: 'Destinatário ausente',
      },
      {
        id: 2,
        description: 'Carga roubada',
      },
      {
        id: 3,
        description: 'Infelizmente sofri um acidente que danificou a encomenda',
      },
      {
        id: 4,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus. Vivamus dapibus nisi augue, vitae ultrices ligula elementum at. Proin ut metus in mi tincidunt vestibulum a a felis. Aenean dictum libero eu urna tristique vestibulum. Fusce feugiat justo et augue facilisis, sit amet ornare eros consequat. Suspendisse semper risus feugiat nisl commodo, sed mollis neque auctor. Nullam eu fringilla lectus. Phasellus sed sapien sed turpis imperdiet maximus. Aenean ante nulla, bibendum non facilisis at, facilisis eget ex. In ut quam et tellus aliquet tincidunt.',
      },
    ]);

    this.get('/recipients', async () => [
      {
        id: 1,
        name: 'John Doe',
        address: 'Rua Beethoven, 1729, Diadema - São Paulo',
      },
      {
        id: 2,
        name: 'Gaspar Antunes',
        address: 'Rua Beethoven, 1729, Diadema - São Paulo',
      },
      {
        id: 3,
        name: 'Dai Jiang',
        address: 'Rua Beethoven, 1729, Diadema - São Paulo',
      },
      {
        id: 4,
        name: 'Tom Hanson',
        address: 'Rua Beethoven, 1729, Diadema - São Paulo',
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
