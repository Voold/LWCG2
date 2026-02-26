import { useRef, useEffect, useState } from "react";
import "./XRay.scss";
import kittyXray from "../../assets/mask/kitty_xray.png";
import kittyMask from "../../assets/mask/kitty_mask.png";

const XRay = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  // Считаем, что компонент готов, когда загружены обе картинки
  const isReady = loadedCount >= 2;

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!containerRef.current || !isReady) return;

      const rect = containerRef.current.getBoundingClientRect();
      
      // Вычисляем координаты относительно контейнера
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    // Слушаем движение мыши и тачи
    window.addEventListener('pointermove', handleMove);
    
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [isReady]);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <div 
      ref={containerRef} 
      className={`xray-container ${isReady ? "is-ready" : "is-loading"}`}
    >

      {!isReady && (
        <div className="xray-loader">
          <div className="scanner-line"></div>
          <span className="xray-loader-text">X-RAY loading...</span>
        </div>
      )}


      <img 
        src={kittyMask} 
        className="base-img" 
        alt="Kitty Mask" 
        onLoad={handleImageLoad}
      />


      <div className="x-ray-area">
        <img 
          src={kittyXray} 
          className="mask-img" 
          alt="Kitty X-Ray" 
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default XRay;