
import { useEffect, useState } from "react";
import { Cpu } from "lucide-react"; // Import Cpu icon for TechXperts logo

const Index = () => {
  const [progress, setProgress] = useState(0);
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 60) {
          clearInterval(interval);
          return 60; // Stop at 60% as in the design
        }
        return prev + 1;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-cosmic-darker relative">
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(26,31,44,0.2)_0%,rgba(20,23,31,1)_70%)]" />
      
      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <Cpu className="text-blue-500 w-8 h-8" />
        <span className="text-white text-xl font-bold tracking-wider">TechXperts</span>
      </div>
      
      <div className="z-10">
        <div className="eclipse shadow-eclipse animate-pulse-glow">
          <h1 className="text-white text-2xl font-bold tracking-[0.2em] mt-1">COMING SOON</h1>
          
          <div className="progress-bar">
            <div 
              className="progress"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
