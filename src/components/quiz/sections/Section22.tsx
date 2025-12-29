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
import guaranteeImage from "@/assets/secao-22-guarantee-badge.png";
interface Section22Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}

export const Section22 = ({ onSelect, onBack }: Section22Props) => {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-black flex flex-col overflow-y-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-3 left-3 flex items-center gap-1 text-white hover:text-white/80 transition-colors z-10 text-xs font-medium sm:top-4 sm:left-4 sm:text-sm"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-3 pt-6 pb-8 sm:px-4 sm:pt-8">
        {/* Lips Icon */}
        <div className="mb-3 sm:mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-20 h-20 object-contain" />
        </div>

        {/* Progress Bar - Full (100%) */}
        <div className="w-full max-w-sm sm:max-w-2xl mb-6 sm:mb-8 px-2 sm:px-0">
          <div className="h-2 bg-[#D92B27] rounded-full" />
        </div>

        {/* Title */}
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 max-w-sm sm:max-w-xl px-2">
          Discover the 23 Secret Techniques to make any Woman Squirt from Pleasure
        </h1>

        {/* Hero Image */}
        <div className="w-full max-w-xs sm:max-w-md mb-4 sm:mb-6">
          <img 
            src={heroImage} 
            alt="23 Orgasmic Techniques" 
            className="w-full"
          />
        </div>

        {/* Description Text */}
        <p className="text-white text-xs sm:text-sm md:text-base text-center max-w-xs sm:max-w-md leading-relaxed mb-6 sm:mb-8 font-bold px-2">
          Enough with mediocre sex. Learn for real how to give your woman intense and pleasurable orgasms!
        </p>

        {/* What Will You Receive Box */}
        <div className="w-full max-w-xs sm:max-w-md bg-[#D92B27] rounded-lg p-4 sm:p-6 mb-2">
          <h2 className="text-white text-base sm:text-lg font-bold text-center mb-3 sm:mb-4">WHAT WILL YOU RECEIVE?</h2>
          
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5 text-sm sm:text-base">✅</span>
              <p className="text-white text-xs sm:text-sm text-center flex-1">23 detailed video lessons teaching advanced techniques to make any woman SQUIRT</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5 text-sm sm:text-base">✅</span>
              <p className="text-white text-xs sm:text-sm text-center flex-1">Video lessons recorded with Real Models</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5 text-sm sm:text-base">✅</span>
              <p className="text-white text-xs sm:text-sm text-center flex-1">Practical secrets to bring your partner to orgasm and squirting</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5 text-sm sm:text-base">✅</span>
              <p className="text-white text-xs sm:text-sm text-center flex-1">Step-by-step with real examples so you can apply the techniques from today</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5 text-sm sm:text-base">✅</span>
              <p className="text-white text-xs sm:text-sm text-center flex-1">Techniques to make your woman excited without even touching her</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5 text-sm sm:text-base">✅</span>
              <p className="text-white text-xs sm:text-sm text-center flex-1">Content constantly updated, ensuring you always have access to the best techniques</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5 text-sm sm:text-base">✅</span>
              <p className="text-white text-xs sm:text-sm text-center flex-1">Lifetime access</p>
            </div>
          </div>
        </div>

        {/* Students Reviews Section */}
        <p className="text-white text-sm sm:text-base font-semibold text-center mb-2">
          Look at what our students say 👇
        </p>

        {/* Reviews Card */}
        <div className="w-full max-w-xs sm:max-w-md bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg p-4 sm:p-6 mb-2">
          <div className="flex justify-center gap-1 mb-2">
            <span className="text-xl sm:text-2xl">⭐</span>
            <span className="text-xl sm:text-2xl">⭐</span>
            <span className="text-xl sm:text-2xl">⭐</span>
            <span className="text-xl sm:text-2xl">⭐</span>
            <span className="text-xl sm:text-2xl">⭐</span>
          </div>
          <p className="text-gray-800 text-3xl sm:text-4xl font-bold text-center">4.387</p>
          <p className="text-gray-800 text-lg sm:text-xl font-bold text-center">5-Star Reviews</p>
          <p className="text-gray-500 text-[10px] sm:text-xs text-center mt-1">Based on reviews from men who applied the techniques</p>
        </div>

        {/* WhatsApp Chat Screenshot */}
        <div className="w-full max-w-xs sm:max-w-md mb-2">
          <img 
            src={chatImage} 
            alt="Student success message" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Subscribe Banner */}
        <div className="w-full max-w-xs sm:max-w-md bg-[#D92B27] rounded-lg p-3 sm:p-4 mb-2">
          <p className="text-white text-sm sm:text-base font-bold text-center mb-1">
            Subscribe today and receive +4 Gifts!
          </p>
          <p className="text-white text-[10px] sm:text-xs text-center">
            By completing your enrollment today, you'll receive immediate access and all these Bonuses 🎁
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="w-full max-w-xs sm:max-w-md space-y-2 mb-2">
          {/* Bonus 1 */}
          <div className="bg-black border border-gray-800 rounded-lg p-3 sm:p-4 text-center">
            <img src={bonus1} alt="Bonus 1" className="w-20 sm:w-24 h-auto mx-auto mb-2 sm:mb-3" />
            <p className="text-white text-xs sm:text-sm italic mb-2">
              Discover the best positions that facilitate orgasm and increase pleasure and connection with your woman.
            </p>
            <p className="text-xs sm:text-sm">
              <span className="text-[#D92B27]">From </span>
              <span className="text-[#D92B27] line-through">$29</span>
              <span className="text-white"> for </span>
              <span className="text-green-500 font-bold">$0</span>
            </p>
          </div>

          {/* Bonus 2 */}
          <div className="bg-black border border-gray-800 rounded-lg p-3 sm:p-4 text-center">
            <img src={bonus2} alt="Bonus 2" className="w-20 sm:w-24 h-auto mx-auto mb-2 sm:mb-3" />
            <p className="text-white text-xs sm:text-sm italic mb-2">
              Boost your game with the power of Seduction. Attract and conquer any woman with this Secret Formula!
            </p>
            <p className="text-xs sm:text-sm">
              <span className="text-[#D92B27]">From </span>
              <span className="text-[#D92B27] line-through">$29</span>
              <span className="text-white"> for </span>
              <span className="text-green-500 font-bold">$0</span>
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="bg-black border border-gray-800 rounded-lg p-3 sm:p-4 text-center">
            <img src={bonus3} alt="Bonus 3" className="w-20 sm:w-24 h-auto mx-auto mb-2 sm:mb-3" />
            <p className="text-white text-xs sm:text-sm italic mb-2">
              Learn how to awaken the wild side of any shy woman, with these foolproof techniques.
            </p>
            <p className="text-xs sm:text-sm">
              <span className="text-[#D92B27]">From </span>
              <span className="text-[#D92B27] line-through">$29</span>
              <span className="text-white"> for </span>
              <span className="text-green-500 font-bold">$0</span>
            </p>
          </div>

          {/* Bonus 4 */}
          <div className="bg-black border border-gray-800 rounded-lg p-3 sm:p-4 text-center">
            <img src={bonus4} alt="Bonus 4" className="w-20 sm:w-24 h-auto mx-auto mb-2 sm:mb-3" />
            <p className="text-white text-xs sm:text-sm italic mb-2">
              Understand how the female mind works and use that knowledge to conquer any woman.
            </p>
            <p className="text-xs sm:text-sm">
              <span className="text-[#D92B27]">From </span>
              <span className="text-[#D92B27] line-through">$29</span>
              <span className="text-white"> for </span>
              <span className="text-green-500 font-bold">$0</span>
            </p>
          </div>
        </div>

        {/* Part 5 - Attention Banner */}
        <div className="w-full max-w-xs sm:max-w-md bg-[#22c55e] rounded-2xl p-4 sm:p-5 mb-3 border-2 border-[#16a34a]">
          <div className="flex items-start gap-2 sm:gap-3">
            <span className="text-lg sm:text-xl">✅</span>
            <div>
              <p className="text-white text-base sm:text-lg font-bold mb-1">
                🚨 ATTENTION:
              </p>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                This offer will only be available for the next 15 minutes... Access now and get 80% off!
              </p>
            </div>
          </div>
        </div>

        {/* Part 6 - Limited Time Offer */}
        <div className="w-full max-w-xs sm:max-w-md">
          {/* Red banner */}
          <div className="bg-[#dc2626] rounded-t-xl py-2 sm:py-3 px-3 sm:px-4">
            <p className="text-white text-xs sm:text-sm font-bold text-center tracking-wider">
              LIMITED TIME OFFER! 👇
            </p>
          </div>
          
          {/* Black box with offer */}
          <div className="bg-black border-2 border-[#333] rounded-b-xl p-3 sm:p-5">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* White vertical bar */}
              <div className="w-1 sm:w-1.5 h-20 sm:h-24 bg-white rounded-full shrink-0"></div>
              
              {/* Text */}
              <p className="text-white text-sm sm:text-xl font-bold italic leading-tight flex-1">
                23 Orgasmic Techniques + 4 Exclusive Bonuses! From $99.90
              </p>
              
              {/* Price box */}
              <div className="bg-[#4a1c1c] rounded-lg px-2 sm:px-4 py-2 sm:py-3 text-center shrink-0">
                <p className="text-white text-[8px] sm:text-[10px] font-medium tracking-wide">FOR ONLY</p>
                <p className="text-white text-lg sm:text-2xl font-bold">$19,90</p>
                <p className="text-white text-[8px] sm:text-[10px] tracking-wide">ONE-TIME</p>
                <p className="text-white text-[8px] sm:text-[10px] tracking-wide">PAYMENT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 7 - Don't Worry + Product Showcase */}
        <div className="w-full max-w-xs sm:max-w-md mt-4 sm:mt-6">
          {/* Don't Worry Text */}
          <div className="text-center mb-3 sm:mb-4">
            <div className="bg-[#dc2626] inline-block px-3 sm:px-4 py-1 rounded mb-2">
              <p className="text-white text-base sm:text-lg font-bold">DON'T WORRY!</p>
            </div>
            <p className="text-white text-xs sm:text-sm leading-relaxed px-2">
              The amount of <span className="text-[#ef4444] underline">$19.90 USD</span> will be automatically converted to your country's currency when you click the button below!
            </p>
          </div>

          {/* Offer Image with Bonuses */}
          <div className="rounded-xl overflow-hidden">
            <img src={offerImage} alt="23 Orgasmic Techniques + Bonuses" className="w-full h-auto" />
          </div>

          {/* Part 8 - CTA Button + Payment Methods */}
          <div className="mt-4 sm:mt-6 w-full">
            {/* Green CTA Button */}
            <a 
              href="https://go.centerpag.com/PPU38CQ4NDP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm sm:text-lg font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-colors active:scale-[0.98] block text-center"
            >
              ACCESS NOW WITH AN 80% DISCOUNT
            </a>

            {/* Payment Methods */}
            <div className="mt-3 sm:mt-4 flex justify-center">
              <img src={paymentImage} alt="Payment methods: Visa, Mastercard, Elo, American Express, Hipercard" className="h-8 sm:h-10 object-contain" />
          </div>

          {/* Part 9 - Reviews/Testimonials */}
          <div className="mt-1 w-full flex justify-center">
            <img src={reviewsImage} alt="Customer reviews and testimonials" className="max-w-xs sm:max-w-md w-full h-auto rounded-xl" />
          </div>

          {/* Part 10 - Limited Time Offer + CTA */}
          <div className="w-full mt-3">
            {/* Red banner */}
            <div className="bg-[#dc2626] rounded-t-xl py-2 sm:py-3 px-3 sm:px-4">
              <p className="text-white text-xs sm:text-sm font-bold text-center tracking-wider">
                LIMITED TIME OFFER! 👇
              </p>
            </div>
            
            {/* Black box with offer */}
            <div className="bg-black border-2 border-[#333] border-t-0 rounded-b-xl p-3 sm:p-5">
              <div className="flex items-center gap-2 sm:gap-4">
                {/* White vertical bar */}
                <div className="w-1 sm:w-1.5 h-20 sm:h-24 bg-white rounded-full shrink-0"></div>
                
                {/* Text */}
                <p className="text-white text-sm sm:text-xl font-bold italic leading-tight flex-1">
                  23 Orgasmic Techniques + 4 Exclusive Bonuses! From $99.90
                </p>
                
                {/* Price box */}
                <div className="bg-[#4a1c1c] rounded-lg px-2 sm:px-4 py-2 sm:py-3 text-center shrink-0">
                  <p className="text-white text-[8px] sm:text-[10px] font-medium tracking-wide">FOR ONLY</p>
                  <p className="text-white text-lg sm:text-2xl font-bold">$19,90</p>
                  <p className="text-white text-[8px] sm:text-[10px] tracking-wide">ONE-TIME</p>
                  <p className="text-white text-[8px] sm:text-[10px] tracking-wide">PAYMENT</p>
                </div>
              </div>
            </div>

            {/* Green CTA Button - Separate */}
            <a 
              href="https://go.centerpag.com/PPU38CQ4NDP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm sm:text-lg font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl mt-2 transition-colors active:scale-[0.98] block text-center"
            >
              ACCESS RIGHT NOW
            </a>
          </div>

          {/* Part 11 - 7 Day Guarantee */}
          <div className="w-full max-w-xs sm:max-w-md mt-6 sm:mt-8">
            {/* Guarantee Badge */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <img src={guaranteeImage} alt="7 Day Guarantee" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
            </div>

            {/* Title */}
            <h3 className="text-white text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">7 DAY GUARANTEE</h3>

            {/* Refund Box */}
            <div className="bg-transparent border border-[#444] rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-white text-sm sm:text-base font-bold text-center mb-2">We guarantee 100% refund</p>
              <p className="text-white text-xs sm:text-sm text-center leading-relaxed">
                We believe so much in our program that we are willing to return your money if you don't see results and can prove you followed all the steps of the program. Please check our Refund Policy to understand all requirements.
              </p>
            </div>

            {/* Secure Purchase Box */}
            <div className="bg-transparent border border-[#444] rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-white text-sm sm:text-base font-bold text-center mb-2">100% Secure Purchase</p>
              <p className="text-white text-xs sm:text-sm text-center leading-relaxed">
                All information is encrypted and transmitted safely using a Secure Socket Layer protocol.
              </p>
            </div>

            {/* Footer */}
            <p className="text-gray-400 text-xs sm:text-sm text-center italic">
              Orgasmic Techniques 2025 © All Rights Reserved
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
