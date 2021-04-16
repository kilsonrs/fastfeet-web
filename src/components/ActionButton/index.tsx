import React, { useCallback, useState } from 'react';
import { MdDelete, MdEdit, MdMoreHoriz, MdVisibility } from 'react-icons/md';

import { Container, Content } from './styles';

interface ActionButtonProps {
  handleView?(): void;
  handleEdit?(): void;
  handleDelete?(): void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  handleView,
  handleEdit,
  handleDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleViewButton = useCallback(() => {
    setIsOpen(false);
    if (handleView) {
      handleView();
    }
  }, [handleView]);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Container onMouseLeave={handleMouseLeave}>
      <button type="button" onClick={toggleOpen}>
        <MdMoreHoriz size={24} color="#999" />
      </button>
      <Content isOpen={isOpen}>
        <ul>
          {handleView && (
            <li>
              <button type="button" onClick={handleViewButton}>
                <MdVisibility size={24} color="#8E5BE8" />
                <p>Visualizar</p>
              </button>
            </li>
          )}
          {handleEdit && (
            <li>
              <button type="button" onClick={handleEdit}>
                <MdEdit size={24} color="#4D85EE" />
                <p>Editar</p>
              </button>
            </li>
          )}
          {handleDelete && (
            <li>
              <button type="button" onClick={handleDelete}>
                <MdDelete size={24} color="#DE3B3B" />
                <p>Excluir</p>
              </button>
            </li>
          )}
        </ul>
        <div className="arrow" />
      </Content>
    </Container>
  );
};

export default ActionButton;
