import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to top with a slight delay to ensure it happens after route transition
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // Use instant instead of smooth for more reliable scrolling
      });
      
      // As a fallback, also try scrolling the document element and body
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop; 