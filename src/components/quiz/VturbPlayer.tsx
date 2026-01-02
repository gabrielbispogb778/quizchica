import { useEffect, useMemo, useRef, useState } from "react";
import { Play } from "lucide-react";

interface VturbPlayerProps {
  videoId: string;
  scriptSrc: string;
}

export const VturbPlayer = ({ videoId, scriptSrc }: VturbPlayerProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const playerHtml = useMemo(
    () =>
      `<vturb-smartplayer id="${videoId}" style="display:block;margin:0 auto;width:100%;height:100%;max-width:400px;"></vturb-smartplayer>`,
    [videoId]
  );

  useEffect(() => {
    const scriptId = `vturb-script-${videoId.replace("vid-", "")}`;

    if (!document.getElementById(scriptId)) {
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
    } else {
      console.debug("VTURB script already present:", { videoId, scriptSrc });
    }

    // Detect when the player injects content, then switch copy/state.
    const el = rootRef.current;
    if (!el) return;

    const checkReady = () => {
      const hasIframe = !!el.querySelector("iframe");
      const hasAnyChild = el.querySelector("vturb-smartplayer")?.children?.length;
      if (hasIframe || hasAnyChild) setIsReady(true);
    };

    checkReady();

    const obs = new MutationObserver(() => checkReady());
    obs.observe(el, { childList: true, subtree: true });

    const timeout = window.setTimeout(() => checkReady(), 3500);

    return () => {
      obs.disconnect();
      window.clearTimeout(timeout);
    };
  }, [videoId, scriptSrc]);

  return (
    <div className="w-full" style={{ maxWidth: 400, margin: "0 auto" }}>
      <div className="relative w-full overflow-hidden rounded-lg bg-black">
        {/* Height spacer (9:16) */}
        <div className="w-full pt-[177.78%]" />

        {/* Player mount */}
        <div ref={rootRef} className="absolute inset-0">
          <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: playerHtml }} />
        </div>

        {/* Poster/Overlay */}
        {overlayVisible && (
          <button
            type="button"
            onClick={() => {
              setOverlayVisible(false);
              // Try to forward the first click to the VTurb player so it starts playing.
              requestAnimationFrame(() => {
                const player = rootRef.current?.querySelector("vturb-smartplayer") as HTMLElement | null;
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
              {isReady ? "Toque para assistir" : "Carregando vídeo…"}
            </p>
          </button>
        )}
      </div>
    </div>
  );
};
