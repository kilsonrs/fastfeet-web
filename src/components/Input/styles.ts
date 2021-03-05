import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocus: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 12px 15px;

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
    props.isErrored &&
    css`
      border-color: #de3b3b;
    `}

  input {
    border: 0;
    color: #999999;
    height: 24px;
    width: 100%;
  }
`;

export const Error = styled(Tooltip)``;
