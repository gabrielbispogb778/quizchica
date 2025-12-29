import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section16Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

export const Section16 = ({ onSelect, onBack }: Section16Props) => {
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
      <div className="flex-1 flex flex-col items-center px-4 pt-8 pb-8">
        {/* Lips Icon */}
        <div className="mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-20 h-20 object-contain" />
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: `${(16 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-4 max-w-md leading-relaxed">
          Are You Willing to Learn and Apply the complete Step-by-Step of these Secret Techniques?
        </h1>

        {/* Subtitle */}
        <p className="text-[#D92B27] text-sm text-center mb-8 max-w-md">
          It's not enough just to watch, you must learn and apply!
        </p>

        {/* Options */}
        <div className="flex gap-3 sm:gap-4 w-full max-w-md">
          <button
            onClick={(e) => onSelect(e)}
            className="flex-1 bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 text-left text-xs sm:text-base"
          >
            Yes
          </button>
          <button
            onClick={(e) => onSelect(e)}
            className="flex-1 bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 text-left text-xs sm:text-base"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
