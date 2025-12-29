import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import sectionImage from "@/assets/secao-3-imagem.png";

interface Section3Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

const options = [
  { id: 1, label: "Yes, definitely!", emoji: "😊" },
  { id: 2, label: "So-so!", emoji: "😰" },
  { id: 3, label: "I'm not so sure!", emoji: "🤦‍♂️" },
];

export const Section3 = ({ onSelect, onBack }: Section3Props) => {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-[#000000] flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-3 left-3 flex items-center gap-1 text-white hover:text-white/80 transition-colors z-10 text-xs font-medium sm:top-4 sm:left-4 sm:text-sm"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-3 pt-6 pb-8 sm:px-4 sm:pt-8">
        {/* Lips Icon */}
        <div className="mb-3 sm:mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-sm sm:max-w-md mb-6 sm:mb-8 px-2 sm:px-0">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: '13.6%' }}
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 max-w-sm sm:max-w-md px-2">
          Do You Consider Yourself a Good Man in Bed?
        </h2>

        {/* Options */}
        <div className="w-full max-w-xs sm:max-w-md space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={(e) => onSelect(e)}
              className="w-full bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-4 px-3 sm:px-4 rounded-lg transition-all duration-200 flex items-center justify-between active:scale-[0.98] text-xs sm:text-base"
            >
              <span>{option.label}</span>
              <span className="text-base sm:text-xl">{option.emoji}</span>
            </button>
          ))}
        </div>

        {/* Section Image */}
        <div className="w-full max-w-xs sm:max-w-sm">
          <img 
            src={sectionImage} 
            alt="Section illustration" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
