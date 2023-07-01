import { useRef } from "react";

export const useCardTransform = () => {
  const pokeRef = useRef();

  const handleMouseEnter = () => {
    const eWidth = pokeRef.current.offsetWidth;
    const eHeight = pokeRef.current.offsetHeight;

    pokeRef.current.addEventListener("mousemove", (e) => {
      const { layerX, layerY } = e;
      const xRotation = ((layerY - eHeight / 2) / eHeight) * 20;
      const yRotation = ((layerX - eWidth / 2) / eWidth) * 20;
      const tStyles = `
      perspective(500px)
      scale(1.05)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)
    `;

      pokeRef.current.style.transform = tStyles;
    });
  };

  const handleMouseLeave = () => {
    const tStyles = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)
    `;

    pokeRef.current.style.transform = tStyles;
  };

  return { pokeRef, handleMouseEnter, handleMouseLeave };
};
