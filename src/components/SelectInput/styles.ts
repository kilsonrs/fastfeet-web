import styled from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: ${props => (props.isErrored ? '0' : '22px')};
`;

export const Error = styled.span`
  display: flex;
  align-items: flex-end;
  margin-top: 4px;

  small {
    font-size: 14px;
    margin-left: 4px;
    color: #de3b3b;
  }
`;
