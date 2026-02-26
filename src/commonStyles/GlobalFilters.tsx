const GlobalFilters = () => (
  <svg 
    style={{ 
      position: 'absolute', 
      width: 0, 
      height: 0, 
      pointerEvents: 'none', 
      visibility: 'hidden' 
    }} 
    aria-hidden="true"
  >
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
        <feColorMatrix 
          in="blur" 
          mode="matrix" 
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" 
          result="goo" 
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
);

export default GlobalFilters;