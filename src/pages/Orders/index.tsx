import React, { useCallback, useEffect, useState } from 'react';

import TableHeader from '../../components/TableHeader';
import Table from '../../components/Table';

import { Container, Avatar } from './styles';
import Badge from '../../components/Badge';
import api from '../../services/api';
import ActionButton from '../../components/ActionButton';
import ModalViewOrder from '../../components/ModalViewOrder';

interface IOrders {
  id: string | number;
  recipient: string;
  deliveryman: string;
  avatar_url: string;
  street: string;
  number: string | number;
  neighborhood: string;
  city: string;
  state: string;
  uf: string;
  zip_code: string;
  picked_date: string | null;
  delivered_date: string | null;
  status: string;
  signature_url: string | null;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<IOrders[] | null>(null);
  const [orderViewing, setOrderViewing] = useState<IOrders>();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    api.get('/orders').then(response => {
      setOrders(response.data);
    });
  }, []);

  const handleSubmit = useCallback(data => {
    setOrders(data);
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleOrderView = useCallback(
    order => {
      setOrderViewing(order);
      toggleModal();
    },
    [toggleModal],
  );

  const handleOrderEdit = useCallback(order => {
    setOrderViewing(order);
  }, []);

  const handleOrderDelete = useCallback(id => {
    console.log(id);
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
    <>
      {orderViewing && (
        <ModalViewOrder
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          order={orderViewing}
        />
      )}
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
                  <p>#{order.id}</p>
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
                  <ActionButton
                    handleView={() => handleOrderView(order)}
                    handleEdit={() => handleOrderEdit(order)}
                    handleDelete={() => handleOrderDelete(order.id)}
                  />
                </td>
              </tr>
            ))}
          </Table>
        ) : (
          <h1>Carregando...</h1>
        )}
      </Container>
    </>
  );
};

export default Orders;
