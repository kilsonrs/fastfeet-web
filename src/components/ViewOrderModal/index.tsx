import React, { useMemo } from 'react';
import Modal from '../Modal';

import { Address, Status, Signature, Container, OrderInfo } from './styles';

interface IOrders {
  id: string | number;
  recipient: string;
  deliveryman: string;
  avatar_url: string;
  street: string;
  number: string | number;
  neighborhood: string;
  city: string;
  state: string;
  uf: string;
  zip_code: string;
  picked_date: string | null;
  delivered_date: string | null;
  status: string;
  package_name: string;
  signature_url: string | null;
}

interface ModalProps {
  isOpen: boolean;
  order: IOrders;
  setIsOpen(): void;
}

const ViewOrderModal: React.FC<ModalProps> = ({ isOpen, setIsOpen, order }) => {
  const parsedOrder = useMemo(() => {
    return {
      ...order,
      picked_date: order.picked_date ? '20/03/2021' : '',
      delivered_date: order.delivered_date ? '20/03/2021' : '',
    };
  }, [order]);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <OrderInfo>
          <strong>Informações da encomenda</strong>
          <p>{parsedOrder.package_name}</p>
        </OrderInfo>
        <Address>
          <strong>{parsedOrder.recipient}</strong>
          <p>{`${parsedOrder.street}, ${parsedOrder.number}`}</p>
          <p>{`${parsedOrder.city} - ${parsedOrder.uf}`}</p>
          <p>{parsedOrder.zip_code}</p>
        </Address>
        <Status>
          <small>Datas</small>
          <span>
            <strong>Retirada:</strong>
            <p>{parsedOrder.picked_date}</p>
          </span>
          <span>
            <strong>Entrega:</strong>
            <p>{parsedOrder.delivered_date}</p>
          </span>
        </Status>
        {parsedOrder.signature_url && (
          <Signature>
            <strong>Assinatura do destinatário</strong>
            <img src={parsedOrder.signature_url} alt="Assinatura" />
          </Signature>
        )}
      </Container>
    </Modal>
  );
};

export default ViewOrderModal;
