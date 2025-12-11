import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import sectionImage from "@/assets/secao-3-imagem.png";

interface Section3Props {
  onSelect: () => void;
  onBack: () => void;
}

const options = [
  { id: 1, label: "Yes, definitely!", emoji: "😊" },
  { id: 2, label: "So-so!", emoji: "😰" },
  { id: 3, label: "I'm not so sure!", emoji: "🤦‍♂️" },
];

export const Section3 = ({ onSelect, onBack }: Section3Props) => {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 text-white hover:text-white/80 transition-colors z-10"
        aria-label="Voltar"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-4 pt-8 pb-8">
        {/* Lips Icon */}
        <div className="mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-12 h-12 object-contain" />
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: '13.6%' }}
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-xl sm:text-2xl font-bold text-center mb-8 max-w-md">
          Do You Consider Yourself a Good Man in Bed?
        </h2>

        {/* Options */}
        <div className="w-full max-w-md space-y-4 mb-8">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={onSelect}
              className="w-full bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-between active:scale-[0.98] text-sm sm:text-base"
            >
              <span>{option.label}</span>
              <span className="text-xl">{option.emoji}</span>
            </button>
          ))}
        </div>

        {/* Section Image */}
        <div className="w-full max-w-sm">
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
