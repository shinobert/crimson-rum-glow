import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Index from "./pages/Index";
import Heritage from "./pages/Heritage";
import Awards from "./pages/Awards";
import Events from "./pages/Events";
import Cocktails from "./pages/Cocktails";
import WhereToBuy from "./pages/WhereToBuy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AgeVerification from "./components/AgeVerification";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isVerified = Cookies.get("age-verified") === "true";
  
  if (!isVerified) {
    return <Navigate to="/verify-age" replace />;
  }
  
  return <>{children}</>;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Small delay to prevent flash of content
    setTimeout(() => {
      setIsLoading(false);
    }, 150);
  }, []);
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/verify-age" element={<AgeVerification />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/heritage" 
              element={
                <ProtectedRoute>
                  <Heritage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/awards" 
              element={
                <ProtectedRoute>
                  <Awards />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/events" 
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/cocktails" 
              element={
                <ProtectedRoute>
                  <Cocktails />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/where-to-buy" 
              element={
                <ProtectedRoute>
                  <WhereToBuy />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
