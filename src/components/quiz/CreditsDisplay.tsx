import { Coins } from "lucide-react";

interface CreditsDisplayProps {
  credits: number;
}

export const CreditsDisplay = ({ credits }: CreditsDisplayProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-[#1a1a2e] border border-[#00ff88]/30 rounded-lg px-3 py-2 shadow-lg">
      <span className="text-white text-sm font-medium">Credits</span>
      <div className="flex items-center gap-1 bg-[#0d0d1a] rounded px-2 py-1">
        <Coins className="w-4 h-4 text-[#00ff88]" />
        <span className="text-[#00ff88] font-bold text-sm">{credits.toLocaleString()}</span>
      </div>
    </div>
  );
};
