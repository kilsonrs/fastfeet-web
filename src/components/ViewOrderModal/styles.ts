import styled from 'styled-components';

export const Container = styled.div`
  width: 520px;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--color-gray-500);
    margin-bottom: 16px;
  }

  p {
    color: var(--color-gray-500);
    margin-top: 16px;
  }
`;

export const Address = styled.section`
  margin: 16px 0 8px;

  strong {
    display: block;
    color: var(--color-gray-500);
    margin-bottom: 8px;
  }

  p {
    margin-top: 4px;
    color: var(--color-gray-500);
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;

  padding: 8px 0;
  border-top: 1px solid var(--color-gray-100);

  small {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
    color: var(--color-gray-600);
  }

  span {
    display: flex;
    margin-top: 4px;

    strong {
      margin-right: 4px;
      color: var(--color-gray-500);
    }
    p {
      color: var(--color-gray-500);
    }
  }
`;

export const Signature = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  border-top: 1px solid var(--color-gray-100);

  img {
    margin-top: 24px;
    max-width: 400px;
    max-height: 200px;
    align-self: center;
  }
`;
