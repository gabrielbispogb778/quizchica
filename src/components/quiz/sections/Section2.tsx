import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import quadrinho1 from "@/assets/quadrinho-1.png";
import quadrinho2 from "@/assets/quadrinho-2.png";
import quadrinho3 from "@/assets/quadrinho-3.png";
import quadrinho4 from "@/assets/quadrinho-4.png";

interface Section2Props {
  onSelect: () => void;
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
    <div className="flex flex-col items-center gap-4 -mt-8 w-full">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {/* Lips Icon */}
      <div className="animate-scale-in">
        <img 
          src={lipsIcon} 
          alt="Lips icon" 
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs h-2 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Title */}
      <div className="text-center animate-fade-in">
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          What is your Main Objective? 😈
        </h1>
        <p className="text-sm text-muted-foreground">
          You'll learn everything Practically and with Real Models!
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-md animate-fade-in">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={onSelect}
            className="group overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Red Header with Text */}
            <div className="bg-primary px-2 py-3">
              <p className="text-foreground text-sm font-bold text-center leading-tight">
                {option.label}
              </p>
            </div>
            {/* Image */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img 
                src={option.image} 
                alt={option.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
