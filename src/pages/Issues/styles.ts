import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 24px;
    margin: 32px 0;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 800px;
  }
`;
