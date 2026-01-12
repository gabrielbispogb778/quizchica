import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import emojiHappy from "@/assets/emoji-happy.png";
interface Section18Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

export const Section18 = ({ onSelect, onBack }: Section18Props) => {
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
              style={{ width: `${(18 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 max-w-xs sm:max-w-md leading-relaxed px-2">
          How Do You Think Your Woman Would Feel Knowing That You Are Capable of Providing This Level of Pleasure?
        </h1>

        {/* Options - Two Cards Side by Side */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
          <button
            onClick={(e) => onSelect(e)}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 sm:py-4 md:py-6 px-2 sm:px-3 md:px-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3"
          >
            <img src={emojiHappy} alt="Happy emoji" className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain" />
            <span className="text-center text-[10px] sm:text-xs md:text-base">She'd be impressed and happy</span>
          </button>
          <button
            onClick={(e) => onSelect(e)}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 sm:py-4 md:py-6 px-2 sm:px-3 md:px-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3"
          >
            <span className="text-xl sm:text-2xl md:text-3xl">😈</span>
            <span className="text-center text-[10px] sm:text-xs md:text-base">She'd go crazy with desire!</span>
          </button>
        </div>
      </div>
    </div>
  );
};
