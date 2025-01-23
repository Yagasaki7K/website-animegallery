import React, { useState } from 'react';
import { StyledContainer } from './StyledContainer';
import Box from './Box';

const Container: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const boxes = [
    { img: 'https://i.postimg.cc/sgBkfbtx/img-1.jpg', text: 'Renji', position: 'left' as const }, // Aumenta para a direita
    { img: 'https://i.postimg.cc/3RZ6bhDS/img-2.jpg', text: 'Sora', position: 'center' as const },
    { img: 'https://i.postimg.cc/DZhHg0m4/img-3.jpg', text: 'Kaito', position: 'center' as const },
    { img: 'https://i.postimg.cc/KjqWx5ft/img-4.jpg', text: 'Tsuki', position: 'center' as const },
    { img: 'https://i.postimg.cc/nrcWyW4H/img-5.jpg', text: 'Mitsui', position: 'right' as const }, // Aumenta para a esquerda
  ];

  return (
    <StyledContainer hoverIndex={hoverIndex}>
      {boxes.map((box, index) => (
        <Box
          key={index}
          img={box.img}
          text={box.text}
          isHovered={hoverIndex === index}
          position={box.position}
          isOdd={index % 2 === 0} // Alterna as posições ímpar/par
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        />
      ))}
    </StyledContainer>
  );
};

export default Container;
