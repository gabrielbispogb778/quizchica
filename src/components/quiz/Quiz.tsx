import { useState } from "react";
import { QuizLayout } from "./QuizLayout";
import { useImagePreload } from "@/hooks/useImagePreload";
import { CreditsDisplay } from "./CreditsDisplay";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { Section3 } from "./sections/Section3";
import { Section4 } from "./sections/Section4";
import { Section5 } from "./sections/Section5";
import { Section6 } from "./sections/Section6";
import { Section7 } from "./sections/Section7";
import { Section7B } from "./sections/Section7B";
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
import { Section20 } from "./sections/Section20";
import { Section21 } from "./sections/Section21";
import { Section22 } from "./sections/Section22";

const TOTAL_SECTIONS = 22;

// Créditos por seção (seção 2 até 21 = 20 seções, totalizando 1000 ao chegar na seção 22)
const CREDITS_PER_SECTION: Record<number, number> = {
  2: 45,
  3: 50,
  4: 55,
  5: 45,
  6: 50,
  7: 55,
  8: 45,
  9: 50,
  10: 55,
  11: 45,
  12: 50,
  13: 55,
  14: 45,
  15: 50,
  16: 55,
  17: 45,
  18: 50,
  19: 55,
  20: 50,
  21: 50,
};

export const Quiz = () => {
  useImagePreload();
  const [currentSection, setCurrentSection] = useState(1);
  const [showSection7B, setShowSection7B] = useState(false);
  const [credits, setCredits] = useState(0);

  // Calcula os créditos acumulados (ganha ao sair da seção, não ao entrar)
  const calculateCredits = (currentSec: number) => {
    let total = 0;
    // Ganha créditos das seções anteriores (2 até currentSec-1)
    for (let i = 2; i < currentSec; i++) {
      total += CREDITS_PER_SECTION[i] || 0;
    }
    return total;
  };

  const handleNext = () => {
    if (currentSection < TOTAL_SECTIONS) {
      const nextSection = currentSection + 1;
      
      // Ao avançar, ganha os créditos da seção atual
      setCredits(prev => prev + (CREDITS_PER_SECTION[currentSection] || 0));
      setCurrentSection(nextSection);
    }
  };

  const handleBack = () => {
    if (showSection7B) {
      setShowSection7B(false);
      return;
    }
    if (currentSection > 1) {
      const prevSection = currentSection - 1;
      setCurrentSection(prevSection);
      setCredits(calculateCredits(prevSection));
    }
  };

  const handleSection7No = () => {
    setShowSection7B(true);
  };

  const handleSection7BNext = () => {
    setShowSection7B(false);
    setCredits(prev => prev + (CREDITS_PER_SECTION[7] || 0));
    setCurrentSection(8);
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
        if (showSection7B) {
          return <Section7B onSelect={handleSection7BNext} onBack={handleBack} />;
        }
        return <Section7 onSelect={handleNext} onSelectNo={handleSection7No} onBack={handleBack} />;
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
      case 20:
        return <Section20 onSelect={handleNext} onBack={handleBack} />;
      case 21:
        return <Section21 onSelect={handleNext} onBack={handleBack} />;
      case 22:
        return <Section22 onSelect={handleNext} onBack={handleBack} />;
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
      {currentSection >= 2 && <CreditsDisplay credits={credits} />}
      {renderSection()}
    </QuizLayout>
  );
};
