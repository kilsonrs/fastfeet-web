import styled from 'styled-components';
import { MdFiberManualRecord } from 'react-icons/md';

interface StatusProps {
  status: string;
}

const handleStatusColor = (status: string) => {
  switch (status) {
    case 'entregue':
      return 'color: #2ca42b;background: #dff0df;';
    case 'pendente':
      return 'color: #C1BC35;background: #F0F0DF;';
    case 'retirada':
      return 'color: #4D85EE;background: #BAD2FF;';
    case 'cancelada':
      return 'color: #DE3B3B;background: #FAB0B0;';
    default:
      return 'color: #444; background: #eee;';
  }
};

export const Container = styled.section<StatusProps>`
  display: flex;
  align-items: center;
  padding: 3px 7px;
  width: fit-content;
  border-radius: 16px;

  ${({ status }) => handleStatusColor(status)}

  svg {
    ${({ status }) => handleStatusColor(status)}
  }

  strong {
    font-size: 14px;
    ${({ status }) => handleStatusColor(status)}
    margin: 0 4px;
    text-transform: uppercase;
  }
`;

export const Icon = styled(MdFiberManualRecord).attrs({
  size: 14,
})``;
