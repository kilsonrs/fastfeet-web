import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #7d40e7;

  form {
    height: 425px;
    width: 360px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #00000033;
    background: #ffffff;

    img {
      max-width: 250px;
      width: 100%;
      margin: 0 auto 40px;
    }

    strong {
      margin-bottom: 9px;
      color: #444444;
    }

    strong:nth-child(4) {
      margin: 15px 0 9px;
    }

    button {
      margin-top: 15px;
    }
  }
`;
