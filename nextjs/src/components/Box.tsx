import React from 'react';
import styled from 'styled-components';

interface BoxProps {
  img: string;
  text: string;
  isHovered: boolean;
  position: 'left' | 'center' | 'right'; // Define a direção do aumento
  isOdd: boolean; // Define se a imagem é ímpar ou par
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const StyledBox = styled.div<{ img: string; isHovered: boolean; position: 'left' | 'center' | 'right'; isOdd: boolean }>`
  position: relative;
  background: url(${(props) => props.img}) center center;
  background-size: cover;
  transition: transform 400ms ease-in-out, filter 400ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: ${(props) => (props.isHovered ? 'grayscale(0%) opacity(1)' : 'grayscale(0%) opacity(1)')};
  transform: ${(props) =>
    props.isHovered
      ? props.position === 'left'
        ? 'scale(1.1) translateX(10%)' // Aumenta para a direita
        : props.position === 'right'
        ? 'scale(1.1) translateX(-10%)' // Aumenta para a esquerda
        : 'scale(1.1)' // Aumenta a partir do centro
      : props.isOdd
      ? 'translateY(-16px)' // Ímpares começam mais altas
      : 'translateY(16px)'}; // Pares começam mais baixas

  &::after {
    content: attr(data-text); /* Usa o atributo data-text para exibir o texto */
    position: absolute;
    bottom: 20px;
    background: #000;
    color: #fff;
    padding: 10px 10px 10px 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    transform: translateY(60px);
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

  &:hover::after {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 400ms;
  }
`;

const Box: React.FC<BoxProps> = ({ img, text, isHovered, position, isOdd, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledBox
      img={img}
      isHovered={isHovered}
      position={position}
      isOdd={isOdd}
      data-text={text}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default Box;
