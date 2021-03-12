import React, { useCallback, useEffect, useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import TableHeader from '../../components/TableHeader';
import Table from '../../components/Table';

import { Container, Avatar } from './styles';
import Badge from '../../components/Badge';
import api from '../../services/api';

interface IOrders {
  id: string | number;
  recipient: string;
  deliveryman: string;
  avatar_url: string;
  city: string;
  state: string;
  status: string;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<IOrders[] | null>(null);

  useEffect(() => {
    api.get('/orders').then(response => {
      setOrders(response.data);
    });
  }, []);

  const handleSubmit = useCallback(data => {
    setOrders(data);
  }, []);

  const columns = [
    'ID',
    'Destinatário',
    'Entregador',
    'Cidade',
    'Estado',
    'Status',
  ];

  return (
    <Container>
      <h1>Gerenciando encomendas</h1>
      <TableHeader
        handleSubmit={handleSubmit}
        placeholder="Buscar por encomendas"
      />
      {orders ? (
        <Table columns={columns}>
          {orders.map(order => (
            <tr key={order.id}>
              <td>
                <p>{order.id}</p>
              </td>
              <td>
                <p>{order.recipient}</p>
              </td>
              <td>
                <span>
                  <Avatar>
                    <img
                      src={`https://ui-avatars.com/api/?background=random&name=${order.deliveryman}`}
                      alt="Avatar"
                    />
                  </Avatar>
                  <p>{order.deliveryman}</p>
                </span>
              </td>
              <td>
                <p>{order.city}</p>
              </td>
              <td>
                <p>{order.state}</p>
              </td>
              <td>
                <Badge status={order.status} />
              </td>
              <td>
                <MdMoreHoriz size={24} color="#999" />
              </td>
            </tr>
          ))}
        </Table>
      ) : (
        <h1>Carregando...</h1>
      )}
    </Container>
  );
};

export default Orders;
