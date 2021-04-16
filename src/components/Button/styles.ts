import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 4px;
  background: ${({ color }) => color || '#7d40e7'};

  color: var(--color-white);
  font-size: 14px;
  font-weight: 500;

  svg {
    margin-right: 8px;
  }
`;
