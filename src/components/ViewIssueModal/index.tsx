import React from 'react';

import Modal from '../Modal';

import { Container, Content } from './styles';

interface IIssue {
  id: string | number;
  description: string;
}

interface ModalProps {
  isOpen: boolean;
  issue: IIssue;
  setIsOpen(): void;
}

const ViewIssueModal: React.FC<ModalProps> = ({ isOpen, setIsOpen, issue }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <strong>VISUALIZAR PROBLEMA</strong>
        <Content>{issue.description}</Content>
      </Container>
    </Modal>
  );
};

export default ViewIssueModal;
