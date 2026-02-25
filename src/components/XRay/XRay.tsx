import { useRef, useEffect } from "react";
import "./XRay.scss"
import kittyXray from "../../assets/mask/kitty_xray.png";
import kittyMask from "../../assets/mask/kitty_mask.png";

const XRay = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointer = (e: PointerEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('pointermove', handlePointer);
    return () => window.removeEventListener('pointermove', handlePointer);
  }, []);

  return (
    <div ref={containerRef} className="xray-container">

      <img src={kittyMask} className="base-img" alt="Kitty Mask" />

      <div className="x-ray-area">
        <img src={kittyXray} className="mask-img" alt="Kitty X-Ray" />
      </div>
    </div>
  );
};

export default XRay;