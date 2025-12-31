interface CreditsDisplayProps {
  credits: number;
}

export const CreditsDisplay = ({ credits }: CreditsDisplayProps) => {
  const isZero = credits === 0;
  const color = isZero ? "#ff0000" : "#00ff00";
  const bgColor = isZero ? "#1f0a0a" : "#0a1f0a";
  const innerBgColor = isZero ? "#120606" : "#061206";

  return (
    <div 
      className="fixed top-0.5 right-0.5 md:top-2 md:right-2 z-50 flex items-center gap-0.5 md:gap-1 rounded px-1 py-0.5 md:px-2 md:py-1 transition-all duration-500"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${color}80`,
        boxShadow: `0 0 10px ${color}4D`,
      }}
    >
      <span className="text-[8px] md:text-sm">🪙</span>
      <span 
        className="font-bold text-[8px] md:text-xs transition-all duration-500"
        style={{ 
          color: color,
          textShadow: `0 0 4px ${color}CC`,
        }}
      >
        {credits.toLocaleString()}
      </span>
    </div>
  );
};
