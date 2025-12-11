import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import chatImage from "@/assets/secao-12-chat.webp";
import shushEmoji from "@/assets/emoji-shush.png";

interface Section12Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section12 = ({ onSelect, onBack }: Section12Props) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-8 relative">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-8 left-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Go back"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Lips Icon */}
      <div className="mb-4">
        <img src={lipsIcon} alt="Lips icon" className="w-20 h-20 object-contain" />
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-6">
        <div className="h-2 bg-white rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#D92B27] rounded-full transition-all duration-300"
            style={{ width: `${(12 / 22) * 100}%` }}
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-2 max-w-md">
        Look at what other men have to say after learning these Secret Techniques <img src={shushEmoji} alt="Shush emoji" className="w-6 h-6 inline-block align-middle" />
      </h1>

      {/* Subtitle */}
      <p className="text-[#D92B27] text-sm text-center mb-6 max-w-md">
        These are just some of the thousands of men who have already applied these techniques!
      </p>

      {/* Chat Image */}
      <div className="w-full max-w-sm mb-8">
        <img 
          src={chatImage} 
          alt="Chat testimonial" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={onSelect}
        className="w-full max-w-md bg-[#D92B27] hover:bg-[#b82522] text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
      >
        Continue
      </button>
    </div>
  );
};
