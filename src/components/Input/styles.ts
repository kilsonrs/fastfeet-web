import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocus: boolean;
}

export const Container = styled.div``;

export const Content = styled.div<ContainerProps>`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 12px 15px;
  background: #fff;
  height: 45px;

  ${props =>
    props.isFocus &&
    css`
      border-color: #7d40e7;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #7d40e7;
    `}

  ${props =>
    props.isErrored
      ? css`
          border-color: #de3b3b;
        `
      : css`
          margin-bottom: 22px;
        `}

  input {
    border: 0;
    color: #999999;
    height: 24px;
    width: 100%;

    ${props =>
      props.isErrored &&
      css`
        width: 100%;
      `}
  }
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
