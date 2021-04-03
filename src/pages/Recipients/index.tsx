import React, { useCallback, useEffect, useState } from 'react';

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

  useEffect(() => {
    api
      .get('/recipients')
      .then(response => setRecipients(response.data.recipients));
  }, []);

  const handleSearchSubmit = useCallback(data => {
    setRecipients(data);
  }, []);

  const handleRecipientCreate = useCallback(() => {
    console.log('recipient');
  }, []);

  const handleRecipientEdit = useCallback(recipient => {
    console.log(recipient);
  }, []);

  const handleRecipientDelete = useCallback(id => {
    console.log(id);
  }, []);

  const columns = ['ID', 'Nome', 'Endereço'];

  return (
    <Container>
      <h1>Destinatários</h1>
      <TableHeader
        onSubmitSearch={handleSearchSubmit}
        onCreateItem={handleRecipientCreate}
        placeholder="Buscar por entregadores"
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
