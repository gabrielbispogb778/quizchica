import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const QuizCard = ({ children, className, style }: QuizCardProps) => {
  return (
    <div className={cn("quiz-card", className)} style={style}>
      {children}
    </div>
  );
};
