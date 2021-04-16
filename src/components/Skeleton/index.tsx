import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    var(--color-white) 0%,
    var(--color-background) 50%,
    var(--color-white) 100%
  );
  background-size: 400% 400%;
  animation: shimer 1s ease-in-out infinite;

  @keyframes shimer {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: -135% 0%;
    }
  }
`;
