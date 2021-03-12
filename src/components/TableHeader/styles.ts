import styled from 'styled-components';

export const Container = styled.div`
  nav {
    display: flex;

    form {
      width: 237px;

      input {
        font-size: 14px;

        &::placeholder {
          color: #999999;
        }
      }
    }

    button {
      width: 142px;
      height: 36px;
      margin-left: auto;
    }
  }
`;
