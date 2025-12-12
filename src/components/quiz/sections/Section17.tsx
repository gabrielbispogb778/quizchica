import { ChevronLeft, ChevronRight } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import secao17Imagem from "@/assets/secao-17-imagem.png";
import emojiStars from "@/assets/emoji-stars.png";

interface Section17Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section17 = ({ onSelect, onBack }: Section17Props) => {
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
              style={{ width: `${(17 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-6 max-w-md leading-relaxed">
          Now imagine your Woman Squirting and reaching this level of Pleasure. How Would This Change Your Relationship?
        </h1>

        {/* Options */}
        <div className="flex flex-col gap-4 w-full max-w-md mb-6">
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img src={emojiStars} alt="Stars emoji" className="w-7 h-7 object-contain" />
              <span>It would be perfect!</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">😈</span>
              <span>It would take sex to another level!</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="mt-auto">
          <img 
            src={secao17Imagem} 
            alt="Couple illustration" 
            className="w-64 sm:w-80 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
