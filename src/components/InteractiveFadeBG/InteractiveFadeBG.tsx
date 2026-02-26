import './InteractiveFadeBG.scss';
import React, { useEffect, useRef, useState } from 'react';

const InteractiveFadeBG = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const speedSmooth = 0.1; 
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handlePointer = (e: PointerEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  };

  let rafId: number;
  const animate = () => {
    setSmooth((prev) => ({
      x: prev.x + (mouse.current.x - prev.x) * speedSmooth,
      y: prev.y + (mouse.current.y - prev.y) * speedSmooth,
    }));
    rafId = requestAnimationFrame(animate);
  };

  window.addEventListener('pointermove', handlePointer);
  rafId = requestAnimationFrame(animate);

  return () => {
    window.removeEventListener('pointermove', handlePointer);
    cancelAnimationFrame(rafId);
  };
}, []);

  return (
    <div 
      className="gradient-container"
      style={{ 
        '--mouse-x': `${smooth.x}px`, 
        '--mouse-y': `${smooth.y}px` 
      } as React.CSSProperties}
    >
      {/* Фоновые шары */}
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="bg-3"></div>
      <div className="bg-4"></div>

      {/* Шар за курсором */}
      <div className="morphing-blob"></div>

    </div>
  );
};

export default InteractiveFadeBG;