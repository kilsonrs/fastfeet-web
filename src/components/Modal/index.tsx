import React from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen(): void;
}

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '25px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0, 0.8)',
  },
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setIsOpen}
      style={modalStyle}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
