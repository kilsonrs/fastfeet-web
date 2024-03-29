import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ActionButton from '../../components/ActionButton';
import ViewIssueModal from '../../components/ViewIssueModal';
import Table from '../../components/Table';
import api from '../../services/api';

import { Container } from './styles';
import LoadingIssuesTable from '../../components/Shimmer/LoadingIssuesTable';

interface IIssue {
  id: string | number;
  description: string;
}

const Issues: React.FC = () => {
  const [issues, setIssues] = useState<IIssue[] | null>(null);
  const [issueViewing, setIssueViewing] = useState<IIssue>();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    try {
      api.get('/issues').then(response => setIssues(response.data.issues));
    } catch {
      toast.error('Erro ao carregar lista de problemas');
    }
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

  const handleIssueDelete = useCallback(
    id => {
      try {
        if (issues) {
          api.delete(`/issues/${id}`);
          setIssues(issues.filter(issue => issue.id !== id));
        }
      } catch {
        toast.error('Erro ao excluir problema');
      }
    },
    [issues],
  );

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
          <LoadingIssuesTable />
        )}
      </Container>
    </>
  );
};

export default Issues;
