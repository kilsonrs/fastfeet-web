import React, { useEffect, useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
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

  const columns = ['Encomenda', 'Problema'];

  return (
    <Container>
      <h1>Problemas</h1>
      {issues ? (
        <Table columns={columns}>
          {issues.map(row => (
            <tr key={row.id}>
              <td>
                <p>#{row.id}</p>
              </td>
              <td>
                <p>{row.issue}</p>
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

export default Issues;
