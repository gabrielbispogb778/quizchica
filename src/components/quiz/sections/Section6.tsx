import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import sectionGif from "@/assets/secao-6-gif.gif";

interface Section6Props {
  onSelect: (e?: React.MouseEvent) => void;
  onSelectNo: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

const options = [
  { label: "Yes, I know it well", emoji: "😏" },
  { label: "No, I've never heard about it", emoji: "🤔" },
];

export const Section6 = ({ onSelect, onSelectNo, onBack }: Section6Props) => {
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
              style={{ width: `${(6 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-6 max-w-md">
          Have You Heard of Female Squirt?
        </h1>

        {/* GIF */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={sectionGif} 
            alt="Section illustration" 
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Options */}
        <div className="w-full max-w-md grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={(e) => (index === 1 ? onSelectNo(e) : onSelect(e))}
              className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 sm:py-6 px-3 sm:px-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center gap-1.5 sm:gap-2 active:scale-[0.98] text-xs sm:text-base"
            >
              <span className="text-xl sm:text-2xl">{option.emoji}</span>
              <span className="text-center">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
