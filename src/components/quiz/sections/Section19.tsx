import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import secao19Imagem from "@/assets/secao-19-imagem.png";

interface Section19Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section19 = ({ onSelect, onBack }: Section19Props) => {
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
              style={{ width: `${(19 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-4 max-w-lg leading-relaxed">
          Do You Want Access to All 23 Techniques Without Restrictions and Become an Incredible Man in Bed?
        </h1>

        {/* Subtitle */}
        <p className="text-[#D92B27] text-sm sm:text-base text-center mb-6 max-w-md">
          Master these Techniques and you'll have any Woman in the palm of your hand!
        </p>

        {/* MacBook Image */}
        <div className="mb-6">
          <img 
            src={secao19Imagem} 
            alt="Course preview" 
            className="w-72 sm:w-96 h-auto object-contain"
          />
        </div>

        {/* Options - Two Buttons Side by Side */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-2xl">🔥</span>
            <span className="text-center text-sm sm:text-base">Yes, of course</span>
          </button>
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-2xl">😈</span>
            <span className="text-center text-sm sm:text-base">I can't wait</span>
          </button>
        </div>
      </div>
    </div>
  );
};
