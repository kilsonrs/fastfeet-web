import styled from 'styled-components';

interface ContentProps {
  isOpen: boolean;
}

export const Container = styled.div`
  position: relative;
  button {
    border: 0;
    width: 45px;
    background: transparent;
  }
`;

export const Content = styled.div<ContentProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  width: 150px;
  padding: 12px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 2px #00000026;

  position: absolute;
  right: 0;

  z-index: 10;
  ul {
    list-style: none;

    li {
      cursor: pointer;

      & + li {
        margin-top: 20px;
      }

      button {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        p {
          margin-left: 8px;
          color: #999999;
        }
      }
    }
  }
  div.arrow {
    content: ' ';
    height: 25px;
    width: 30px;
    position: absolute;
    bottom: 100%;
    right: 0;
    overflow: hidden;

    &::after {
      content: ' ';
      height: 20px;
      width: 20px;
      background: white;
      position: absolute;
      right: 12px;
      bottom: -15px;
      transform: rotate(45deg);
      box-shadow: 0px 0px 2px #00000026;
    }
  }
`;
