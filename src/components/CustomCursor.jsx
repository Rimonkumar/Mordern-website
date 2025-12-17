import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from "framer-motion";

const CircularText = ({ text = '', spinDuration = 20, className = '', children }) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: {
        rotate: {
          from: start,
          to: start + 360,
          ease: 'linear',
          duration: spinDuration,
          repeat: Infinity
        }
      }
    });
  }, [spinDuration, text, controls, rotation]);

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: '100%', height: '100%' }}>
    
      <div className="absolute z-10 flex items-center justify-center">
        {children}
      </div>

      
      <motion.div
        className="absolute inset-0"
        style={{ rotate: rotation }}
        animate={controls}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          
          const radius = 28; 

          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 text-[7px] font-bold uppercase tracking-widest"
              style={{
                transform: `translate(-50%, -50%) rotate(${rotationDeg}deg) translateY(-${radius}px)`,
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;