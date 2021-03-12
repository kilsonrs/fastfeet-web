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
        city: 'Rio do Sul',
        state: 'Santa Catarina',
        status: 'entregue',
      },
      {
        id: 2,
        recipient: 'Wolfgang Amadeus',
        deliveryman: 'Gaspar Antunes',
        avatar_url:
          'https://images.unsplash.com/photo-1539236754983-085fe1449ba4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80',
        city: 'Rio do Sul',
        state: 'Santa Catarina',
        status: 'pendente',
      },
      {
        id: 3,
        recipient: 'Johann Sebastian Bach',
        deliveryman: 'Dai Jiang',
        avatar_url: null,
        city: 'Rio do Sul',
        state: 'Santa Catarina',
        status: 'retirada',
      },
      {
        id: 4,
        recipient: 'Frédéric Chopin',
        deliveryman: 'Tom Hanson',
        avatar_url:
          'https://images.unsplash.com/photo-1615370183912-4e68cb0ac846?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        city: 'Rio do Sul',
        state: 'Santa Catarina',
        status: 'cancelada',
      },
    ]);

    this.get('/deliverers', async () => [
      {
        id: 1,
        avatar_url:
          'https://images.unsplash.com/photo-1539236754983-085fe1449ba4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80',
        name: 'John Doe',
        email: 'email@example.com',
      },
      {
        id: 2,
        avatar_url: null,
        name: 'Gaspar Antunes',
        email: 'email@example.com',
      },
      {
        id: 3,
        avatar_url:
          'https://images.unsplash.com/photo-1539236754983-085fe1449ba4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80',
        name: 'Dai Jiang',
        email: 'email@example.com',
      },
      {
        id: 4,
        avatar_url: null,
        name: 'Tom Hanson',
        email: 'email@example.com',
      },
    ]);

    this.get('/issues', async () => [
      {
        id: 1,
        issue: 'Destinatário ausente',
      },
      {
        id: 2,
        issue: 'Carga roubada',
      },
      {
        id: 3,
        issue: 'Infelizmente sofri um acidente que danificou a encomenda',
      },
      {
        id: 4,
        issue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus…',
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
