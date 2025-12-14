import { cn } from "@/lib/utils";

interface OptionCardProps {
  label: string;
  image: string;
  onClick: () => void;
  className?: string;
}

export const OptionCard = ({ label, image, onClick, className }: OptionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] overflow-hidden rounded-xl",
        "border border-white/10 bg-background",
        "transition-all duration-300 hover:scale-[1.02] hover:border-primary/50",
        "active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
    >
      {/* Red Header - Fixed Height */}
      <div className="h-12 sm:h-14 md:h-16 bg-primary flex items-center justify-center px-3 sm:px-4">
        <p className="text-foreground text-xs sm:text-sm md:text-base font-bold text-center leading-tight line-clamp-2">
          {label}
        </p>
      </div>
      
      {/* Image Area - Aspect Ratio */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
    </button>
  );
};
