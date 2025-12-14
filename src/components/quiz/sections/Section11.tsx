import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section11Props {
  onSelect: () => void;
  onBack: () => void;
}

const options = [
  { label: "Yes, absolutely!", emoji: "✅" },
  { label: "I'm not sure, but I'm willing to learn", emoji: "🥺" },
];

export const Section11 = ({ onSelect, onBack }: Section11Props) => {
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
              style={{ width: `${(11 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-8 max-w-md">
          Do You Think Learning These Advanced Techniques Could Be What You've Been Missing to Provide This Kind of Pleasure?
        </h1>

        {/* Options */}
        <div className="w-full max-w-md space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={onSelect}
              className="w-full bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-2.5 sm:py-4 px-3 sm:px-4 rounded-lg transition-all duration-200 flex items-center gap-3 sm:gap-4 active:scale-[0.98] text-xs sm:text-base text-left"
            >
              <span className="text-lg sm:text-xl flex-shrink-0">{option.emoji}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
