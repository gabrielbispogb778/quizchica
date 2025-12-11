import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section5Props {
  onSelect: () => void;
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
              style={{ width: `${(5 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-8 max-w-md">
          How Would You Rate Your Sexual Performance?
        </h1>

        {/* Options */}
        <div className="w-full max-w-md space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={onSelect}
              className="w-full bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-between active:scale-[0.98] text-sm sm:text-base"
            >
              <span>{option.label}</span>
              <span className="text-xl">{option.emoji}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
