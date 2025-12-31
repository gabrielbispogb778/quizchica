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
      className="fixed top-1 right-1 md:top-2 md:right-2 z-50 flex flex-col md:flex-row items-center gap-0.5 md:gap-1 rounded md:rounded-md px-1.5 py-1 md:px-2 md:py-1 transition-all duration-500"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${color}80`,
        boxShadow: `0 0 10px ${color}4D`,
      }}
    >
      <span 
        className="text-[8px] md:text-xs font-medium transition-all duration-500"
        style={{ 
          color: color,
          textShadow: `0 0 4px ${color}CC`,
        }}
      >
        Credits
      </span>
      <div 
        className="flex items-center gap-0.5 rounded px-1 py-0.5 md:px-1.5 transition-all duration-500"
        style={{
          backgroundColor: innerBgColor,
          border: `1px solid ${color}4D`,
        }}
      >
        <span className="text-xs md:text-sm">🪙</span>
        <span 
          className="font-bold text-[10px] md:text-xs transition-all duration-500"
          style={{ 
            color: color,
            textShadow: `0 0 4px ${color}CC`,
          }}
        >
          {credits.toLocaleString()}
        </span>
      </div>
    </div>
  );
};
