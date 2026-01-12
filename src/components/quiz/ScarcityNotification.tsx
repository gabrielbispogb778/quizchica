import { useEffect, useState } from "react";

// 30 English names from USA, Canada, UK, Australia
const buyerNames = [
  "James M.", "Michael R.", "William T.", "David S.", "Robert L.",
  "John K.", "Thomas H.", "Christopher B.", "Daniel W.", "Matthew P.",
  "Andrew C.", "Joshua N.", "Ryan F.", "Brandon G.", "Kevin D.",
  "Jason A.", "Justin E.", "Tyler O.", "Austin I.", "Zachary V.",
  "Ethan Q.", "Nathan J.", "Samuel X.", "Benjamin U.", "Alexander Y.",
  "Nicholas Z.", "Jacob W.", "Dylan M.", "Connor S.", "Liam R."
];

interface ScarcityNotificationProps {
  spotsLeft: number;
  onPurchase: () => void;
  isActive: boolean;
  onNotificationShow?: (visible: boolean) => void;
}

export const ScarcityNotification = ({ spotsLeft, onPurchase, isActive, onNotificationShow }: ScarcityNotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [usedNames, setUsedNames] = useState<string[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const showNotification = () => {
      // Get available names (not used yet)
      const availableNames = buyerNames.filter(name => !usedNames.includes(name));
      
      // If all names used, reset
      if (availableNames.length === 0) {
        setUsedNames([]);
        return;
      }

      // Pick random name
      const randomName = availableNames[Math.floor(Math.random() * availableNames.length)];
      setCurrentName(randomName);
      setUsedNames(prev => [...prev, randomName]);
      
      // Decrease spots immediately when notification appears
      onPurchase();
      
      // Show notification and red banner
      setIsVisible(true);
      onNotificationShow?.(true);
      
      // Hide after 6 seconds
      setTimeout(() => {
        setIsVisible(false);
        onNotificationShow?.(false);
      }, 6000);
    };

    // First notification should appear immediately when the user reaches the trigger point
    const initialDelay = 0;
    
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const initialTimeout = setTimeout(() => {
      showNotification();
      
      // Set up recurring notifications with variable timing
      const scheduleNext = () => {
        // Variable interval: 10-18 seconds (to feel natural)
        const nextInterval = Math.random() * 8000 + 10000;
        
        timeoutId = setTimeout(() => {
          if (spotsLeft > 3) {
            showNotification();
            scheduleNext();
          }
        }, nextInterval);
      };
      
      scheduleNext();
    }, initialDelay);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(timeoutId);
    };
  }, [isActive]);

  if (!isVisible || !currentName) return null;

  return (
    <div 
      className={`fixed bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm z-50 
        transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
    >
      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-2xl border border-green-400/30">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm sm:text-lg">✓</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs sm:text-base font-bold leading-tight truncate">
              <span className="font-black">{currentName}</span> just purchased
            </p>
            <p className="text-green-100 text-[10px] sm:text-sm leading-tight">
              the 23 Techniques
            </p>
          </div>
        </div>
        <div className="mt-2 bg-yellow-400/20 rounded-md px-2 py-1">
          <p className="text-yellow-300 text-[10px] sm:text-sm font-bold text-center">
            🔥 Only <span className="font-black text-yellow-200">{spotsLeft}</span> spots left at promotional price!
          </p>
        </div>
      </div>
    </div>
  );
};
