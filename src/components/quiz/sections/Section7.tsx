import { ChevronLeft, ArrowRight } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import sectionImage from "@/assets/secao-7-imagem.png";

interface Section7Props {
  onSelect: (e?: React.MouseEvent) => void;
  onSelectNo: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

const options = [
  { text: "Yes, I always wonder about it", goesToNo: false },
  { text: "Yes, but I don't know where to start", goesToNo: false },
  { text: "No, I've never heard about it", goesToNo: true },
];

export const Section7 = ({ onSelect, onSelectNo, onBack }: Section7Props) => {
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
              style={{ width: `${(7 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-8 max-w-md">
          Have You Ever Wondered How to Make a Woman Reach This Level of Pleasure?
        </h1>

        {/* Image and Options Row */}
        <div className="w-full max-w-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Image */}
          <div className="w-48 sm:w-56 flex-shrink-0">
            <img 
              src={sectionImage} 
              alt="Section illustration" 
              className="w-full object-contain"
            />
          </div>

          {/* Options */}
          <div className="flex-1 w-full space-y-3">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={(e) => option.goesToNo ? onSelectNo(e) : onSelect(e)}
                className="w-full bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-4 rounded-lg transition-all duration-200 flex items-center justify-between gap-2 active:scale-[0.98] text-sm text-left"
              >
                <span>{option.text}</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
