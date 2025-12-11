import { useState } from "react";
import { QuizLayout } from "./QuizLayout";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";

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
      // Placeholder for sections 3-22
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
