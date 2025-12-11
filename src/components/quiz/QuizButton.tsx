import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface QuizButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export const QuizButton = ({ 
  children, 
  variant = "primary", 
  className,
  ...props 
}: QuizButtonProps) => {
  const variants = {
    primary: "quiz-button",
    secondary: "bg-secondary text-secondary-foreground font-bold uppercase tracking-wide py-4 px-8 rounded-lg transition-all duration-200 hover:bg-secondary/80 active:scale-[0.98]",
    outline: "border-2 border-foreground/30 text-foreground font-bold uppercase tracking-wide py-4 px-8 rounded-lg transition-all duration-200 hover:bg-foreground/10 active:scale-[0.98]",
  };

  return (
    <button 
      className={cn(variants[variant], "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
};
