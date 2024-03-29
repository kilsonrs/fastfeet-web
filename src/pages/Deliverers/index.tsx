import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ActionButton from '../../components/ActionButton';
import LoadingDeliverersTable from '../../components/Shimmer/LoadingDeliverersTable';
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
  const [search, setSearch] = useState();
  const history = useHistory();

  useEffect(() => {
    const loadDeliverers = async () => {
      try {
        const response = await api.get('/deliverers', {
          params: {
            search,
          },
        });
        if (response.data) {
          setDeliverers(response.data);
        }
      } catch (err) {
        toast.error('Erro ao carregar Entregadores');
      }
    };

    loadDeliverers();
  }, [search]);

  const handleSearchSubmit = useCallback(data => {
    setSearch(data.search);
  }, []);

  const handleDeliverymanCreate = useCallback(() => {
    history.push('/create-deliveryman');
  }, [history]);

  const handleDeliverymanEdit = useCallback(
    deliveryman => {
      history.push('/edit-deliveryman', deliveryman);
    },
    [history],
  );

  const handleDeliverymanDelete = useCallback(
    id => {
      try {
        if (deliverers) {
          api.delete(`/deliverers/${id}`);
          setDeliverers(
            deliverers?.filter(deliveryman => deliveryman.id !== id),
          );
        }
      } catch (err) {
        toast.error('Erro ao excluir Entregador');
      }
    },
    [deliverers],
  );

  const columns = ['ID', 'Foto', 'Nome', 'Email'];

  return (
    <Container>
      <h1>Entregadores</h1>
      <TableHeader
        onSubmitSearch={handleSearchSubmit}
        onCreateItem={handleDeliverymanCreate}
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
        <LoadingDeliverersTable />
      )}
    </Container>
  );
};

export default Deliverers;
