import React from "react";
import boyImage from "./assets/QuotePhotos/Boy.png";

export default function QuoteSection() {
  return (
    <section className="QuoteSection w-full mt-50">
      <div className="container flex">
        <div className="left w-1/2 flex justify-start items-center">
          <div
            className="content flex flex-col gap-8 w-3/4"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <h3 className="font-bold text-[40px] leading-11 tracking-[1.43px] uppercase text-black">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h3>
            <p className="font-normal text-[15px] leading-6.25 opacity-50">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div
          className="right w-1/2 flex justify-end"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="2000"
        >
          <img src={boyImage} alt="boyImage" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
