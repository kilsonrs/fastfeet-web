import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

  table {
    width: 100%;
    border-spacing: 0 16px;

    th {
      line-height: 16px;
      text-align: left;
      font-weight: 600;
      padding: 0 16px;
    }

    td {
      background: var(--color-white);
      height: 64px;
      padding: 0 16px;
      color: var(--color-gray-500);
      span {
        display: flex;
        align-items: center;
      }
    }

    th:last-of-type,
    td:last-of-type {
      text-align: right;
      border-radius: 0 4px 4px 0;
    }

    td:first-of-type {
      border-radius: 4px 0 0 4px;
    }
  }
`;
