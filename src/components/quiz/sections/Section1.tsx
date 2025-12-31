import { QuizCard } from "../QuizCard";
import { QuizButton } from "../QuizButton";
import lipsIcon from "@/assets/lips-icon.png";

interface Section1Props {
  onConfirm: () => void;
}

export const Section1 = ({ onConfirm }: Section1Props) => {
  return (
    <div className="flex flex-col items-center gap-6 -mt-24">
      {/* Lips Icon */}
      <div className="animate-scale-in">
        <img 
          src={lipsIcon} 
          alt="Lips icon" 
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Age Verification Card */}
      <QuizCard className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          You must be 18 years or older to continue! 🚨
        </h1>
      </QuizCard>

      {/* Confirmation Button */}
      <div className="w-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <QuizButton onClick={onConfirm}>
          YES, I'M 18+ AND READY TO UNLOCK SECRETS! 🔥
        </QuizButton>
      </div>

      {/* Exit Button */}
      <div className="w-full animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <button
          onClick={() => window.location.href = 'https://google.com'}
          className="w-full bg-transparent border-2 border-white/30 hover:border-white/50 text-white/70 hover:text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-200 text-sm md:text-base"
        >
          No, I am under 18 years old ❌
        </button>
      </div>
    </div>
  );
};
