import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import sectionImage from "@/assets/secao-13-imagem.png";
interface Section13Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}
export const Section13 = ({
  onSelect,
  onBack
}: Section13Props) => {
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
            width: `${13 / 22 * 100}%`
          }} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 max-w-xs sm:max-w-md px-2">
          Do You Want to Learn in Practice How These Techniques Work and Apply Them to Your Woman Today?
        </h1>

        {/* Subtitle */}
        <p className="text-[#D92B27] text-xs sm:text-sm text-center mb-6 sm:mb-8 max-w-xs sm:max-w-md px-2">
          We'll teach you the complete step-by-step of these Secret Techniques!
        </p>

        {/* Image and Options Container */}
        <div className="w-full max-w-sm sm:max-w-lg flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Image */}
          <div className="w-40 sm:w-48 md:w-56">
            <img src={sectionImage} alt="Technique illustration" className="w-full object-contain" />
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs sm:w-auto">
            <button onClick={e => onSelect(e)} className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg transition-all duration-200 text-left text-sm sm:text-base min-w-[140px] sm:min-w-[160px]">
              Yes, I'm ready!
            </button>
            <button onClick={e => onSelect(e)} className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg transition-all duration-200 text-left text-sm sm:text-base min-w-[140px] sm:min-w-[160px]">
              No, maybe later
            </button>
          </div>
        </div>
      </div>
    </div>;
};