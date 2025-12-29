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
      className="fixed top-2 right-2 md:top-4 md:right-4 z-50 flex items-center gap-1 md:gap-2 rounded-md md:rounded-lg px-2 py-1 md:px-3 md:py-2 transition-all duration-500"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${color}80`,
        boxShadow: `0 0 15px ${color}4D`,
      }}
    >
      <span 
        className="text-xs md:text-sm font-medium transition-all duration-500"
        style={{ 
          color: color,
          textShadow: `0 0 4px ${color}CC`,
        }}
      >
        Credits
      </span>
      <div 
        className="flex items-center gap-0.5 md:gap-1 rounded px-1 py-0.5 md:px-2 md:py-1 transition-all duration-500"
        style={{
          backgroundColor: innerBgColor,
          border: `1px solid ${color}4D`,
        }}
      >
        <span className="text-sm md:text-base">🪙</span>
        <span 
          className="font-bold text-xs md:text-sm transition-all duration-500"
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
