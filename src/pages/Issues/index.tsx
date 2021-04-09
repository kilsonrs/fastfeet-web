import React, { useCallback, useEffect, useState } from 'react';
import ActionButton from '../../components/ActionButton';
import ViewIssueModal from '../../components/ViewIssueModal';
import Table from '../../components/Table';
import api from '../../services/api';

import { Container } from './styles';

interface IIssue {
  id: string | number;
  description: string;
}

const Issues: React.FC = () => {
  const [issues, setIssues] = useState<IIssue[] | null>(null);
  const [issueViewing, setIssueViewing] = useState<IIssue>();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    api.get('/issues').then(response => setIssues(response.data.issues));
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleIssueView = useCallback(
    issue => {
      toggleModal();
      setIssueViewing(issue);
    },
    [toggleModal],
  );

  const handleIssueDelete = useCallback(id => {
    console.log(id);
  }, []);

  const columns = ['Encomenda', 'Problema'];

  return (
    <>
      {issueViewing && (
        <ViewIssueModal
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          issue={issueViewing}
        />
      )}
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
                  <p>{order.description}</p>
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
    </>
  );
};

export default Issues;
