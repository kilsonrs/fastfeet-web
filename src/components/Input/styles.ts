import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocus: boolean;
}

export const Container = styled.div``;

export const Content = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-gray-200);
  border-radius: 4px;
  padding: 12px 14px;
  background: var(--color-white);
  height: 40px;

  ${props =>
    props.isFocus &&
    css`
      border-color: var(--color-purple);
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: var(--color-purple);
    `}

  ${props =>
    props.isErrored
      ? css`
          border-color: var(--color-red-500);
        `
      : css`
          margin-bottom: 22px;
        `}

  input {
    border: 0;
    color: var(--color-gray-400);
    height: 24px;
    width: 100%;

    ${props =>
      props.isErrored &&
      css`
        width: 100%;
      `}
  }

  svg {
    margin-right: 8px;
  }
`;

export const Error = styled.span`
  display: flex;
  align-items: flex-end;
  margin-top: 4px;
  small {
    font-size: 14px;
    margin-left: 4px;
    color: var(--color-red-500);
  }
`;
