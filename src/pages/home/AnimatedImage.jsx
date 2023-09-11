import React, { useEffect, useRef, useState } from 'react';

const AnimatedImage = ({ src, startX, startY }) => {
  const [positionX, setPositionX] = useState(startX);
  const [positionY, setPositionY] = useState(startY);
  const [directionX, setDirectionX] = useState(1);
  const [directionY, setDirectionY] = useState(1);
  const imageRef = useRef(null);

  useEffect(() => {
    const moveImage = () => {
      // Calculate new positions
      const newX = parseFloat(positionX) + directionX * 2;
      const newY = parseFloat(positionY) + directionY * 2;

      // Check if the new positions are within the 2% radius
      const dx = newX - startX;
      const dy = newY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > 2) {
        // Change direction if it exceeds the radius
        setDirectionX(-directionX);
        setDirectionY(-directionY);
      } else {
        // Update positions
        setPositionX(newX + '%');
        setPositionY(newY + '%');
      }
    };

    // Use requestAnimationFrame for smoother animation
    const animate = () => {
      moveImage();
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();
  }, [positionX, positionY, startX, startY, directionX, directionY]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt="Animated Image"
      style={{
        position: 'absolute',
        transform: `translate(${positionX}, ${positionY})`, // Use translate for animation
        transition: 'transform 0.5s ease-in-out',
      }}
    />
  );
};

export default AnimatedImage;
