import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section16Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

export const Section16 = ({ onSelect, onBack }: Section16Props) => {
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

        {/* Progress Bar */}
        <div className="w-full max-w-sm sm:max-w-md mb-6 sm:mb-8">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: `${(16 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-3 sm:mb-4 max-w-xs sm:max-w-md leading-relaxed px-2">
          Are You Willing to Learn and Apply the complete Step-by-Step of these Secret Techniques?
        </h1>

        {/* Subtitle */}
        <p className="text-[#D92B27] text-xs sm:text-sm text-center mb-6 sm:mb-8 max-w-xs sm:max-w-md px-2">
          It's not enough just to watch, you must learn and apply!
        </p>

        {/* Options */}
        <div className="flex gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
          <button
            onClick={(e) => onSelect(e)}
            className="flex-1 bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg transition-all duration-200 text-left text-xs sm:text-sm md:text-base"
          >
            Yes
          </button>
          <button
            onClick={(e) => onSelect(e)}
            className="flex-1 bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg transition-all duration-200 text-left text-xs sm:text-sm md:text-base"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
