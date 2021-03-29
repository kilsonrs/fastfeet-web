import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 27px;

  h1 {
    font-weight: 24px;
  }

  span {
    margin-left: auto;
    display: flex;

    button {
      padding: 8px 16px;

      & + button {
        margin-left: 16px;
      }
    }
  }
`;
