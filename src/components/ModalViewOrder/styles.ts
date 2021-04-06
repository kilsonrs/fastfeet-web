import styled from 'styled-components';

export const Container = styled.div`
  width: 520px;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #666;
    margin-bottom: 16px;
  }

  p {
    color: #666;
    margin-top: 16px;
  }
`;

export const Address = styled.section`
  margin: 16px 0 8px;

  strong {
    display: block;
    color: #666666;
    margin-bottom: 8px;
  }

  p {
    margin-top: 4px;
    color: #666666;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;

  padding: 8px 0;
  border-top: 1px solid #eee;

  small {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #444444;
  }

  span {
    display: flex;
    margin-top: 4px;

    strong {
      margin-right: 4px;
      color: #666666;
    }
    p {
      color: #666666;
    }
  }
`;

export const Signature = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  border-top: 1px solid #eee;

  img {
    margin-top: 24px;
    max-width: 400px;
    max-height: 200px;
    align-self: center;
  }
`;
