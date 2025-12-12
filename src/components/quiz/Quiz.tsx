import { useState } from "react";
import { QuizLayout } from "./QuizLayout";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { Section3 } from "./sections/Section3";
import { Section4 } from "./sections/Section4";
import { Section5 } from "./sections/Section5";
import { Section6 } from "./sections/Section6";
import { Section7 } from "./sections/Section7";
import { Section8 } from "./sections/Section8";
import { Section9 } from "./sections/Section9";
import { Section10 } from "./sections/Section10";
import { Section11 } from "./sections/Section11";
import { Section12 } from "./sections/Section12";
import { Section13 } from "./sections/Section13";
import { Section14 } from "./sections/Section14";
import { Section15 } from "./sections/Section15";
import { Section16 } from "./sections/Section16";
import { Section17 } from "./sections/Section17";
import { Section18 } from "./sections/Section18";
import { Section19 } from "./sections/Section19";

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
      case 7:
        return <Section7 onSelect={handleNext} onBack={handleBack} />;
      case 8:
        return <Section8 onSelect={handleNext} onBack={handleBack} />;
      case 9:
        return <Section9 onSelect={handleNext} onBack={handleBack} />;
      case 10:
        return <Section10 onSelect={handleNext} onBack={handleBack} />;
      case 11:
        return <Section11 onSelect={handleNext} onBack={handleBack} />;
      case 12:
        return <Section12 onSelect={handleNext} onBack={handleBack} />;
      case 13:
        return <Section13 onSelect={handleNext} onBack={handleBack} />;
      case 14:
        return <Section14 onSelect={handleNext} onBack={handleBack} />;
      case 15:
        return <Section15 onSelect={handleNext} onBack={handleBack} />;
      case 16:
        return <Section16 onSelect={handleNext} onBack={handleBack} />;
      case 17:
        return <Section17 onSelect={handleNext} onBack={handleBack} />;
      case 18:
        return <Section18 onSelect={handleNext} onBack={handleBack} />;
      case 19:
        return <Section19 onSelect={handleNext} onBack={handleBack} />;
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
