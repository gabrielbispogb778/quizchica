import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section21Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section21 = ({ onSelect, onBack }: Section21Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onSelect();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onSelect]);

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center gap-1 text-white hover:text-white/80 transition-colors z-10 text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Lips Icon */}
        <div className="mb-8">
          <img src={lipsIcon} alt="Lips icon" className="w-20 h-20 object-contain" />
        </div>

        {/* Loading Text */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-6">
          Preparing your personalized plan...
        </h1>

        {/* Animated Progress Bar */}
        <div className="w-full max-w-md mb-4">
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <p className="text-white text-lg font-medium">
          {progress}%
        </p>
      </div>
    </div>
  );
};
