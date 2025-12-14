import { ReactNode } from "react";

interface QuizLayoutProps {
  children: ReactNode;
  currentSection: number;
  totalSections: number;
}

export const QuizLayout = ({ children, currentSection, totalSections }: QuizLayoutProps) => {
  const progressPercentage = (currentSection / totalSections) * 100;

  return (
    <div className="min-h-screen min-h-[100dvh] bg-background flex flex-col items-center justify-center px-3 py-6 sm:px-4 sm:py-8 relative">
      <div className="w-full max-w-lg animate-fade-in">
        {children}
      </div>
      
      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};
