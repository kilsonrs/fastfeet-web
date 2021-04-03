/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createServer, Model } from 'miragejs';

interface OrderProps {
  recipient: string;
  deliveryman: string;
  avatar_url: null;
  street: string;
  number: 1729;
  neighborhood: string;
  city: string;
  state: string;
  uf: string;
  zip_code: string;
  status: string;
  picked_date: string | null;
  delivered_date: string | null;
  signature_url: string | null;
}
export function makeServer() {
  return createServer({
    models: {
      orders: Model,
      deliverers: Model,
      issues: Model,
      recipients: Model,
    },
    seeds(server) {
      server.db.loadData({
        orders: [
          {
            id: 1,
            recipient: 'Ludwig van Beethoven Recipient',
            deliveryman: 'John Doe Deliveyman',
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
            recipient: 'Wolfgang Amadeus Recipient',
            deliveryman: 'Gaspar Antunes Deliveyman',
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
            recipient: 'Johann Sebastian Bach Recipient',
            deliveryman: 'Dai Jiang Deliveyman',
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
            recipient: 'Frédéric Chopin Recipient',
            deliveryman: 'Tom Hanson Deliveyman',
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
        ],
        deliverers: [
          {
            id: 1,
            avatar_url: null,
            name: 'John Doe Deliveryman',
            email: 'john@doe.com',
          },
          {
            id: 2,
            avatar_url: null,
            name: 'Gaspar Antunes Deliveryman',
            email: 'gaspar@antunes.com',
          },
          {
            id: 3,
            avatar_url: null,
            name: 'Dai Jiang Deliveryman',
            email: 'dai@jiang.com',
          },
          {
            id: 4,
            avatar_url: null,
            name: 'Tom Hanson Deliveryman',
            email: 'tom@hanson.com',
          },
        ],
        issues: [
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
            description:
              'Infelizmente sofri um acidente que danificou a encomenda',
          },
          {
            id: 4,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus. Vivamus dapibus nisi augue, vitae ultrices ligula elementum at. Proin ut metus in mi tincidunt vestibulum a a felis. Aenean dictum libero eu urna tristique vestibulum. Fusce feugiat justo et augue facilisis, sit amet ornare eros consequat. Suspendisse semper risus feugiat nisl commodo, sed mollis neque auctor. Nullam eu fringilla lectus. Phasellus sed sapien sed turpis imperdiet maximus. Aenean ante nulla, bibendum non facilisis at, facilisis eget ex. In ut quam et tellus aliquet tincidunt.',
          },
        ],
        recipients: [
          {
            id: 1,
            name: 'John Doe Recipient',
            full_address: 'Rua Beethoven, 1729, Diadema - São Paulo',
            street: 'Rua Beethoven',
            number: 1729,
            neighborhood: 'Diadema',
            city: 'São Paulo',
            state: 'São Paulo',
            uf: 'SP',
            zip_code: '00960-580',
          },
          {
            id: 2,
            name: 'Gaspar Antunes Recipient',
            full_address: 'Rua Beethoven, 1729, Diadema - São Paulo',
            street: 'Rua Beethoven',
            number: 1729,
            neighborhood: 'Diadema',
            city: 'São Paulo',
            state: 'São Paulo',
            uf: 'SP',
            zip_code: '00960-580',
          },
          {
            id: 3,
            name: 'Dai Jiang Recipient',
            full_address: 'Rua Beethoven, 1729, Diadema - São Paulo',
            street: 'Rua Beethoven',
            number: 1729,
            neighborhood: 'Diadema',
            city: 'São Paulo',
            state: 'São Paulo',
            uf: 'SP',
            zip_code: '00960-580',
          },
          {
            id: 4,
            name: 'Tom Hanson Recipient',
            full_address: 'Rua Beethoven, 1729, Diadema - São Paulo',
            street: 'Rua Beethoven',
            number: 1729,
            neighborhood: 'Diadema',
            city: 'São Paulo',
            state: 'São Paulo',
            uf: 'SP',
            zip_code: '00960-580',
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';

      this.post('/user-sessions', async () => {
        return {
          user: {
            id: 'user_id',
            name: 'admin_user Recipient',
            email: 'admin@fastfeet.com.br',
            is_deliveryman: false,
          },
          token: 'any_token',
        };
      });

      this.get('/orders');

      this.post('/orders', async (_, request) => {
        const data = JSON.parse(request.requestBody);

        const { recipient, deliveryman, product } = data;

        const recipientData = this.schema.findBy('recipients', {
          id: recipient,
        });
        const deliverymanData = this.schema.findBy('deliverers', {
          id: deliveryman,
        });

        if (recipientData?.attrs && deliverymanData?.attrs) {
          const newOrder = {
            recipient: recipientData?.attrs.name,
            deliveryman: deliverymanData?.attrs.name,
            avatar_url: deliverymanData?.attrs.avatar_url,
            street: recipientData?.attrs.street,
            number: recipientData?.attrs.number,
            neighborhood: recipientData?.attrs.neighborhood,
            city: recipientData?.attrs.city,
            state: recipientData?.attrs.state,
            uf: recipientData?.attrs.uf,
            zip_code: recipientData?.attrs.zip_code,
            status: 'pendente',
            picked_date: null,
            delivered_date: null,
            signature_url: null,
            product,
          } as OrderProps;

          return this.schema.db.orders.insert(newOrder);
        }
        return null;
      });

      this.get('/deliverers');

      this.get('/issues');

      this.get('/recipients');
    },
  });
}
