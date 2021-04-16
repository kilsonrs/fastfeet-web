import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    display: flex;
    justify-content: center;
    width: 200px;
    padding: 8px;
    background: var(--color-red-500);
    color: var(--color-white);
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--color-red-500) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
