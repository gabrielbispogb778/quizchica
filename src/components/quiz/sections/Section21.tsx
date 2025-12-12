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
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onSelect]);

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 border border-white/30 rounded-md text-white hover:text-white/80 hover:border-white/50 transition-colors z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-4 pt-8 pb-8">
        {/* Lips Icon */}
        <div className="mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-20 h-20 object-contain" />
        </div>

        {/* Quiz Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: `${(21 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Preparing Title */}
        <h1 className="text-white text-lg sm:text-xl font-bold text-center mb-6">
          Preparing your access...
        </h1>

        {/* Loading Section */}
        <div className="w-full max-w-md">
          {/* Loading Header */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-sm font-medium">Loading...</span>
            <span className="text-white text-sm font-medium">{progress}%</span>
          </div>

          {/* Animated Loading Bar */}
          <div className="w-full h-3 bg-gray-600 rounded-sm overflow-hidden mb-4">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Wait Text */}
          <p className="text-gray-400 text-sm text-center">
            Wait a moment while we prepare your exclusive access
          </p>
        </div>
      </div>
    </div>
  );
};
