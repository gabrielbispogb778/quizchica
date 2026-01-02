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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Declare custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id: string }, HTMLElement>;
    }
  }
}

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

  // Load VTURB scripts
  useEffect(() => {
    const scripts = [
      { id: "vturb-script-69575e9ebfcaaae23ccbacdc", src: "https://scripts.converteai.net/de8b493d-bf00-4ed1-be55-9961440871d6/players/69575e9ebfcaaae23ccbacdc/v4/player.js" },
      { id: "vturb-script-69575eb996807c66f23bd578", src: "https://scripts.converteai.net/de8b493d-bf00-4ed1-be55-9961440871d6/players/69575eb996807c66f23bd578/v4/player.js" },
    ];
    
    scripts.forEach(({ id, src }) => {
      if (!document.getElementById(id)) {
        const s = document.createElement("script");
        s.id = id;
        s.src = src;
        s.async = true;
        document.head.appendChild(s);
      }
    });
  }, []);

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

        {/* Video Testimonials Section */}
        <div className="w-full max-w-xs sm:max-w-md mb-4 space-y-4">
          <vturb-smartplayer id="vid-69575e9ebfcaaae23ccbacdc" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
          <vturb-smartplayer id="vid-69575eb996807c66f23bd578" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
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
            <div className="bg-transparent border border-[#444] rounded-lg p-3 sm:p-4 mb-2">
              <p className="text-white text-sm sm:text-base font-bold text-center mb-2">We guarantee 100% refund</p>
              <p className="text-white text-xs sm:text-sm text-center leading-relaxed">100% Money Back Guarantee, No Questions Asked. If you are not completely satisfied with
For any reason, please email us within 60 days and we will refund every penny. You have ZERO risk</p>
            </div>

            {/* Secure Purchase Box */}
            <div className="bg-transparent border border-[#444] rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex justify-center mb-0">
                <img src={secureBadge} alt="100% Secure" className="h-28 sm:h-32 object-contain" />
              </div>
              <p className="text-white text-sm sm:text-base font-bold text-center mb-2">100% Secure Purchase</p>
              <p className="text-white text-xs sm:text-sm text-center leading-relaxed">
                All information is encrypted and transmitted safely using a Secure Socket Layer protocol.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="w-full mt-8 sm:mt-10">
              <h2 className="text-[#D92B27] text-xl sm:text-2xl font-bold text-center mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-white text-xs sm:text-sm text-center mb-6 leading-relaxed">
                Still have doubts? Here are the most common questions men ask before joining – and honest answers to each one.
              </p>

              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* Question 1 */}
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    What exactly will I receive?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">You'll get instant access to our complete video training program with detailed techniques to make any woman squirt from pleasure.</p>
                    <p className="mb-3">Each technique is demonstrated step-by-step with real models, so you can see exactly what to do, where to touch, and how to adjust based on her reactions.</p>
                    <p className="mb-3">You'll also receive <strong>2 exclusive bonuses (valued at $58)</strong> covering seduction and the best positions.</p>
                    <p>Everything is available online 24/7 from any device – phone, tablet or computer.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 2 */}
                <AccordionItem value="item-2" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    How long are the videos? Will I have to watch hours of content?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">The main program is designed to be <strong>practical and straight to the point</strong> – no fluff, no boring theory.</p>
                    <p className="mb-3">Each technique video is between <strong>5-20 minutes</strong>, so you can watch one technique at a time and practice it the same night.</p>
                    <p>You can start seeing results after watching just the first <strong>2-3 videos</strong> (around 20-30 minutes total).</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 3 */}
                <AccordionItem value="item-3" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Is this just theory, or will I see real demonstrations?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">Every technique is demonstrated with real models in high-quality video.</p>
                    <p className="mb-3">You'll see the exact hand movements, finger positions, pressure levels, and angles that work.</p>
                    <p>This is NOT just someone talking at a camera – you'll see everything in action, so there's zero confusion about what to do.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 4 */}
                <AccordionItem value="item-4" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Are the techniques safe and healthy for my partner?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3"><strong>Absolutely.</strong> All techniques are based on female anatomy, pleasure science, and real feedback from thousands of couples.</p>
                    <p className="mb-2">We teach you how to:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li>- Read her body language and reactions</li>
                      <li>- Start slow and build intensity gradually</li>
                      <li>- Communicate and make sure she's comfortable</li>
                      <li>- Avoid common mistakes that can cause discomfort</li>
                    </ul>
                    <p>When done correctly, these techniques are <strong>100% safe</strong> and incredibly pleasurable for her.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 5 */}
                <AccordionItem value="item-5" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    How long does it take to see results?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">Many men report that their partner responded differently from the very first session – more arousal, stronger orgasms, or even squirting for the first time.</p>
                    <p className="mb-3">However, every woman is unique. Some may squirt on your first try, others may need <strong>3-5 sessions</strong> as you both get comfortable with the techniques.</p>
                    <p>The key is: you'll have <strong>lifetime access</strong>, so you can practice at your own pace and rewatch the lessons as many times as needed.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 6 */}
                <AccordionItem value="item-6" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    What if my partner has never squirted before? Is it too late?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3"><strong>Not at all!</strong> In fact, most women have never squirted – not because they can't, but because their partners didn't know the right techniques.</p>
                    <p className="mb-3">Many of our students' partners had never squirted in their entire lives until they learned these methods.</p>
                    <p>Age, experience level, or past sexual history don't matter – what matters is using the correct stimulation and approach.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 7 */}
                <AccordionItem value="item-7" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    My partner says she "can't" squirt or doesn't believe it's real. Will this still work?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">This is actually very common! Many women are skeptical because:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li>- They've never experienced it before</li>
                      <li>- They think it's just something that happens in movies</li>
                      <li>- Previous partners tried and failed</li>
                    </ul>
                    <p className="mb-3">The good news: the body doesn't lie. When you apply the right techniques with the right touch, her body <span className="text-[#D92B27]">will</span> respond – often in ways that surprise both of you.</p>
                    <p>We also teach you how to create the right mental and emotional environment so she feels safe, relaxed, and open to new sensations.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 8 */}
                <AccordionItem value="item-8" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    What if I'm not very experienced in bed? Will I still be able to do this?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3"><strong>YES!</strong> This program is designed for men at ALL experience levels – from complete beginners to advanced lovers.</p>
                    <p className="mb-2">We start with the basics:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li>- How to touch her body</li>
                      <li>- How to build arousal slowly</li>
                      <li>- How to read her signals</li>
                    </ul>
                    <p className="mb-3">Then we progress to more advanced techniques as you gain confidence.</p>
                    <p>Many of our most successful students started as <span className="text-[#D92B27]">shy, inexperienced guys</span> who were nervous about sex. Now they're confident lovers who know exactly how to satisfy their partners.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 9 */}
                <AccordionItem value="item-9" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    How do I access the content? Is it discreet?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">Right after your purchase, you'll receive an email with your <strong>private login credentials</strong> to access our secure members' area.</p>
                    <p className="mb-3">All content is <strong>100% online</strong> – no physical products, no DVDs, nothing shipped to your home.</p>
                    <p>You can access it from your phone, tablet, or computer – anytime, anywhere, with complete privacy.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 10 */}
                <AccordionItem value="item-10" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Will this show up on my credit card statement? Is it discreet?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">Yes, your purchase will appear with a <strong>discreet, generic description</strong> on your statement – it will NOT say anything explicit or embarrassing.</p>
                    <p>Your privacy is our priority.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 11 */}
                <AccordionItem value="item-11" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Can I download the videos or do I need to be online?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">The videos are streamed online through our secure members' area.</p>
                    <p className="mb-3">This ensures you always have access to the latest <strong>updates and bonus content</strong> we add over time.</p>
                    <p>You can watch from any device with an internet connection – <strong>no downloads necessary</strong>.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 12 */}
                <AccordionItem value="item-12" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    What if I try it and it doesn't work for me?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">That's exactly why we offer a <strong>60-day, 100% money-back guarantee</strong>.</p>
                    <p className="mb-3">Try the entire program. Watch the videos. Practice the techniques. See how your partner responds.</p>
                    <p className="mb-3">If you're not completely satisfied for ANY reason, just email us within 60 days and we'll refund every penny – no questions asked, no complicated forms.</p>
                    <p>You have <strong>zero risk</strong>. The only risk is NOT trying.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 13 */}
                <AccordionItem value="item-13" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Do I have to "prove" I followed all the steps to get a refund?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3"><strong>No.</strong> Unlike other programs, we don't make you jump through hoops.</p>
                    <p className="mb-3">If you're not happy, just send us an email and we'll process your refund immediately.</p>
                    <p>We believe in our program, and we trust you to give it an honest try.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 14 */}
                <AccordionItem value="item-14" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Is this a subscription? Will I be charged again?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3"><strong>NO.</strong> This is a one-time payment only.</p>
                    <p className="mb-3">You pay once, and you get <strong>lifetime access</strong> to the entire program and all future updates.</p>
                    <p>No hidden fees. No monthly charges. No surprises.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 15 */}
                <AccordionItem value="item-15" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    I'm in a long-term relationship and our sex life has become boring. Will this help?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3"><strong>Absolutely.</strong> This is one of the most common reasons men join our program.</p>
                    <p className="mb-2">Learning these techniques can reignite the passion in your relationship by:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li>- Giving her pleasure she's never experienced before</li>
                      <li>- Breaking the routine and trying something new together</li>
                      <li>- Making her feel desired and sexually satisfied</li>
                    </ul>
                    <p>Many couples say this program <span className="text-[#D92B27]">saved their relationship</span> by bringing back the excitement and intimacy they thought was gone forever.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 16 */}
                <AccordionItem value="item-16" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    I'm single right now. Should I wait until I have a partner?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3"><strong>Not at all!</strong> In fact, learning these skills NOW puts you way ahead of other men.</p>
                    <p className="mb-2">When you do meet someone, you'll have the confidence and knowledge to:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li>- Blow her mind from the very first time</li>
                      <li>- Stand out from every other guy she's been with</li>
                      <li>- Create a deep sexual connection that makes her want to keep you around</li>
                    </ul>
                    <p>Plus, you can practice the hand movements and techniques on your own so you're ready when the time comes.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 17 */}
                <AccordionItem value="item-17" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    My partner and I have a great sex life already. Do I still need this?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">If your sex life is already great, imagine how incredible it could be when you add these advanced techniques.</p>
                    <p className="mb-3">Even experienced lovers discover new ways to pleasure their partners and take intimacy to the next level.</p>
                    <p>Think of this as leveling up from <strong>good to unforgettable</strong>.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 18 */}
                <AccordionItem value="item-18" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    I've tried other programs before and they didn't work. Why is this different?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">We hear this a lot. Here's what makes us different:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Real demonstrations with models (not just talking heads)</li>
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Different techniques (not just 1-2 generic tips)</li>
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Step-by-step progressions (from beginner to advanced)</li>
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Focus on HER pleasure (not just ego or performance)</li>
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Lifetime access + updates (not outdated content)</li>
                    </ul>
                    <p>Plus, our <strong>92% success rate</strong> speaks for itself – this isn't theory, it's proven methods that work in real bedrooms with real couples.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 19 */}
                <AccordionItem value="item-19" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Why is it so cheap? Is the quality low?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">Great question! We price it at <strong>$19.90</strong> because we want to make it accessible to as many men as possible.</p>
                    <p className="mb-3">We could easily charge $97 or more (and many competitors do), but our mission is to help men become better lovers – not to get rich off one product.</p>
                    <p className="mb-3">The quality is <strong>top-tier</strong>: professional video production, real demonstrations, expert instruction, and lifetime access.</p>
                    <p>Don't confuse low price with low value – this is a steal for what you're getting.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 20 */}
                <AccordionItem value="item-20" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    How do I know this isn't a scam?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">We understand your concern. Here's why you can trust us:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> 4,387 verified 5-star reviews from real customers</li>
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> 60-day money-back guarantee (no risk to you)</li>
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Secure payment processing with SSL encryption</li>
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Real testimonials with photos and detailed stories</li>
                      <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Professional support team ready to help you</li>
                    </ul>
                    <p>We've been helping men improve their sex lives for years, and our reputation speaks for itself.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 21 */}
                <AccordionItem value="item-21" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Who created this program? What are their qualifications?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">This program was created by <strong>sex educators and relationship experts</strong> who have:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li>- Studied female anatomy and pleasure science</li>
                      <li>- Worked with thousands of couples to improve their intimacy</li>
                      <li>- Tested and refined these techniques based on real-world feedback</li>
                    </ul>
                    <p>Every technique is backed by experience, research, and proven results – not just theory or guesswork.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 22 */}
                <AccordionItem value="item-22" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Do you offer any support or coaching?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">The program is designed to be self-paced and easy to follow <strong>on your own</strong>.</p>
                    <p className="mb-3">However, if you want personalized guidance, we occasionally offer <strong>optional coaching packages</strong> (separate from the main program).</p>
                    <p>Check your members' area after purchase for details.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 23 */}
                <AccordionItem value="item-23" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    Will there be updates or new content added?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3"><strong>Yes!</strong> We regularly update the program with:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li>- New techniques and variations</li>
                      <li>- Bonus lessons based on student feedback</li>
                      <li>- Advanced tips and strategies</li>
                    </ul>
                    <p>All updates are <strong>100% free</strong> for existing members – you'll never pay again.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 24 */}
                <AccordionItem value="item-24" className="border-0">
                  <AccordionTrigger className="text-[#D92B27] text-sm sm:text-base font-semibold text-left hover:no-underline py-3 px-0">
                    I'm still not sure. What should I do?
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-xs sm:text-sm leading-relaxed">
                    <p className="mb-3">Here's the truth: you have nothing to lose and everything to gain.</p>
                    <p className="mb-3">With our <strong>60-day money-back guarantee</strong>, you can try the entire program <span className="text-[#D92B27]">risk-free</span>.</p>
                    <p className="mb-3">If it doesn't work for you, you get your money back. Simple.</p>
                    <p className="mb-3">But if it DOES work (and it does for 92% of men), you'll have a skill that will:</p>
                    <ul className="list-none space-y-1 mb-3">
                      <li>- Make your partner crave you sexually</li>
                      <li>- Give you unshakable confidence in bed</li>
                      <li>- Create deeper intimacy and connection</li>
                      <li>- Set you apart from every other man she's been with</li>
                    </ul>
                    <p>The only question is: <strong>are you ready to become the lover she's been dreaming of?</strong></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* CTA Button after FAQ */}
              <a 
                href="https://go.centerpag.com/PPU38CQ4NDP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs sm:text-base font-bold py-3 sm:py-4 px-3 sm:px-4 rounded-xl mt-6 transition-colors active:scale-[0.98] block text-center"
              >
                👉 YES, I'M READY – GIVE ME INSTANT ACCESS NOW
              </a>
            </div>

            {/* Footer */}
            <p className="text-gray-400 text-xs sm:text-sm text-center italic mt-8">
              Orgasmic Techniques 2025 © All Rights Reserved
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>;
};