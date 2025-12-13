import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import heroImage from "@/assets/secao-22-hero.webp";
import chatImage from "@/assets/secao-22-chat.webp";
import bonus1 from "@/assets/secao-22-bonus1.webp";
import bonus2 from "@/assets/secao-22-bonus2.webp";
import bonus3 from "@/assets/secao-22-bonus3.webp";
import bonus4 from "@/assets/secao-22-bonus4.webp";
import offerImage from "@/assets/secao-22-offer.webp";
interface Section22Props {
  onSelect: () => void;
  onBack: () => void;
}

export const Section22 = ({ onSelect, onBack }: Section22Props) => {
  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-y-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 flex items-center justify-center w-10 h-10 text-white hover:text-white/80 transition-colors z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-4 pt-8 pb-8">
        {/* Lips Icon */}
        <div className="mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-12 h-12 object-contain" />
        </div>

        {/* Progress Bar - Full (100%) */}
        <div className="w-full max-w-2xl mb-8">
          <div className="h-2 bg-[#D92B27] rounded-full" />
        </div>

        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-8 max-w-xl">
          Discover the 23 Secret Techniques to make any Woman Squirt from Pleasure
        </h1>

        {/* Hero Image */}
        <div className="w-full max-w-md mb-6">
          <img 
            src={heroImage} 
            alt="23 Orgasmic Techniques" 
            className="w-full"
          />
        </div>

        {/* Description Text */}
        <p className="text-white text-sm sm:text-base text-center max-w-md leading-relaxed mb-8 font-bold">
          Enough with mediocre sex. Learn for real how to give your woman intense and pleasurable orgasms!
        </p>

        {/* What Will You Receive Box */}
        <div className="w-full max-w-md bg-[#D92B27] rounded-lg p-6 mb-2">
          <h2 className="text-white text-lg font-bold text-center mb-4">WHAT WILL YOU RECEIVE?</h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">23 detailed video lessons teaching advanced techniques to make any woman SQUIRT</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Video lessons recorded with Real Models</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Practical secrets to bring your partner to orgasm and squirting</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Step-by-step with real examples so you can apply the techniques from today</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Techniques to make your woman excited without even touching her</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Content constantly updated, ensuring you always have access to the best techniques</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">✅</span>
              <p className="text-white text-sm text-center flex-1">Lifetime access</p>
            </div>
          </div>
        </div>

        {/* Students Reviews Section */}
        <p className="text-white text-base font-semibold text-center mb-2">
          Look at what our students say 👇
        </p>

        {/* Reviews Card */}
        <div className="w-full max-w-md bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg p-6 mb-2">
          <div className="flex justify-center gap-1 mb-2">
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
          </div>
          <p className="text-gray-800 text-4xl font-bold text-center">4.387</p>
          <p className="text-gray-800 text-xl font-bold text-center">5-Star Reviews</p>
          <p className="text-gray-500 text-xs text-center mt-1">Based on reviews from men who applied the techniques</p>
        </div>

        {/* WhatsApp Chat Screenshot */}
        <div className="w-full max-w-md mb-2">
          <img 
            src={chatImage} 
            alt="Student success message" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Subscribe Banner */}
        <div className="w-full max-w-md bg-[#D92B27] rounded-lg p-4 mb-2">
          <p className="text-white text-base font-bold text-center mb-1">
            Subscribe today and receive +4 Gifts!
          </p>
          <p className="text-white text-xs text-center">
            By completing your enrollment today, you'll receive immediate access and all these Bonuses 🎁
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="w-full max-w-md space-y-2 mb-2">
          {/* Bonus 1 */}
          <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
            <img src={bonus1} alt="Bonus 1" className="w-24 h-auto mx-auto mb-3" />
            <p className="text-white text-sm italic mb-2">
              Discover the best positions that facilitate orgasm and increase pleasure and connection with your woman.
            </p>
            <p className="text-sm">
              <span className="text-[#D92B27]">From </span>
              <span className="text-[#D92B27] line-through">$29</span>
              <span className="text-white"> for </span>
              <span className="text-green-500 font-bold">$0</span>
            </p>
          </div>

          {/* Bonus 2 */}
          <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
            <img src={bonus2} alt="Bonus 2" className="w-24 h-auto mx-auto mb-3" />
            <p className="text-white text-sm italic mb-2">
              Boost your game with the power of Seduction. Attract and conquer any woman with this Secret Formula!
            </p>
            <p className="text-sm">
              <span className="text-[#D92B27]">From </span>
              <span className="text-[#D92B27] line-through">$29</span>
              <span className="text-white"> for </span>
              <span className="text-green-500 font-bold">$0</span>
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
            <img src={bonus3} alt="Bonus 3" className="w-24 h-auto mx-auto mb-3" />
            <p className="text-white text-sm italic mb-2">
              Learn how to awaken the wild side of any shy woman, with these foolproof techniques.
            </p>
            <p className="text-sm">
              <span className="text-[#D92B27]">From </span>
              <span className="text-[#D92B27] line-through">$29</span>
              <span className="text-white"> for </span>
              <span className="text-green-500 font-bold">$0</span>
            </p>
          </div>

          {/* Bonus 4 */}
          <div className="bg-black border border-gray-800 rounded-lg p-4 text-center">
            <img src={bonus4} alt="Bonus 4" className="w-24 h-auto mx-auto mb-3" />
            <p className="text-white text-sm italic mb-2">
              Understand how the female mind works and use that knowledge to conquer any woman.
            </p>
            <p className="text-sm">
              <span className="text-[#D92B27]">From </span>
              <span className="text-[#D92B27] line-through">$29</span>
              <span className="text-white"> for </span>
              <span className="text-green-500 font-bold">$0</span>
            </p>
          </div>
        </div>

        {/* Attention Banner */}
        <div className="w-full max-w-md bg-[#22c55e] rounded-2xl p-4 mb-2">
          <div className="flex items-start gap-3">
            <span className="text-white text-xl">☑️</span>
            <div>
              <p className="text-white text-base">
                <span className="text-yellow-300">🔔</span> <span className="font-bold text-yellow-300">ATTENTION:</span>
              </p>
              <p className="text-white text-base">
                This offer will only be available for the next 15 minutes... Access now and get 80% off!
              </p>
            </div>
          </div>
        </div>

        {/* Limited Time Offer Banner */}
        <div className="w-full max-w-md bg-[#22c55e] rounded-lg p-3 mb-2">
          <p className="text-white text-base font-bold text-center tracking-wider">
            LIMITED TIME OFFER! 👇
          </p>
        </div>

        {/* Offer Box */}
        <div className="w-full max-w-md bg-[#D92B27] rounded-lg overflow-hidden mb-2">
          <div className="flex items-stretch">
            <div className="w-2 bg-orange-500"></div>
            <div className="flex-1 p-4 flex items-center justify-between gap-3">
              <p className="text-white text-lg font-bold leading-tight">
                23 Orgasmic Techniques + 4 Exclusive Bonuses! From $99.90
              </p>
              <div className="bg-[#22c55e] rounded-lg px-4 py-3 text-center shrink-0">
                <p className="text-white text-xs">FOR ONLY</p>
                <p className="text-white text-2xl font-bold">$19,90</p>
                <p className="text-white text-[10px]">ONE-TIME</p>
                <p className="text-white text-[10px]">PAYMENT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Don't Worry Section */}
        <div className="w-full max-w-md text-center mb-2 px-4">
          <p className="text-[#D92B27] text-xl font-bold mb-2">DON'T WORRY!</p>
          <p className="text-white text-base">
            The amount of <span className="text-[#D92B27] underline">$19.90 USD</span> will be automatically converted to your country's currency when you click the button below!
          </p>
        </div>
      </div>
    </div>
  );
};
