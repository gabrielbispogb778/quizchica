import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import heroImage from "@/assets/secao-22-hero.webp";
import chatImage from "@/assets/secao-22-chat.webp";
import bonus1 from "@/assets/secao-22-bonus1.webp";
import bonus2 from "@/assets/secao-22-bonus2.webp";
import bonus3 from "@/assets/secao-22-bonus3.webp";
import bonus4 from "@/assets/secao-22-bonus4.webp";
import offerImage from "@/assets/secao-22-offer.webp";
import paymentImage from "@/assets/secao-22-payment.webp";
import reviewsImage from "@/assets/secao-22-reviews-new.png";
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

        {/* Part 5 - Attention Banner */}
        <div className="w-full max-w-md bg-[#22c55e] rounded-2xl p-5 mb-3 border-2 border-[#16a34a]">
          <div className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <div>
              <p className="text-white text-lg font-bold mb-1">
                🚨 ATTENTION:
              </p>
              <p className="text-white text-base leading-relaxed">
                This offer will only be available for the next 15 minutes... Access now and get 80% off!
              </p>
            </div>
          </div>
        </div>

        {/* Part 6 - Limited Time Offer */}
        <div className="w-full max-w-md">
          {/* Red banner */}
          <div className="bg-[#dc2626] rounded-t-xl py-3 px-4">
            <p className="text-white text-sm font-bold text-center tracking-wider">
              LIMITED TIME OFFER! 👇
            </p>
          </div>
          
          {/* Black box with offer */}
          <div className="bg-black border-2 border-[#333] rounded-b-xl p-5">
            <div className="flex items-center gap-4">
              {/* White vertical bar */}
              <div className="w-1.5 h-24 bg-white rounded-full shrink-0"></div>
              
              {/* Text */}
              <p className="text-white text-xl font-bold italic leading-tight flex-1">
                23 Orgasmic Techniques + 4 Exclusive Bonuses! From $99.90
              </p>
              
              {/* Price box */}
              <div className="bg-[#4a1c1c] rounded-lg px-4 py-3 text-center shrink-0">
                <p className="text-white text-[10px] font-medium tracking-wide">FOR ONLY</p>
                <p className="text-white text-2xl font-bold">$19,90</p>
                <p className="text-white text-[10px] tracking-wide">ONE-TIME</p>
                <p className="text-white text-[10px] tracking-wide">PAYMENT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 7 - Don't Worry + Product Showcase */}
        <div className="w-full max-w-md mt-6">
          {/* Don't Worry Text */}
          <div className="text-center mb-4">
            <div className="bg-[#dc2626] inline-block px-4 py-1 rounded mb-2">
              <p className="text-white text-lg font-bold">DON'T WORRY!</p>
            </div>
            <p className="text-white text-sm leading-relaxed px-2">
              The amount of <span className="text-[#ef4444] underline">$19.90 USD</span> will be automatically converted to your country's currency when you click the button below!
            </p>
          </div>

          {/* Offer Image with Bonuses */}
          <div className="rounded-xl overflow-hidden">
            <img src={offerImage} alt="23 Orgasmic Techniques + Bonuses" className="w-full h-auto" />
          </div>

          {/* Part 8 - CTA Button + Payment Methods */}
          <div className="mt-6 w-full">
            {/* Green CTA Button */}
            <button 
              onClick={onSelect}
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-lg font-bold py-4 px-6 rounded-xl transition-colors"
            >
              ACCESS NOW WITH AN 80% DISCOUNT
            </button>

            {/* Payment Methods */}
            <div className="mt-4 flex justify-center">
              <img src={paymentImage} alt="Payment methods: Visa, Mastercard, Elo, American Express, Hipercard" className="h-10 object-contain" />
          </div>

          {/* Part 9 - Reviews/Testimonials */}
          <div className="mt-6 w-full">
            <img src={reviewsImage} alt="Customer reviews and testimonials" className="w-full h-auto rounded-xl" />
          </div>

          {/* Part 10 - Limited Time Offer + CTA */}
          <div className="w-full mt-6">
            {/* Red banner */}
            <div className="bg-[#dc2626] rounded-t-xl py-3 px-4">
              <p className="text-white text-sm font-bold text-center tracking-wider">
                LIMITED TIME OFFER! 👇
              </p>
            </div>
            
            {/* Black box with offer */}
            <div className="bg-black border-2 border-[#333] border-t-0 rounded-b-xl p-5">
              <div className="flex items-center gap-4">
                {/* White vertical bar */}
                <div className="w-1.5 h-24 bg-white rounded-full shrink-0"></div>
                
                {/* Text */}
                <p className="text-white text-xl font-bold italic leading-tight flex-1">
                  23 Orgasmic Techniques + 4 Exclusive Bonuses! From $99.90
                </p>
                
                {/* Price box */}
                <div className="bg-[#4a1c1c] rounded-lg px-4 py-3 text-center shrink-0">
                  <p className="text-white text-[10px] font-medium tracking-wide">FOR ONLY</p>
                  <p className="text-white text-2xl font-bold">$19,90</p>
                  <p className="text-white text-[10px] tracking-wide">ONE-TIME</p>
                  <p className="text-white text-[10px] tracking-wide">PAYMENT</p>
                </div>
              </div>
            </div>

            {/* Green CTA Button - Separate */}
            <button 
              onClick={onSelect}
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-lg font-bold py-4 px-6 rounded-xl mt-4 transition-colors"
            >
              ACCESS RIGHT NOW
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
