import styled from 'styled-components';

interface StyledContainerProps {
  hoverIndex: number | null;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1em;
  width: 800px;
  height: 500px;
  transition: all 400ms ease-in-out;

  &:hover > div {
    filter: grayscale(100%) opacity(0.24);
  }

  & > div:hover {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.1); /* Suavemente aumenta o tamanho */
  }

  ${({ hoverIndex }) =>
    hoverIndex !== null &&
    `
    grid-template-columns: ${
      hoverIndex === 0
        ? '3fr 1fr 1fr 1fr 1fr'
        : hoverIndex === 1
        ? '1fr 3fr 1fr 1fr 1fr'
        : hoverIndex === 2
        ? '1fr 1fr 3fr 1fr 1fr'
        : hoverIndex === 3
        ? '1fr 1fr 1fr 3fr 1fr'
        : '1fr 1fr 1fr 1fr 3fr'
    };
  `}
`;
