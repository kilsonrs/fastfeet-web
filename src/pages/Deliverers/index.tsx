import React, { useCallback, useEffect, useState } from 'react';
import ActionButton from '../../components/ActionButton';
import Table from '../../components/Table';
import TableHeader from '../../components/TableHeader';
import api from '../../services/api';

import { Container, Avatar } from './styles';

interface IDeliverers {
  id: string | number;
  avatar_url: string;
  name: string;
  email: string;
}

const Deliverers: React.FC = () => {
  const [deliverers, setDeliverers] = useState<IDeliverers[] | null>(null);
  useEffect(() => {
    api.get('/deliverers').then(response => {
      setDeliverers(response.data);
    });
  }, []);

  const handleSubmit = useCallback(data => {
    setDeliverers(data);
  }, []);

  const handleDeliverymanEdit = useCallback(deliveryman => {
    console.log(deliveryman);
  }, []);

  const handleDeliverymanDelete = useCallback(id => {
    console.log(id);
  }, []);

  const columns = ['ID', 'Foto', 'Nome', 'Email'];

  return (
    <Container>
      <h1>Entregadores</h1>
      <TableHeader
        handleSubmit={handleSubmit}
        placeholder="Buscar por entregadores"
      />
      {deliverers ? (
        <Table columns={columns}>
          {deliverers.map(deliveryman => (
            <tr key={deliveryman.id}>
              <td>
                <p>#{deliveryman.id}</p>
              </td>
              <td>
                <Avatar>
                  <img
                    src={
                      deliveryman.avatar_url ||
                      `https://ui-avatars.com/api/?background=random&name=${deliveryman.name}`
                    }
                    alt="Avatar"
                  />
                </Avatar>
              </td>
              <td>
                <p>{deliveryman.name}</p>
              </td>
              <td>
                <p>{deliveryman.email}</p>
              </td>
              <td>
                <ActionButton
                  handleEdit={() => handleDeliverymanEdit(deliveryman)}
                  handleDelete={() => handleDeliverymanDelete(deliveryman.id)}
                />
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

export default Deliverers;
