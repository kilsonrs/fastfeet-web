import React, { useCallback, useEffect, useState } from 'react';
import ActionButton from '../../components/ActionButton';
import Table from '../../components/Table';
import api from '../../services/api';

import { Container } from './styles';

interface IIssues {
  id: string | number;
  issue: string;
}

const Issues: React.FC = () => {
  const [issues, setIssues] = useState<IIssues[] | null>(null);

  useEffect(() => {
    api.get('/issues').then(response => setIssues(response.data));
  }, []);

  const handleIssueView = useCallback(issue => {
    console.log(issue);
  }, []);

  const handleIssueDelete = useCallback(id => {
    console.log(id);
  }, []);

  const columns = ['Encomenda', 'Problema'];

  return (
    <Container>
      <h1>Problemas</h1>
      {issues ? (
        <Table columns={columns}>
          {issues.map(order => (
            <tr key={order.id}>
              <td>
                <p>#{order.id}</p>
              </td>
              <td>
                <p>{order.issue}</p>
              </td>
              <td>
                <ActionButton
                  handleView={() => handleIssueView(order)}
                  handleDelete={() => handleIssueDelete(order.id)}
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

export default Issues;
