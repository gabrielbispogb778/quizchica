import { ChevronLeft, ArrowRight } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section8Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

const options = [
  { label: "Yes, I believe so", emoji: "✅" },
  { label: "No, I think it's something strange and difficult", emoji: "🤔" },
];

export const Section8 = ({ onSelect, onBack }: Section8Props) => {
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
              style={{ width: `${(8 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-8 max-w-md">
          Do You Believe Any Woman Can Squirt If the Man Knows the Right Techniques?
        </h1>

        {/* Options */}
        <div className="w-full max-w-md space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={(e) => onSelect(e)}
              className="w-full bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-4 px-3 sm:px-4 rounded-lg transition-all duration-200 flex items-center justify-between gap-2 active:scale-[0.98] text-xs sm:text-base text-left"
            >
              <span>{option.label}</span>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-lg sm:text-xl">{option.emoji}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
