/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createServer, Model } from 'miragejs';
import { parseString } from '../utils/parseString';
import seeds from './seeds';

export function makeServer() {
  return createServer({
    models: {
      orders: Model,
      deliverers: Model,
      issues: Model,
      recipients: Model,
    },
    seeds(server) {
      server.db.loadData(seeds);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 1000;
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

      this.get('/deliverers', async (_, request) => {
        const { deliverers } = this.schema.db;

        if (request.queryParams.search) {
          const { search } = request.queryParams;
          return this.db.deliverers.where(
            (deliveryman: { name: string; email: string }) =>
              parseString(deliveryman.name).includes(parseString(search)) ||
              parseString(deliveryman.email).includes(parseString(search)),
          );
        }
        return deliverers;
      });

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

      this.delete('/issues/:id', async (_, request) => {
        const { params } = request;
        const issue = this.schema.findBy('issues', {
          id: params.id,
        });
        issue?.destroy();
      });

      this.get('/recipients', async (_, request) => {
        const { recipients } = this.schema.db;

        if (request.queryParams.search) {
          const { search } = request.queryParams;
          return this.db.recipients.where(
            (recipient: { name: string; full_address: string }) =>
              parseString(recipient.name).includes(parseString(search)) ||
              parseString(recipient.full_address).includes(parseString(search)),
          );
        }
        return recipients;
      });

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
