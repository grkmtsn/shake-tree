import React from 'react';
import { Apple } from './';

const Tree = ({ isShaking, apples, handleAnimationEnd }) => {
  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={`tree ${isShaking ? 'shake' : ''}`}
    >
      {apples.map(apple => (
        <Apple
          bottom={apple.bottom}
          left={apple.left}
          transition={apple.transition}
        />
      ))}
    </div>
  );
};

export default Tree;
