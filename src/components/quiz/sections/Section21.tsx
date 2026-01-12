import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section21Props {
  onSelect: (e?: React.MouseEvent) => void;
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
    <div className="min-h-screen min-h-[100dvh] bg-[#000000] flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1 text-white hover:text-white/80 transition-colors z-10 text-xs sm:text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-3 sm:px-4 pt-6 sm:pt-8 pb-6 sm:pb-8">
        {/* Lips Icon */}
        <div className="mb-3 sm:mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
        </div>

        {/* Quiz Progress Bar */}
        <div className="w-full max-w-sm sm:max-w-md mb-6 sm:mb-8">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: `${(21 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Preparing Title */}
        <h1 className="text-white text-base sm:text-lg md:text-xl font-bold text-center mb-4 sm:mb-6">
          Preparing your access...
        </h1>

        {/* Loading Section */}
        <div className="w-full max-w-xs sm:max-w-md">
          {/* Loading Header */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-xs sm:text-sm font-medium">Loading...</span>
            <span className="text-white text-xs sm:text-sm font-medium">{progress}%</span>
          </div>

          {/* Animated Loading Bar */}
          <div className="w-full h-2.5 sm:h-3 bg-gray-600 rounded-sm overflow-hidden mb-3 sm:mb-4">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Wait Text */}
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            Wait a moment while we prepare your exclusive access
          </p>
        </div>
      </div>
    </div>
  );
};
