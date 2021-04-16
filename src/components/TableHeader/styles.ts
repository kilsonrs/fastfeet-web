import styled from 'styled-components';

export const Container = styled.div`
  nav {
    display: flex;

    form {
      width: 237px;

      input {
        font-size: 14px;

        &::placeholder {
          color: var(--color-gray-400);
        }
      }
    }

    button {
      width: 142px;
      height: 40px;
      margin-left: auto;
    }
  }
`;
