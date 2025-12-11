import { useState } from "react";
import { QuizLayout } from "./QuizLayout";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { Section3 } from "./sections/Section3";
import { Section4 } from "./sections/Section4";
import { Section5 } from "./sections/Section5";
import { Section6 } from "./sections/Section6";

const TOTAL_SECTIONS = 22;

export const Quiz = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const handleNext = () => {
    if (currentSection < TOTAL_SECTIONS) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return <Section1 onConfirm={handleNext} />;
      case 2:
        return <Section2 onSelect={handleNext} onBack={handleBack} />;
      case 3:
        return <Section3 onSelect={handleNext} onBack={handleBack} />;
      case 4:
        return <Section4 onSelect={handleNext} onBack={handleBack} />;
      case 5:
        return <Section5 onSelect={handleNext} onBack={handleBack} />;
      case 6:
        return <Section6 onSelect={handleNext} onBack={handleBack} />;
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Seção {currentSection}
            </h2>
            <p className="text-muted-foreground mb-8">
              Aguardando imagem de referência para esta seção.
            </p>
            <button 
              onClick={handleNext}
              className="quiz-button"
              disabled={currentSection >= TOTAL_SECTIONS}
            >
              {currentSection >= TOTAL_SECTIONS ? "Finalizar" : "Próxima Seção"}
            </button>
          </div>
        );
    }
  };

  return (
    <QuizLayout currentSection={currentSection} totalSections={TOTAL_SECTIONS}>
      {renderSection()}
    </QuizLayout>
  );
};
