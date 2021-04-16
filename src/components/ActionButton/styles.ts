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
  border-radius: 4px;
  background: var(--color-white);
  box-shadow: 0px 0px 2px var(--color-shadow);

  position: absolute;
  right: 0;
  z-index: 10;

  ul {
    list-style: none;

    li {
      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
        width: 100%;

        p {
          margin-left: 8px;
          color: var(--color-gray-400);
        }
      }

      &:first-child:hover {
        border-radius: 4px 4px 0 0;
      }

      &:last-child:hover {
        border-radius: 0 0 4px 4px;
      }

      &:hover {
        background: #faf5ff;
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
      background: var(--color-white);
      position: absolute;
      right: 12px;
      bottom: -15px;
      transform: rotate(45deg);
      box-shadow: 0px 0px 2px var(--color-shadow);
    }
  }
`;
