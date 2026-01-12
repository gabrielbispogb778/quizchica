import { ChevronLeft, ArrowRight } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import coupleImage from "@/assets/secao-4-casal.png";

interface Section4Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

const options = [
  "Learn new techniques",
  "More confidence in bed",
  "Lack of experience",
];

export const Section4 = ({ onSelect, onBack }: Section4Props) => {
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
              style={{ width: `${(4 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 max-w-sm sm:max-w-md px-2">
          How Would You Rate Your Sexual Performance?
        </h1>

        {/* Content - Image and Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-sm sm:max-w-2xl">
          {/* Couple Image */}
          <div className="w-40 sm:w-48 md:w-56 lg:w-64 flex-shrink-0">
            <img 
              src={coupleImage} 
              alt="Couple illustration" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Option Buttons */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full max-w-xs">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={(e) => onSelect(e)}
                className="bg-[#D92B27] hover:bg-[#b82422] text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg flex items-center justify-between transition-colors"
              >
                <span className="text-left text-xs sm:text-sm md:text-base">{option}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
