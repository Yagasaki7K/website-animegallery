import styled, { css } from 'styled-components';

interface StyledContainerProps {
  activeBox: number | null; // Número da box ativa ou null se nenhuma estiver ativa
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1em;
  width: 800px;
  height: 500px;
  transition: all 400ms;

  ${(props) =>
    props.activeBox !== null &&
    css`
      grid-template-columns: ${props.activeBox === 0
        ? '3fr 1fr 1fr 1fr 1fr'
        : props.activeBox === 1
        ? '1fr 3fr 1fr 1fr 1fr'
        : props.activeBox === 2
        ? '1fr 1fr 3fr 1fr 1fr'
        : props.activeBox === 3
        ? '1fr 1fr 1fr 3fr 1fr'
        : '1fr 1fr 1fr 1fr 3fr'};
    `}

  &:hover > div {
    filter: grayscale(100%) opacity(24%);
  }
`;

interface StyledBoxProps {
  isActive: boolean; // Indica se a box está ativa
}

export const StyledBox = styled.div<StyledBoxProps>`
  position: relative;
  background: center center;
  background-size: cover;
  transition: all 400ms;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isActive &&
    css`
      filter: grayscale(0%) opacity(100%);
    `}

  &::after {
    content: attr(data-text);
    position: absolute;
    bottom: 20px;
    background: #000;
    color: #fff;
    padding: 10px 10px 10px 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    transform: translateY(60px);
    opacity: 0;
    transition: all 400ms;
  }

  &:hover::after {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 400ms;
  }
`;
