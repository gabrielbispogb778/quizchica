import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section5Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

const options = [
  { label: "Totally unsatisfied", emoji: "🤦" },
  { label: "Unsatisfied", emoji: "🥺" },
  { label: "Acceptable", emoji: "✅" },
  { label: "Satisfied", emoji: "😊" },
  { label: "Very satisfied", emoji: "🤩" },
];

export const Section5 = ({ onSelect, onBack }: Section5Props) => {
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
              style={{ width: `${(5 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 max-w-sm sm:max-w-md px-2">
          How Would You Rate Your Sexual Performance?
        </h1>

        {/* Options */}
        <div className="w-full max-w-xs sm:max-w-md space-y-2 sm:space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={(e) => onSelect(e)}
              className="w-full bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-4 px-3 sm:px-4 rounded-lg transition-all duration-200 flex items-center justify-between active:scale-[0.98] text-xs sm:text-base"
            >
              <span>{option.label}</span>
              <span className="text-base sm:text-xl">{option.emoji}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
