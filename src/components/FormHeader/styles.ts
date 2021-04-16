import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    margin: 32px 0;
  }

  span {
    margin-left: auto;
    display: flex;

    button {
      padding: 8px 16px;
      height: 40px;

      & + button {
        margin-left: 16px;
      }
    }
  }
`;
