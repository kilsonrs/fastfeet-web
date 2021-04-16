import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import ActionButton from '../../components/ActionButton';
import Table from '../../components/Table';
import TableHeader from '../../components/TableHeader';
import api from '../../services/api';

import { Container } from './styles';

interface IRecipients {
  id: string | number;
  name: string;
  full_address: string;
}

const Recipients: React.FC = () => {
  const [recipients, setRecipients] = useState<IRecipients[] | null>(null);
  const [search, setSearch] = useState();
  const history = useHistory();

  useEffect(() => {
    const loadRecipients = async () => {
      try {
        const response = await api.get('/recipients', {
          params: {
            search,
          },
        });
        if (response.data) {
          setRecipients(response.data);
        }
      } catch (err) {
        toast.error('Erro ao carregar destinatários');
      }
    };
    loadRecipients();
  }, [search]);

  const handleSearchSubmit = useCallback(data => {
    setSearch(data.search);
  }, []);

  const handleRecipientCreate = useCallback(() => {
    history.push('/create-recipient');
  }, [history]);

  const handleRecipientEdit = useCallback(
    recipient => {
      history.push('/edit-recipient', recipient);
    },
    [history],
  );

  const handleRecipientDelete = useCallback(
    id => {
      try {
        if (recipients) {
          api.delete(`/recipients/${id}`);
          setRecipients(recipients?.filter(recipient => recipient.id !== id));
        }
      } catch (err) {
        toast.error('Erro ao excluir destinatário');
      }
    },
    [recipients],
  );

  const columns = ['ID', 'Nome', 'Endereço'];

  return (
    <Container>
      <h1>Destinatários</h1>
      <TableHeader
        onSubmitSearch={handleSearchSubmit}
        onCreateItem={handleRecipientCreate}
        placeholder="Buscar por destinatários"
      />
      {recipients ? (
        <Table columns={columns}>
          {recipients.map(recipient => (
            <tr key={recipient.id}>
              <td>
                <p>#{recipient.id}</p>
              </td>
              <td>
                <p>{recipient.name}</p>
              </td>
              <td>
                <p>{recipient.full_address}</p>
              </td>
              <td>
                <ActionButton
                  handleEdit={() => handleRecipientEdit(recipient)}
                  handleDelete={() => handleRecipientDelete(recipient.id)}
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

export default Recipients;
