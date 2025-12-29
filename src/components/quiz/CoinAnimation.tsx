import { useEffect, useState } from "react";

interface Coin {
  id: number;
  startX: number;
  startY: number;
  delay: number;
}

interface CoinAnimationProps {
  trigger: number; // Changes when animation should play
  originRef?: { x: number; y: number } | null;
}

export const CoinAnimation = ({ trigger, originRef }: CoinAnimationProps) => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    if (trigger === 0) return;

    // Create multiple coins with random positions near the click origin
    const newCoins: Coin[] = [];
    const baseX = originRef?.x ?? window.innerWidth / 2;
    const baseY = originRef?.y ?? window.innerHeight / 2;

    for (let i = 0; i < 8; i++) {
      newCoins.push({
        id: Date.now() + i,
        startX: baseX + (Math.random() - 0.5) * 100,
        startY: baseY + (Math.random() - 0.5) * 50,
        delay: i * 50,
      });
    }

    setCoins(newCoins);

    // Clean up coins after animation
    const timer = setTimeout(() => {
      setCoins([]);
    }, 1500);

    return () => clearTimeout(timer);
  }, [trigger, originRef]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute text-2xl animate-coin-fly"
          style={{
            left: coin.startX,
            top: coin.startY,
            animationDelay: `${coin.delay}ms`,
            "--target-x": `${window.innerWidth - 80 - coin.startX}px`,
            "--target-y": `${24 - coin.startY}px`,
          } as React.CSSProperties}
        >
          🪙
        </div>
      ))}
    </div>
  );
};
