import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .row-skeleton {
    height: 64px;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 4px;

    &:first-child {
      margin-top: 48px;
    }
  }
`;
