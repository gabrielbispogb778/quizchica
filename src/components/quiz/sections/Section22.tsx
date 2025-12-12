import { ChevronLeft } from "lucide-react";
import lipsIcon from "@/assets/lips-icon.png";
import heroImage from "@/assets/secao-22-hero.webp";
import reviewsImage from "@/assets/secao-22-reviews.webp";
import chatImage from "@/assets/secao-22-chat.webp";
import bonus1Image from "@/assets/secao-22-bonus1.webp";
import bonus2Image from "@/assets/secao-22-bonus2.webp";
import bonus3Image from "@/assets/secao-22-bonus3.webp";
import bonus4Image from "@/assets/secao-22-bonus4.webp";
import offerImage from "@/assets/secao-22-offer.webp";
import paymentImage from "@/assets/secao-22-payment.webp";
import guaranteeImage from "@/assets/secao-22-guarantee.jpg";

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
        className="fixed top-4 left-4 flex items-center justify-center w-10 h-10 border border-white/30 rounded-md text-white hover:text-white/80 hover:border-white/50 transition-colors z-20 bg-black/50 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-4 pt-16 pb-8">
        {/* Lips Icon */}
        <div className="mb-4">
          <img src={lipsIcon} alt="Lips icon" className="w-20 h-20 object-contain" />
        </div>

        {/* Quiz Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D92B27] transition-all duration-300"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={heroImage} 
            alt="23 Orgasmic Techniques" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Reviews Image */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={reviewsImage} 
            alt="4.387 5-Star Reviews" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Chat Testimonial */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={chatImage} 
            alt="Testimonial" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Bonus 1 */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={bonus1Image} 
            alt="Bonus 1 - The Best Positions" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Bonus 2 */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={bonus2Image} 
            alt="Bonus 2 - Secret Formula" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Bonus 3 */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={bonus3Image} 
            alt="Bonus 3 - Make Any Woman" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Bonus 4 */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={bonus4Image} 
            alt="Bonus 4 - Erotic Imagination" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Complete Offer */}
        <div className="w-full max-w-md mb-8">
          <img 
            src={offerImage} 
            alt="Complete Offer" 
            className="w-full rounded-lg"
          />
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-md mb-6">
          <button
            onClick={onSelect}
            className="w-full py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white text-lg font-bold rounded-lg transition-colors uppercase tracking-wide"
          >
            GET INSTANT ACCESS NOW
          </button>
        </div>

        {/* Payment Methods */}
        <div className="w-full max-w-md mb-6">
          <img 
            src={paymentImage} 
            alt="Payment Methods" 
            className="w-full"
          />
        </div>

        {/* Guarantee Badge */}
        <div className="w-full max-w-md flex justify-center mb-8">
          <img 
            src={guaranteeImage} 
            alt="7 Day Money Back Guarantee" 
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-xs text-center max-w-md">
          Your purchase is 100% secure and protected. After payment confirmation, you will receive immediate access to all content.
        </p>
      </div>
    </div>
  );
};
