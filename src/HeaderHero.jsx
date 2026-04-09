import React from "react";
import logo from "./assets/HeaderHeroPhotos/audiophile 2.png";
import cart from "./assets/HeaderHeroPhotos/Combined Shape.png";
import headPhonePhoto from "./assets/HeaderHeroPhotos/headPhoneImage.png";
import { ctaStyles } from "./App";
import { navLinksStyle } from "./App";

export default function HeaderHero() {
  return (
    <div className={"header-with-hero w-full bg-[#131313] overflow-y-hidden"}>
      <div
        className="container bg-no-repeat bg-right "
        style={{ backgroundImage: `url(${headPhonePhoto})` }}
      >
        <header className=" container pt-8 pb-9 flex justify-between items-center ">
          <div
            className="logo"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            <img src={logo} alt="logo" />
          </div>
          <nav
            className="flex gap-8.5  "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <a href="#" className={navLinksStyle}>
              Home
            </a>
            <a href="#" className={navLinksStyle}>
              headphones
            </a>
            <a href="#" className={navLinksStyle}>
              speakers
            </a>
            <a href="#" className={navLinksStyle}>
              earphones
            </a>
          </nav>
          <div
            className="cart-icon"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="2000"
          >
            <img src={cart} alt="cart" />
          </div>
        </header>
        <div className="border-div container  h-0.5 bg-white opacity-20 "></div>
        <div className="hero container flex justify-between ">
          <div className="content flex flex-col gap-10 pt-32 w-99.5 pb-39.5">
            <div
              className="texts flex flex-col gap-6 text-white"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="font-extralight tracking-[10px] text-[14px] opacity-50">
                NEW PRODUCT
              </p>
              <h1 className="uppercase text-[56px] leading-14.5 tracking-[2px] font-bold">
                XX99 Mark II Headphones
              </h1>
              <p className="font-light opacity-75 leading-6.25 text-[15px] pr-12.25">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <div
              className="button-container"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <button className={ctaStyles.orange}>See Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
