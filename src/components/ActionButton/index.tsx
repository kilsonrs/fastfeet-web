import React, { useCallback, useState } from 'react';
import { MdDelete, MdEdit, MdMoreHoriz, MdVisibility } from 'react-icons/md';

import { Container, Content } from './styles';

interface ActionButtonProps {
  name?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Container>
      <button type="button" onClick={toggleOpen}>
        <MdMoreHoriz size={24} color="#999" />
      </button>
      <Content isOpen={isOpen} onMouseLeave={toggleOpen}>
        <ul>
          <li>
            <button type="button">
              <MdVisibility size={24} color="#8E5BE8" />
              <p>Visualizar</p>
            </button>
          </li>
          <li>
            <button type="button">
              <MdEdit size={24} color="#4D85EE" />
              <p>Editar</p>
            </button>
          </li>
          <li>
            <button type="button">
              <MdDelete size={24} color="#DE3B3B" />
              <p>Excluir</p>
            </button>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default ActionButton;
