import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import lipsIcon from "@/assets/lips-icon.png";
import heroImage from "@/assets/secao-22-hero.webp";
import chatImage from "@/assets/secao-22-chat.webp";
import bonus1 from "@/assets/secao-22-bonus1.webp";
import bonus2 from "@/assets/secao-22-bonus2.webp";
import offerImage from "@/assets/secao-22-offer-new.png";
import paymentImage from "@/assets/secao-22-payment.webp";
import guaranteeImage from "@/assets/secao-22-guarantee-60days.png";
import secureBadge from "@/assets/secao-22-secure-badge.png";

// Review images
const reviewImages = ["/PS-1.png", "/PS-2.png", "/PS-3.png", "/PS-4.png", "/PS-5.png", "/PS-6.png", "/PS-7.png", "/PS-8.png", "/PS-9.png", "/PS-10.png", "/PS-11.png"];
interface Section22Props {
  onSelect: (e?: React.MouseEvent) => void;
  onBack: () => void;
}
export const Section22 = ({
  onSelect,
  onBack
}: Section22Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(40);
  const offerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % reviewImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for the offer section
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowBanner(true);
      }
    }, {
      threshold: 0.3
    });
    if (offerRef.current) {
      observer.observe(offerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Countdown for spots
  useEffect(() => {
    if (!showBanner) return;
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev <= 3) return 3; // Never goes below 3
        // Random decrease between 1-2 spots every 8-15 seconds
        const decrease = Math.random() > 0.6 ? 2 : 1;
        return prev - decrease;
      });
    }, Math.random() * 7000 + 8000); // Random interval between 8-15 seconds

    return () => clearInterval(interval);
  }, [showBanner]);
  return <div className="min-h-screen min-h-[100dvh] bg-black flex flex-col overflow-y-auto">
      {/* Fixed Red Banner */}
      {showBanner && <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-2 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 shadow-lg animate-fade-in">
          <p className="text-white text-base sm:text-sm md:text-base font-black text-center tracking-wide sm:tracking-widest leading-tight uppercase animate-[pulse_1.5s_ease-in-out_infinite] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            ⚠️ ONLY <span className={`text-yellow-300 underline decoration-2 font-black ${spotsLeft <= 10 ? 'animate-[pulse_0.5s_ease-in-out_infinite]' : ''}`}>{spotsLeft} SPOTS</span> LEFT! ⚠️
          </p>
          {spotsLeft <= 10 && <p className="text-yellow-100 text-[8px] sm:text-[8px] md:text-xs text-center mt-1 sm:mt-1 font-semibold leading-tight">
              when vacancies end price returns to $99,90
            </p>}
        </div>}
      {/* Back Button */}
      <button onClick={onBack} className="absolute top-3 left-3 flex items-center gap-1 text-white hover:text-white/80 transition-colors z-10 text-xs font-medium sm:top-4 sm:left-4 sm:text-sm">
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
          <img src={heroImage} alt="23 Orgasmic Techniques" className="w-full" />
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
              <p className="text-white text-xs sm:text-sm text-center flex-1"> detailed video lessons teaching advanced techniques to make any woman SQUIRT</p>
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
          <img src={chatImage} alt="Student success message" className="w-full rounded-lg" />
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

        </div>


        {/* Part 6 - Limited Time Offer */}
        <div ref={offerRef} className="w-full max-w-xs sm:max-w-md">
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
            <a href="https://go.centerpag.com/PPU38CQ4NDP" target="_blank" rel="noopener noreferrer" className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm sm:text-lg font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-colors active:scale-[0.98] block text-center">
              ACCESS NOW WITH AN 80% DISCOUNT
            </a>

            {/* Payment Methods */}
            <div className="mt-3 sm:mt-4 flex justify-center">
              <img src={paymentImage} alt="Payment methods: Visa, Mastercard, Elo, American Express, Hipercard" className="h-8 sm:h-10 object-contain" />
          </div>

          {/* Part 9 - Reviews Carousel */}
          <div className="mt-4 w-full max-w-[320px] sm:max-w-sm mx-auto relative">
            {/* Left Arrow */}
            <button onClick={() => setCurrentSlide(prev => prev === 0 ? reviewImages.length - 1 : prev - 1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors" aria-label="Anterior">
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Right Arrow */}
            <button onClick={() => setCurrentSlide(prev => prev === reviewImages.length - 1 ? 0 : prev + 1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors" aria-label="Próximo">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="overflow-hidden px-8">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}>
                {reviewImages.map((img, index) => <div key={index} className="w-full flex-shrink-0 px-2">
                    <img src={img} alt={`Review ${index + 1}`} className="w-full h-auto rounded-xl" />
                  </div>)}
              </div>
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-1.5 mt-3">
              {reviewImages.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-[#D92B27]" : "bg-gray-600"}`} />)}
            </div>
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
            <a href="https://go.centerpag.com/PPU38CQ4NDP" target="_blank" rel="noopener noreferrer" className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm sm:text-lg font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl mt-2 transition-colors active:scale-[0.98] block text-center">
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
            <h3 className="text-white text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">    60 DAY GUARANTEE</h3>

            {/* Refund Box */}
            <div className="bg-transparent border border-[#444] rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-white text-sm sm:text-base font-bold text-center mb-2">We guarantee 100% refund</p>
              <p className="text-white text-xs sm:text-sm text-center leading-relaxed">100% Money Back Guarantee, No Questions Asked. If you are not completely satisfied with
For any reason, please email us within 60 days and we will refund every penny. You have ZERO risk</p>
            </div>

            {/* Secure Purchase Box */}
            <div className="bg-transparent border border-[#444] rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex justify-center mb-3">
                <img src={secureBadge} alt="100% Secure" className="h-16 sm:h-20 object-contain" />
              </div>
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
    </div>;
};