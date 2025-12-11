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
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Age Verification Card */}
      <QuizCard className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          You must be 18 years or older to continue!
        </h1>
        <div className="flex justify-center gap-2 text-2xl">
          <span>😈</span>
          <span>🔥</span>
        </div>
      </QuizCard>

      {/* Confirmation Button */}
      <div className="w-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <QuizButton onClick={onConfirm}>
          I AM 18 YEARS OLD OR OLDER!
        </QuizButton>
      </div>
    </div>
  );
};
