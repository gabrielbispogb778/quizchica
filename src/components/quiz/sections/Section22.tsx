import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import heroImage from "@/assets/secao-22-hero.webp";

interface Section22Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section22 = ({ onSelect, onBack }: Section22Props) => {
  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-y-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 flex items-center justify-center w-10 h-10 text-white hover:text-white/80 transition-colors z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-4 pt-8 pb-8">
        {/* Lips Icon */}
        <div className="mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-12 h-12 object-contain" />
        </div>

        {/* Progress Bar - Full (100%) */}
        <div className="w-full max-w-2xl mb-8">
          <div className="h-2 bg-[#D92B27] rounded-full" />
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-8 max-w-xl">
          Discover the 23 Secret Techniques to make any Woman Squirt from Pleasure
        </h1>

        {/* Hero Image */}
        <div className="w-full max-w-md mb-6">
          <img 
            src={heroImage} 
            alt="23 Orgasmic Techniques" 
            className="w-full"
          />
        </div>

        {/* Description Text */}
        <p className="text-white text-sm sm:text-base text-center max-w-md leading-relaxed mb-8 font-bold">
          Enough with mediocre sex. Learn for real how to give your woman intense and pleasurable orgasms!
        </p>

        {/* What Will You Receive Box */}
        <div className="w-full max-w-md bg-[#D92B27] rounded-lg p-6 mb-8">
          <h2 className="text-white text-lg font-bold text-center mb-4">WHAT WILL YOU RECEIVE?</h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">23 detailed video lessons teaching advanced techniques to make any woman SQUIRT</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Video lessons recorded with Real Models</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Practical secrets to bring your partner to orgasm and squirting</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Step-by-step with real examples so you can apply the techniques from today</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Techniques to make your woman excited without even touching her</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Content constantly updated, ensuring you always have access to the best techniques</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Lifetime access</p>
            </div>
          </div>
        </div>

        {/* Students Reviews Section */}
        <p className="text-white text-base font-semibold text-center mb-4">
          Look at what our students say 👇
        </p>

        {/* Reviews Card */}
        <div className="w-full max-w-md bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg p-6 mb-8">
          <div className="flex justify-center gap-1 mb-2">
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
          </div>
          <p className="text-gray-800 text-4xl font-bold text-center">4.387</p>
          <p className="text-gray-800 text-xl font-bold text-center">5-Star Reviews</p>
          <p className="text-gray-500 text-xs text-center mt-1">Based on reviews from men who applied the techniques</p>
        </div>
      </div>
    </div>
  );
};
