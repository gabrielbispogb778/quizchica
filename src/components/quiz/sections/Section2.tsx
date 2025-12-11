import lipsIcon from "@/assets/lips-icon.png";
import quadrinho1 from "@/assets/quadrinho-1.png";
import quadrinho2 from "@/assets/quadrinho-2.png";
import quadrinho3 from "@/assets/quadrinho-3.png";
import quadrinho4 from "@/assets/quadrinho-4.png";

interface Section2Props {
  onSelect: () => void;
}

const options = [
  { id: 1, image: quadrinho1 },
  { id: 2, image: quadrinho2 },
  { id: 3, image: quadrinho3 },
  { id: 4, image: quadrinho4 },
];

export const Section2 = ({ onSelect }: Section2Props) => {
  return (
    <div className="flex flex-col items-center gap-4 -mt-8">
      {/* Lips Icon */}
      <div className="animate-scale-in">
        <img 
          src={lipsIcon} 
          alt="Lips icon" 
          className="w-16 h-16 object-contain"
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
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img 
                src={option.image} 
                alt={`Option ${option.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
