import React from "react";
import HeaderHero from "./HeaderHero";
import CategoriesSection from "./CategoriesSection";
import ProductsSection from "./ProductsSection";
import QuoteSection from "./QuoteSection";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const navLinksStyle =
  "uppercase text-white text-[13px] font-[700] tracking-[2px] ";
export const ctaStyles = {
  black:
    "cursor-pointer w-40 py-3.75  bg-black font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white ",
  transpernt:
    "cursor-pointer w-40 bg-transparent py-3.75  text-black font-bold text-[13px] leading-[100%] tracking-[1px] uppercase border-1 border-black",
  orange:
    "cursor-pointer w-40 bg-[#D87D4A] py-3.75 text-white font-bold text-[13px] leading-[100%] tracking-[1px] uppercase",
};
export default function App() {
  return (
    <div>
      <HeaderHero />
      <CategoriesSection />
      <ProductsSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}
