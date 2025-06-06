import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FillTextLoadingProps {
  text: string;
  className?: string;
  isActive?: boolean;
}

const FillTextLoading: React.FC<FillTextLoadingProps> = ({ 
  text, 
  className = "", 
  isActive = false
}) => {
  const controls = useAnimation();
  
  useEffect(() => {
    const animateText = async () => {
      // Reset to starting position
      await controls.set({ clipPath: 'inset(0 100% 0 0)' });
      
      // Animate to full width - 5 second duration
      await controls.start({
        clipPath: 'inset(0 0% 0 0)',
        transition: { duration: 5, ease: "easeInOut" }
      });
    };
    
    // Only start animation when isActive is true
    if (isActive) {
      animateText();
    } else {
      // Reset to starting position when not active
      controls.set({ clipPath: 'inset(0 100% 0 0)' });
    }
  }, [controls, isActive]);
  
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Base text - dark red */}
      <div 
        className="text-rum-red-dark"
      >
        {text}
      </div>
      
      {/* White text overlay with animation */}
      <div className="absolute inset-0">
        <motion.div 
          className="text-white"
          animate={controls}
          style={{ 
            clipPath: 'inset(0 100% 0 0)'
          }}
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
};

export default FillTextLoading; 