import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

const AgeVerification = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already verified their age
    const ageVerified = Cookies.get("age-verified");
    
    if (ageVerified === "true") {
      navigate("/home");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleVerification = (isOfAge: boolean) => {
    if (isOfAge) {
      // Set cookie for 365 days
      Cookies.set("age-verified", "true", { expires: 365 });
      navigate("/home");
    } else {
      // Redirect to responsibility.org in a new tab
      window.open("https://www.responsibility.org/", "_blank", "noopener,noreferrer");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-pulse text-white text-xl font-eb-garamond">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className="flex min-h-screen bg-black bg-cover bg-center"
      style={{ 
        backgroundImage: `url('/Images/all-rums.jpg')`,
        backgroundPosition: 'right center'
      }}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 bg-gradient-to-r from-black via-black/90 to-transparent">
        <h1 className="font-eb-garamond text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight extended-title animate-title-fade-in bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">
          ARE YOU OF<br />LEGAL<br />DRINKING AGE?
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            onClick={() => handleVerification(true)}
            size="lg"
            className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold px-10 py-6 h-auto text-xl"
          >
            YES
          </Button>
          
          <Button 
            onClick={() => handleVerification(false)}
            size="lg"
            className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold px-10 py-6 h-auto text-xl"
          >
            NO
          </Button>
        </div>
        
        <p className="text-white/80 mt-12 text-sm max-w-md font-eb-garamond opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          You must be of legal drinking age to enter this website. 
          This website uses cookies. By entering this site, I agree to the Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default AgeVerification; 