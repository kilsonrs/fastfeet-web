import styled from 'styled-components';

export const Container = styled.div`
  table {
    width: 100%;
    margin-top: 24px;
    border-collapse: collapse;

    thead {
      tr {
        height: 40px;
        border-bottom: 20px solid #f5f5f5;
      }
    }

    tbody {
      tr {
        background: #fff;
        height: 80px;
        border-bottom: 20px solid #f5f5f5;
      }

      td {
        align-items: center;
        color: #666666;

        span {
          display: flex;
          align-items: center;

          p {
            margin-left: 8px;
          }
        }
      }
    }

    td:first-child {
      p {
        margin-left: 24px;
      }
      strong {
        margin-left: 24px;
      }
    }
  }
`;
