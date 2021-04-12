import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  background: #ffffff;
  border: 1px solid #dddddd;

  img {
    width: 135px;
    margin: 0 25px;
  }

  nav ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 20px;
      font-weight: 600;
      cursor: pointer;
      position: relative;

      a {
        font-size: 15px;
        text-decoration: none;
        color: #999999;
      }
    }

    .active {
      a {
        color: #8e5be8;
      }
    }

    .active::after {
      content: '';
      height: 3px;
      width: 100%;
      border-radius: 3px 3px 0 0;
      position: absolute;
      top: 37px;
      left: 0;
      background: #8e5be8;
    }
  }

  svg {
    margin-left: auto;
    margin-right: 25px;
    cursor: pointer;
  }
`;
