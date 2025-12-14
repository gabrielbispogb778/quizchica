import { useEffect } from "react";

// Import all section images for preloading
import lipsIcon from "@/assets/lips-icon.png";
import secao3Image from "@/assets/secao-3-imagem.png";
import secao4Casal from "@/assets/secao-4-casal.png";
import secao6Gif from "@/assets/secao-6-gif.gif";
import secao7Image from "@/assets/secao-7-imagem.png";
import secao9Mulheres from "@/assets/secao-9-mulheres.png";
import secao12Chat from "@/assets/secao-12-chat.webp";
import secao13Image from "@/assets/secao-13-imagem.png";
import secao15Image from "@/assets/secao-15-imagem.png";
import secao17Image from "@/assets/secao-17-imagem.png";
import secao19Image from "@/assets/secao-19-imagem.png";
import emojiShush from "@/assets/emoji-shush.png";
import emojiStars from "@/assets/emoji-stars.png";
import emojiHappy from "@/assets/emoji-happy.png";
import emoji20_1 from "@/assets/emoji-secao20-1.png";
import emoji20_2 from "@/assets/emoji-secao20-2.png";
import quadrinho1 from "@/assets/quadrinho-1.png";
import quadrinho2 from "@/assets/quadrinho-2.png";
import quadrinho3 from "@/assets/quadrinho-3.png";
import quadrinho4 from "@/assets/quadrinho-4.png";

// Section 22 images
import secao22Hero from "@/assets/secao-22-hero.webp";
import secao22Chat from "@/assets/secao-22-chat.webp";
import secao22Bonus1 from "@/assets/secao-22-bonus1.webp";
import secao22Bonus2 from "@/assets/secao-22-bonus2.webp";
import secao22Bonus3 from "@/assets/secao-22-bonus3.webp";
import secao22Bonus4 from "@/assets/secao-22-bonus4.webp";
import secao22Offer from "@/assets/secao-22-offer.webp";
import secao22Payment from "@/assets/secao-22-payment.webp";
import secao22Reviews from "@/assets/secao-22-reviews-new.png";
import secao22Guarantee from "@/assets/secao-22-guarantee-badge.png";

const allImages = [
  lipsIcon,
  secao3Image,
  secao4Casal,
  secao6Gif,
  secao7Image,
  secao9Mulheres,
  secao12Chat,
  secao13Image,
  secao15Image,
  secao17Image,
  secao19Image,
  emojiShush,
  emojiStars,
  emojiHappy,
  emoji20_1,
  emoji20_2,
  quadrinho1,
  quadrinho2,
  quadrinho3,
  quadrinho4,
  secao22Hero,
  secao22Chat,
  secao22Bonus1,
  secao22Bonus2,
  secao22Bonus3,
  secao22Bonus4,
  secao22Offer,
  secao22Payment,
  secao22Reviews,
  secao22Guarantee,
];

export const useImagePreload = () => {
  useEffect(() => {
    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
};
