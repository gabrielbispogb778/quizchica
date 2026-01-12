import { ChevronLeft, ChevronRight } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import secao17Imagem from "@/assets/secao-17-imagem.png";
import emojiStars from "@/assets/emoji-stars.png";

interface Section17Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

export const Section17 = ({ onSelect, onBack }: Section17Props) => {
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
              style={{ width: `${(17 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6 max-w-xs sm:max-w-md leading-relaxed px-2">
          Now imagine your Woman Squirting and reaching this level of Pleasure. How Would This Change Your Relationship?
        </h1>

        {/* Options */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mb-4 sm:mb-6">
          <button
            onClick={(e) => onSelect(e)}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 flex items-center justify-between text-sm sm:text-base"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={emojiStars} alt="Stars emoji" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <span>It would be perfect!</span>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={(e) => onSelect(e)}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 flex items-center justify-between text-sm sm:text-base"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">😈</span>
              <span>It would take sex to another level!</span>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="mt-auto">
          <img 
            src={secao17Imagem} 
            alt="Couple illustration" 
            className="w-52 sm:w-64 md:w-80 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
