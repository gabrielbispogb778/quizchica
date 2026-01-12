import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import chatImage from "@/assets/secao-12-chat.webp";
import shushEmoji from "@/assets/emoji-shush.png";

interface Section12Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

export const Section12 = ({ onSelect, onBack }: Section12Props) => {
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
        <div className="w-full max-w-sm sm:max-w-md mb-4 sm:mb-6">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: `${(12 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 max-w-xs sm:max-w-md px-2">
          Look at what other men have to say after learning these Secret Techniques <img src={shushEmoji} alt="Shush emoji" className="w-5 h-5 sm:w-6 sm:h-6 inline-block align-middle" />
        </h1>

        {/* Subtitle */}
        <p className="text-[#D92B27] text-xs sm:text-sm text-center mb-4 sm:mb-6 max-w-xs sm:max-w-md px-2">
          These are just some of the thousands of men who have already applied these techniques!
        </p>

        {/* Chat Image */}
        <div className="w-full max-w-[280px] sm:max-w-sm mb-6 sm:mb-8">
          <img 
            src={chatImage} 
            alt="Chat testimonial" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={(e) => onSelect(e)}
          className="w-full max-w-xs sm:max-w-md bg-[#D92B27] hover:bg-[#b82522] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base md:text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
