import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import quadrinho1 from "@/assets/quadrinho-1.png";
import quadrinho2 from "@/assets/quadrinho-2.png";
import quadrinho3 from "@/assets/quadrinho-3.png";
import quadrinho4 from "@/assets/quadrinho-4.png";
import { OptionCard } from "../OptionCard";

interface Section2Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

const options = [
  { id: 1, image: quadrinho1, label: "Make any Woman Squirt!" },
  { id: 2, image: quadrinho2, label: "Learn the 23 Orgasmic Techniques!" },
  { id: 3, image: quadrinho3, label: "Be a Good Man in Bed! 🥰" },
  { id: 4, image: quadrinho4, label: "Provide Multiple Orgasms! 💦" },
];

export const Section2 = ({ onSelect, onBack }: Section2Props) => {
  const progressPercentage = (2 / 22) * 100; // ~9%

  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {/* Lips Icon */}
      <div className="animate-scale-in mb-4">
        <img 
          src={lipsIcon} 
          alt="Lips icon" 
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl h-2 bg-white rounded-full overflow-hidden mb-6">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Title */}
      <div className="text-center animate-fade-in mb-7">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
          What is your Main Objective? 😈
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          You'll learn everything Practically and with Real Models!
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl animate-fade-in justify-items-center">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            image={option.image}
            onClick={(e) => onSelect(e)}
          />
        ))}
      </div>
    </div>
  );
};
