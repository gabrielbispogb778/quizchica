import { useEffect, useMemo, useRef, useState } from "react";
import { Play } from "lucide-react";

interface VturbPlayerProps {
  videoId: string;
  scriptSrc: string;
}

export const VturbPlayer = ({ videoId, scriptSrc }: VturbPlayerProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  const playerHtml = useMemo(
    () =>
      `<vturb-smartplayer id="${videoId}" style="display:block;margin:0 auto;width:100%;max-width:400px;"></vturb-smartplayer>`,
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

    // Detect when the player injects its iframe, then remove placeholder
    const el = rootRef.current;
    if (!el) return;

    const checkReady = () => {
      const hasIframe = !!el.querySelector("iframe");
      if (hasIframe) setIsReady(true);
    };

    checkReady();

    const obs = new MutationObserver(() => checkReady());
    obs.observe(el, { childList: true, subtree: true });

    const timeout = window.setTimeout(() => checkReady(), 2500);

    return () => {
      obs.disconnect();
      window.clearTimeout(timeout);
    };
  }, [videoId, scriptSrc]);

  return (
    <div className="relative w-full" style={{ maxWidth: 400, margin: "0 auto" }}>
      {!isReady && (
        <div
          className="absolute inset-0 rounded-lg flex flex-col items-center justify-center z-10 bg-black/70 animate-fade-in"
          style={{ aspectRatio: "9/16" }}
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 bg-black/60 border border-white/20">
            <Play className="w-7 h-7 text-white ml-0.5" />
          </div>
          <p className="text-white text-xs sm:text-sm font-semibold text-center px-4">
            Toque para assistir (carregando vídeo)
          </p>
        </div>
      )}

      <div ref={rootRef} className="w-full">
        <div dangerouslySetInnerHTML={{ __html: playerHtml }} />
      </div>
    </div>
  );
};
