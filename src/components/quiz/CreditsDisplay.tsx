import { Coins } from "lucide-react";

interface CreditsDisplayProps {
  credits: number;
}

export const CreditsDisplay = ({ credits }: CreditsDisplayProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-[#0a1f0a] border border-[#00ff00]/50 rounded-lg px-3 py-2 shadow-[0_0_15px_rgba(0,255,0,0.3)]">
      <span className="text-[#00ff00] text-sm font-medium drop-shadow-[0_0_4px_rgba(0,255,0,0.8)]">Credits</span>
      <div className="flex items-center gap-1 bg-[#061206] rounded px-2 py-1 border border-[#00ff00]/30">
        <Coins className="w-4 h-4 text-[#ffd700] drop-shadow-[0_0_4px_rgba(255,215,0,0.8)]" />
        <span className="text-[#00ff00] font-bold text-sm drop-shadow-[0_0_4px_rgba(0,255,0,0.8)]">{credits.toLocaleString()}</span>
      </div>
    </div>
  );
};
