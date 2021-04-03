import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    margin: 34px 0;
  }

  span {
    margin-left: auto;
    display: flex;

    button {
      padding: 8px 16px;
      height: 36px;

      & + button {
        margin-left: 16px;
      }
    }
  }
`;
