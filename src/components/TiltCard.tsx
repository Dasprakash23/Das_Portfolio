import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // max rotation degrees
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', maxRotation = 15 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor x relative to card
    const y = e.clientY - rect.top;  // cursor y relative to card
    const width = rect.width;
    const height = rect.height;

    // Calculate percentages
    const percentX = (x / width) * 100;
    const percentY = (y / height) * 100;

    // Calculate rotation angle based on cursor position relative to center of element
    const rotateY = ((x - width / 2) / (width / 2)) * maxRotation;
    const rotateX = -((y - height / 2) / (height / 2)) * maxRotation;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowStyle({
      opacity: 0.6,
      background: `radial-gradient(circle 120px at ${percentX}% ${percentY}%, rgba(110, 231, 255, 0.15), transparent)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlowStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-500 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transformStyle: 'preserve-3d' }}
    >
      {/* Glow overlay */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={glowStyle}
      />
      {children}
    </div>
  );
};
export default TiltCard;
