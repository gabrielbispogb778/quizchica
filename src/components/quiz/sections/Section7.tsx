import { ChevronLeft, ArrowRight } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import sectionImage from "@/assets/secao-7-imagem.png";

interface Section7Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

const options = [
  "Yes, I always wonder about it",
  "Yes, but I don't know where to start",
  "I had never thought about it before",
];

export const Section7 = ({ onSelect, onBack }: Section7Props) => {
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
              style={{ width: `${(7 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 max-w-sm sm:max-w-md px-2">
          Have You Ever Wondered How to Make a Woman Reach This Level of Pleasure?
        </h1>

        {/* Image and Options Row */}
        <div className="w-full max-w-sm sm:max-w-lg flex flex-col items-center gap-4 sm:gap-6">
          {/* Image */}
          <div className="w-40 sm:w-48 md:w-56 flex-shrink-0">
            <img 
              src={sectionImage} 
              alt="Section illustration" 
              className="w-full object-contain"
            />
          </div>

          {/* Options */}
          <div className="w-full space-y-2 sm:space-y-3">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={(e) => onSelect(e)}
                className="w-full bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 rounded-lg transition-all duration-200 flex items-center justify-between gap-2 active:scale-[0.98] text-xs sm:text-sm text-left"
              >
                <span>{option}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
