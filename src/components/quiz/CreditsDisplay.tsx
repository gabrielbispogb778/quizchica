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
      className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-500"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${color}80`,
        boxShadow: `0 0 15px ${color}4D`,
      }}
    >
      <span 
        className="text-sm font-medium transition-all duration-500"
        style={{ 
          color: color,
          textShadow: `0 0 4px ${color}CC`,
        }}
      >
        Credits
      </span>
      <div 
        className="flex items-center gap-1 rounded px-2 py-1 transition-all duration-500"
        style={{
          backgroundColor: innerBgColor,
          border: `1px solid ${color}4D`,
        }}
      >
        <span className="text-base">🪙</span>
        <span 
          className="font-bold text-sm transition-all duration-500"
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
