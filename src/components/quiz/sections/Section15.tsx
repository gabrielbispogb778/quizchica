import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import secao15Imagem from "@/assets/secao-15-imagem.png";
interface Section15Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}
export const Section15 = ({
  onSelect,
  onBack
}: Section15Props) => {
  return <div className="min-h-screen min-h-[100dvh] bg-[#000000] flex flex-col">
      {/* Back Button */}
      <button onClick={onBack} className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1 text-white hover:text-white/80 transition-colors z-10 text-xs sm:text-sm font-medium">
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
            <div className="h-full bg-[#D92B27] transition-all duration-300" style={{
            width: `${15 / 22 * 100}%`
          }} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6 max-w-xs sm:max-w-md leading-relaxed px-2">
          92% of men who master and apply these Techniques make their Woman Squirting in the First Minutes! 😈
        </h1>

        {/* Image */}
        <div className="mb-6 sm:mb-8">
          <img src={secao15Imagem} alt="Couple illustration" className="w-52 sm:w-64 md:w-80 h-auto object-contain" />
        </div>

        {/* Continue Button */}
        <button onClick={e => onSelect(e)} className="w-full max-w-xs sm:max-w-sm bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 text-sm sm:text-base">
          Continue
        </button>
      </div>
    </div>;
};