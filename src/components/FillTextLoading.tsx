import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FillTextLoadingProps {
  text: string;
  className?: string;
  isActive?: boolean;
}

const FillTextLoading: React.FC<FillTextLoadingProps> = ({ text, className = "", isActive = false }) => {
  const controls = useAnimation();
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const animateText = async () => {
      // Reset to starting position
      await controls.set({ clipPath: 'inset(0 100% 0 0)' });
      
      // Animate to full width
      await controls.start({
        clipPath: 'inset(0 0% 0 0)',
        transition: { duration: 3, ease: "easeInOut" }
      });
      
      // Pause at full width
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Reset and repeat if still active
      if (isActive) {
        animationRef.current = setTimeout(animateText, 200);
      }
    };
    
    // Only start animation when isActive is true
    if (isActive) {
      animateText();
    } else {
      // Reset to starting position when not active
      controls.set({ clipPath: 'inset(0 100% 0 0)' });
      
      // Clear any pending animation
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
    }
    
    // Cleanup function to clear timeout when component unmounts or isActive changes
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
    };
    
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