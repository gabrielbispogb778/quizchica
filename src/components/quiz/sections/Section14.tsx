import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";

interface Section14Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section14 = ({ onSelect, onBack }: Section14Props) => {
  useEffect(() => {
    // Load the vturb player script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/de8b493d-bf00-4ed1-be55-9961440871d6/players/693b5d9d82cba8290aaee973/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center gap-1 text-white hover:text-white/80 transition-colors z-10 text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-4 pt-8 pb-8">
        {/* Lips Icon */}
        <div className="mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-20 h-20 object-contain" />
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-6">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: `${(14 / 22) * 100}%` }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-2 max-w-md">
          Look at the Step-by-Step of How to Make Her Squirting
        </h1>

        {/* Emojis */}
        <div className="flex gap-2 mb-6">
          <span className="text-2xl">😈</span>
          <span className="text-2xl">💦</span>
        </div>

        {/* Video Player Container */}
        <div className="w-full max-w-lg mb-6">
          <div className="bg-[#D92B27] rounded-lg p-4">
            <div 
              id="vturb-container"
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-693b5d9d82cba8290aaee973" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`
              }}
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-white text-sm text-center mb-6 max-w-md">
          This is only 1 of the 23 Techniques we will teach you. Watch until the end! 🙈
        </p>

        {/* Question */}
        <h2 className="text-white text-lg font-bold text-center mb-4">
          How did you like it?
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-between"
          >
            <span>Very good</span>
            <span className="text-xl">🔥</span>
          </button>
          <button
            onClick={onSelect}
            className="bg-[#D92B27] hover:bg-[#B82422] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-between"
          >
            <span>I'm going to apply it right now!</span>
            <span className="text-xl">👀</span>
          </button>
        </div>
      </div>
    </div>
  );
};
