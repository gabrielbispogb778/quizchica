import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface VturbPlayerProps {
  videoId: string;
  scriptSrc: string;
}

export const VturbPlayer = ({ videoId, scriptSrc }: VturbPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptId = `vturb-script-${videoId.replace('vid-', '')}`;
    
    // Check if script already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => {
        setTimeout(() => setIsLoaded(true), 1000);
      };
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }

    // Create the vturb element
    if (containerRef.current) {
      containerRef.current.innerHTML = `<vturb-smartplayer id="${videoId}" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;
    }
  }, [videoId, scriptSrc]);

  return (
    <div className="relative w-full" style={{ maxWidth: '400px', margin: '0 auto' }}>
      {/* Placeholder overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex flex-col items-center justify-center z-10" style={{ aspectRatio: '9/16', maxHeight: '400px' }}>
          <div className="w-16 h-16 bg-[#D92B27] rounded-full flex items-center justify-center mb-3 animate-pulse">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
          <p className="text-white text-sm font-medium">Loading video...</p>
        </div>
      )}
      
      {/* Video container */}
      <div 
        ref={containerRef}
        className="w-full"
        style={{ minHeight: isLoaded ? 'auto' : '300px' }}
      />
    </div>
  );
};
