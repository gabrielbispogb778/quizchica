import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import womenImage from "@/assets/secao-9-mulheres.png";

interface Section9Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

export const Section9 = ({ onSelect, onBack }: Section9Props) => {
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
              style={{ width: `${(9 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-lg sm:text-xl font-bold text-center mb-8 max-w-md">
          Studies claim that only 1 out of 10 women achieves this type of pleasure (Squirt).
        </h1>

        {/* Women Image */}
        <div className="mb-8">
          <img 
            src={womenImage} 
            alt="1 out of 10 women" 
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Subtitle */}
        <p className="text-white text-base sm:text-lg font-bold text-center mb-8 max-w-md">
          But wait! There are Techniques for this and few men know them!
        </p>

        {/* Continue Button */}
        <button
          onClick={(e) => onSelect(e)}
          className="w-full max-w-md bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 active:scale-[0.98]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
