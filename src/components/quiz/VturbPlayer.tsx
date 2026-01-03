import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface VturbPlayerProps {
  videoId: string;
  scriptSrc: string;
}

export const VturbPlayer = ({ videoId, scriptSrc }: VturbPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [mountKey, setMountKey] = useState(0);

  // Force remount when component mounts to ensure fresh player
  useEffect(() => {
    setMountKey(prev => prev + 1);
    setIsReady(false);
    setOverlayVisible(true);
  }, [videoId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous player content
    const playerContainer = container.querySelector('.vturb-mount');
    if (playerContainer) {
      playerContainer.innerHTML = '';
    }

    // Create player element
    const playerEl = document.createElement('vturb-smartplayer');
    playerEl.id = videoId;
    playerEl.style.cssText = 'display:block;margin:0 auto;width:100%;height:100%;max-width:400px;';
    
    const mountPoint = container.querySelector('.vturb-mount');
    if (mountPoint) {
      mountPoint.appendChild(playerEl);
    }

    // Load or reload script
    const scriptId = `vturb-script-${videoId.replace("vid-", "")}`;
    const existingScript = document.getElementById(scriptId);
    
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = scriptSrc;
    script.async = true;
    script.onload = () => {
      console.debug("VTURB script loaded:", { videoId, scriptSrc });
    };
    script.onerror = () => {
      console.error("VTURB script failed to load:", { videoId, scriptSrc });
    };
    document.head.appendChild(script);

    // Detect when the player injects content
    const checkReady = () => {
      const hasIframe = !!container.querySelector("iframe");
      const hasAnyChild = container.querySelector("vturb-smartplayer")?.children?.length;
      if (hasIframe || hasAnyChild) setIsReady(true);
    };

    const obs = new MutationObserver(() => checkReady());
    obs.observe(container, { childList: true, subtree: true });

    const timeout = window.setTimeout(() => checkReady(), 3500);

    return () => {
      obs.disconnect();
      window.clearTimeout(timeout);
    };
  }, [videoId, scriptSrc, mountKey]);

  return (
    <div className="w-full" style={{ maxWidth: 400, margin: "0 auto" }}>
      <div className="relative w-full overflow-hidden rounded-lg bg-black">
        {/* Height spacer (9:16) */}
        <div className="w-full pt-[177.78%]" />

        {/* Player mount */}
        <div ref={containerRef} className="absolute inset-0">
          <div className="vturb-mount w-full h-full" />
        </div>

        {/* Poster/Overlay */}
        {overlayVisible && (
          <button
            type="button"
            onClick={() => {
              setOverlayVisible(false);
              requestAnimationFrame(() => {
                const player = containerRef.current?.querySelector("vturb-smartplayer") as HTMLElement | null;
                if (player) player.dispatchEvent(new MouseEvent("click", { bubbles: true }));
              });
            }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[1px] animate-fade-in"
            aria-label="Assistir depoimento"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 bg-black/60 border border-white/20">
              <Play className="w-7 h-7 text-white ml-0.5" />
            </div>
            <p className="text-white text-xs sm:text-sm font-semibold text-center px-4">
              {isReady ? "Tap to watch" : "Loading video…"}
            </p>
          </button>
        )}
      </div>
    </div>
  );
};
