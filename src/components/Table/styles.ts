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
      background: #fff;
      border-radius: 4px;
      height: 64px;
      padding: 0 16px;
      color: #666666;
      span {
        display: flex;
        align-items: center;
      }
    }
  }
`;
