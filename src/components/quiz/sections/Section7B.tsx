import { ChevronLeft, Info } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import sectionImage from "@/assets/secao-7b-imagem.jpg";

interface Section7BProps {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

export const Section7B = ({ onSelect, onBack }: Section7BProps) => {
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
              style={{ width: `${(6.5 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">
          What is Squirt
        </h1>
        <h2 className="text-[#D92B27] text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 bg-[#D92B27]/20 px-3 sm:px-4 py-1 rounded">
          Squirt?
        </h2>

        {/* Info Box */}
        <div className="w-full max-w-xs sm:max-w-md bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex gap-2 sm:gap-3">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Female squirt, also known as "female ejaculation," is an intense sexual response in which some women expel a clear fluid through the urethra during orgasm or very strong arousal. This happens when the woman is properly stimulated, especially in the G-spot area, leading her to reach this elevated level of pleasure. Not all women have experienced it, and many men don't know how to trigger it, but with the right techniques, any woman can achieve it!
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-xs sm:max-w-md mb-6 sm:mb-8">
          <img 
            src={sectionImage} 
            alt="Section illustration" 
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Got it Button */}
        <button
          onClick={(e) => onSelect(e)}
          className="w-full max-w-xs sm:max-w-md bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 active:scale-[0.98] text-sm sm:text-base"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
