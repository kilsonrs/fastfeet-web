import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  background: var(--color-white);
  border: 1px solid var(--color-gray-200);

  img {
    width: 135px;
    margin: 0 25px;
  }

  nav ul {
    display: flex;
    list-style: none;

    li {
      font-weight: 600;
      cursor: pointer;
      position: relative;

      a {
        display: flex;
        align-items: center;
        height: 64px;
        margin: 0 12px;
        font-size: 15px;
        text-decoration: none;
        color: var(--color-gray-400);
      }
    }

    .active {
      a {
        color: var(--color-purple);
      }
    }

    .active::after {
      content: '';
      height: 3px;
      width: 100%;
      border-radius: 3px 3px 0 0;
      position: absolute;
      top: 60px;
      left: 0;
      background: var(--color-purple);
    }
  }

  svg {
    margin-left: auto;
    margin-right: 25px;
    cursor: pointer;
  }
`;
