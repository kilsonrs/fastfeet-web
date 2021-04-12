/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createServer, Model } from 'miragejs';
import { parseString } from './utils/parseString';

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
            package_name:
              'Apple MacBook Air 13.3", Chip M1, 8GB RAM, 256GB SSD - Space Gray',
            picked_date: '2021-03-16T18:29:50.132Z',
            delivered_date: '2021-03-16T18:29:50.132Z',
            signature_url:
              'https://res.cloudinary.com/mykloud/image/upload/v1617913434/fastfeet/signature_uspp5c.png',
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
            package_name: 'Apple USB-C DIGITAL AV MULTIPORT ADAPTER',
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
            package_name:
              'iPad Air 10,9" 4ª geração Wi-Fi 64GB - Cinza-espacial',
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
            package_name:
              'iPhone 12 Apple (128GB) Preto Tela 6,1" 5G Câmera 12MP + 12MP iOS',
            picked_date: '2021-03-16T18:29:50.132Z',
            delivered_date: null,
            signature_url: null,
          },
        ],
        deliverers: [
          {
            id: 1,
            avatar_url: null,
            name: 'John Doe',
            email: 'john@mail.com',
          },
          {
            id: 2,
            avatar_url: null,
            name: 'Gaspar Antunes',
            email: 'gaspar@mail.com',
          },
          {
            id: 3,
            avatar_url: null,
            name: 'Dai Jiang',
            email: 'daijiang@mail.com',
          },
          {
            id: 4,
            avatar_url: null,
            name: 'Tom Hanson',
            email: 'tomhanson@mail.com',
          },
          {
            id: 5,
            avatar_url: null,
            name: 'Marc Franklin',
            email: 'marcfranklin@mail.com',
          },
          {
            id: 6,
            avatar_url: null,
            name: 'Rosetta Castro',
            email: 'rosettacastro@mail.com',
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
            name: 'Ludwig van Beethoven',
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
            name: 'Wolfgang Amadeus',
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
            name: 'Johann Sebastian Bach',
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
            name: 'Frédéric Chopin',
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
            id: 5,
            name: 'Piotr Ilitch Tchaikovski',
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
            id: 6,
            name: 'Antonio Vivaldi',
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
            name: 'admin_user',
            email: 'admin@fastfeet.com',
            is_deliveryman: false,
          },
          token: 'any_token',
        };
      });

      this.get('/orders', async (_, request) => {
        const { orders } = this.schema.db;

        if (request.queryParams.search) {
          const { search } = request.queryParams;
          return this.db.orders.where(
            (order: { recipient: string; deliveryman: string }) =>
              parseString(order.recipient).includes(parseString(search)) ||
              parseString(order.deliveryman).includes(parseString(search)),
          );
        }
        return orders;
      });

      this.post('/orders', async (_, request) => {
        const data = JSON.parse(request.requestBody);

        const { recipient, deliveryman, package_name } = data;

        const recipientData = this.schema.findBy('recipients', {
          id: recipient,
        })?.attrs;

        const deliverymanData = this.schema.findBy('deliverers', {
          id: deliveryman,
        })?.attrs;

        if (recipientData && deliverymanData) {
          const { name: recipientName } = recipientData;
          const { name: deliverymanName } = deliverymanData;
          delete recipientData.id;
          delete deliverymanData.id;

          return this.schema.db.orders.insert({
            ...recipientData,
            ...deliverymanData,
            recipient: recipientName,
            deliveryman: deliverymanName,
            package_name,
            status: 'pendente',
            picked_date: null,
            delivered_date: null,
            signature_url: null,
          });
        }
        return null;
      });

      this.put('/orders/:id', async (_, request) => {
        const { params, requestBody } = request;
        const data = JSON.parse(requestBody);

        const { recipient, deliveryman, package_name } = data;

        const order = this.schema.findBy('orders', {
          id: params.id,
        });

        const recipientData = this.schema.findBy('recipients', {
          id: recipient,
        })?.attrs;

        const deliverymanData = this.schema.findBy('deliverers', {
          id: deliveryman,
        })?.attrs;

        if (recipientData && deliverymanData) {
          const { name: recipientName } = recipientData;
          const { name: deliverymanName } = deliverymanData;

          order?.update({
            ...recipientData,
            ...deliverymanData,
            id: params.id,
            recipient: recipientName,
            deliveryman: deliverymanName,
            package_name,
          });
        }
      });

      this.delete('/orders/:id', async (_, request) => {
        const { params } = request;
        const order = this.schema.findBy('orders', {
          id: params.id,
        });
        order?.destroy();
      });

      this.get('/deliverers');

      this.post('/deliverers', async (_, request) => {
        const data = JSON.parse(request.requestBody);
        return this.schema.db.deliverers.insert(data);
      });

      this.put('/deliverers/:id', async (_, request) => {
        const { params, requestBody } = request;
        const deliverymanData = JSON.parse(requestBody);

        const deliveryman = this.schema.findBy('deliverers', {
          id: params.id,
        });

        deliveryman?.update(deliverymanData);
      });

      this.delete('/deliverers/:id', async (_, request) => {
        const { params } = request;
        const deliveryman = this.schema.findBy('deliverers', {
          id: params.id,
        });
        deliveryman?.destroy();
      });

      this.get('/issues');

      this.get('/recipients');

      this.post('/recipients', async (_, request) => {
        const recipientData = JSON.parse(request.requestBody);

        if (recipientData) {
          const { street, number, neighborhood, city } = recipientData;
          const full_address = `${street}, ${number}, ${neighborhood} - ${city}`;

          this.schema.db.recipients.insert({
            ...recipientData,
            full_address,
          });
        }
      });

      this.put('/recipients/:id', async (_, request) => {
        const { params, requestBody } = request;
        const recipientData = JSON.parse(requestBody);

        const { street, number, neighborhood, city } = recipientData;
        const full_address = `${street}, ${number}, ${neighborhood} - ${city}`;

        const recipient = this.schema.findBy('recipients', {
          id: params.id,
        });

        recipient?.update({
          ...recipientData,
          full_address,
        });
      });

      this.delete('/recipients/:id', async (_, request) => {
        const recipient = this.schema.findBy('recipients', {
          id: request.params.id,
        });
        recipient?.destroy();
      });
    },
  });
}
