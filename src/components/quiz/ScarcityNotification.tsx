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
}

export const ScarcityNotification = ({ spotsLeft, onPurchase, isActive }: ScarcityNotificationProps) => {
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
      
      // Show notification
      setIsVisible(true);
      
      // Hide after 6 seconds
      setTimeout(() => {
        setIsVisible(false);
        onPurchase();
      }, 6000);
    };

    // Initial delay before first notification (3-8 seconds)
    const initialDelay = Math.random() * 5000 + 3000;
    
    const initialTimeout = setTimeout(() => {
      showNotification();
      
      // Set up recurring notifications with variable timing
      const scheduleNext = () => {
        // Variable interval: 8-18 seconds (to feel natural)
        const nextInterval = Math.random() * 10000 + 8000;
        
        setTimeout(() => {
          if (spotsLeft > 3) {
            showNotification();
            scheduleNext();
          }
        }, nextInterval);
      };
      
      scheduleNext();
    }, initialDelay);

    return () => clearTimeout(initialTimeout);
  }, [isActive]);

  if (!isVisible || !currentName) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-sm z-50 
        transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
    >
      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-4 shadow-2xl border border-green-400/30">
        <p className="text-white text-sm sm:text-base font-bold">
          <span className="font-black">{currentName}</span> just purchased the 23 Techniques
        </p>
        <p className="text-green-100 text-xs sm:text-sm mt-1">
          Only <span className="font-bold text-yellow-300">{spotsLeft}</span> spots left at promotional price
        </p>
      </div>
    </div>
  );
};
