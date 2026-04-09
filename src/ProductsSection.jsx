import React from "react";
import { ctaStyles } from "./App";
import largeOval from "./assets/ProductsPhotos/Large-Oval.png";
import mediumOval from "./assets/ProductsPhotos/medium-Oval.png";
import smallOval from "./assets/ProductsPhotos/small-Oval.png";
import Speakers from "./assets/ProductsPhotos/Speaker.png";
import midBg from "./assets/ProductsPhotos//midBg.png";
import lowerBg from "./assets/ProductsPhotos/lowerBg.png";

export default function ProductsSection() {
  return (
    <section className="ProductsSection w-full mt-42">
      <div className="container flex flex-col gap-12">
        <div
          className="upper bg-[#D87D4A]  bg-no-repeat  h-140 rounded-lg flex"
          style={{ backgroundImage: `url(${largeOval})` }}
        >
          <div className="left w-[50%] flex items-end">
            <div
              className="medium bg-no-repeat bg-bottom w-full "
              data-aos="fade-in"
              data-aos-duration="1500"
              style={{ backgroundImage: `url(${mediumOval})` }}
            >
              <div
                className="small bg-no-repeat w-full bg-bottom flex justify-center"
                data-aos="fade-in"
                data-aos-duration="1500"
                style={{ backgroundImage: `url(${smallOval})` }}
              >
                <img
                  src={Speakers}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  alt="Speakers"
                />
              </div>
            </div>
          </div>
          <div
            className="right text-white w-[50%] flex justify-center items-center "
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <div className="content w-87.25">
              <h2 className="font-bold text-[56px] leading-14.5 tracking-[2px] uppercase mb-6">
                ZX9 SPEAKER
              </h2>
              <p className="font-normal text-[15px] leading-6.25 mb-10">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className={ctaStyles.black}>See Product</button>
            </div>
          </div>
        </div>
        <div
          className="mid rounded-lg py-25.25 pl-23.75  bg-no-repeat bg-cover  flex flex-col gap-8 "
          data-aos="fade-down"
          data-aos-duration="1500"
          style={{ backgroundImage: `url(${midBg})` }}
        >
          <h3 className="font-bold text-[28px] leading-[100%] tracking-[2px] uppercase text-black">
            ZX7 SPEAKER
          </h3>
          <button className={ctaStyles.transpernt}>See Product</button>
        </div>
        <div className="lower rounded-lg flex gap-7.5">
          <div
            className="left  rounded-lg w-1/2"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src={lowerBg} className="w-full rounded-lg" alt="lowerBg" />
          </div>
          <div
            className="right  pl-23.75  flex flex-col gap-8 bg-[#F1F1F1] rounded-lg w-1/2 justify-center"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h3 className="font-bold text-[28px] leading-[100%] tracking-[2px] uppercase text-black ">
              YX1 EARPHONES
            </h3>
            <button className={ctaStyles.transpernt}>See Product</button>
          </div>
        </div>
      </div>
    </section>
  );
}
