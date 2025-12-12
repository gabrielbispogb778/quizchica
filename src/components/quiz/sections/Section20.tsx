import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import emoji1 from "@/assets/emoji-secao20-1.png";
import emoji2 from "@/assets/emoji-secao20-2.png";

interface Section20Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section20 = ({ onSelect, onBack }: Section20Props) => {
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
              style={{ width: `${(20 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-lg sm:text-xl font-medium text-center mb-2 max-w-lg leading-relaxed">
          You are one step away from standing out from most Men and becoming the most incredible man your Partner has ever had.
        </h1>

        {/* Bold Question */}
        <h2 className="text-white text-xl sm:text-2xl font-bold text-center mb-8">
          Are You Ready for This?
        </h2>

        {/* Options - Two Buttons Stacked */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-between"
          >
            <span className="text-lg">Yes</span>
            <img src={emoji1} alt="emoji" className="w-8 h-8 object-contain" />
          </button>
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-between"
          >
            <span className="text-lg">Certainly!</span>
            <img src={emoji2} alt="emoji" className="w-8 h-8 object-contain" />
          </button>
        </div>
      </div>
    </div>
  );
};
