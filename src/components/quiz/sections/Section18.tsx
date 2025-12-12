import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import emojiHappy from "@/assets/emoji-happy.png";
interface Section18Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section18 = ({ onSelect, onBack }: Section18Props) => {
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
              style={{ width: `${(18 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-8 max-w-md leading-relaxed">
          How Do You Think Your Woman Would Feel Knowing That You Are Capable of Providing This Level of Pleasure?
        </h1>

        {/* Options - Two Cards Side by Side */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-6 px-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center gap-3"
          >
            <img src={emojiHappy} alt="Happy emoji" className="w-7 h-7 object-contain" />
            <span className="text-center text-sm sm:text-base">She'd be impressed and happy</span>
          </button>
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-6 px-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center gap-3"
          >
            <span className="text-3xl">😈</span>
            <span className="text-center text-sm sm:text-base">She'd go crazy with desire!</span>
          </button>
        </div>
      </div>
    </div>
  );
};
