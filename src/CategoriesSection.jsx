import React from "react";
import headPhone from "./assets/CategoriesPhotos/headPhone.png";
import speakers from "./assets/CategoriesPhotos/Speakers.png";
import earPhones from "./assets/CategoriesPhotos/earbuds.png";
import linkTo from "./assets/CategoriesPhotos/linkTo.png";
import shadow from "./assets/CategoriesPhotos/Oval.png";

export default function CategoriesSection() {
  let cardStyle =
    "card flex-1 pt-29 pb-7.5 flex justify-center flex-col gap-3.75 text-center bg-[#F1F1F1] rounded-lg relative";
  let imageStyle =
    "absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10";
  let shadowStyle =
    "absolute top-15 left-1/2 -translate-x-1/2 w-30 h-12  bg-linear-to-b from-black/35 to-transparent blur-lg";
  let h3Style =
    "text-[18px] font-bold leading-[100%] tracking-[1.29px] text-black";
  let linkToStyle = "link-to flex gap-[13.32px] justify-center";
  let anchorStyle =
    "font-bold opacity-50 text-[13px] leading-[100%] tracking-[1px] uppercase text-black ";

  return (
    <section className="CategoriesSection w-full mt-50">
      <div className="container flex gap-7.5 ">
        <div
          className={cardStyle}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src={headPhone} className={imageStyle} alt="headPhone" />

          <div className={shadowStyle}></div>

          <h3 className={h3Style}>HEADPHONES</h3>
          <div className={linkToStyle}>
            <a href="#" className={anchorStyle}>
              Shop
            </a>
            <img src={linkTo} alt="linkTo" />
          </div>
        </div>
        <div className={cardStyle} data-aos="fade-up" data-aos-duration="1500">
          <img src={speakers} className={imageStyle} alt="speakers" />

          <div className={shadowStyle}></div>

          <h3 className={h3Style}>SPEAKERS</h3>
          <div className={linkToStyle}>
            <a href="#" className={anchorStyle}>
              Shop
            </a>
            <img src={linkTo} alt="linkTo" />
          </div>
        </div>
        <div
          className={cardStyle}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img src={earPhones} className={imageStyle} alt="earPhones" />

          <div className={shadowStyle}></div>

          <h3 className={h3Style}>EARPHONES</h3>
          <div className={linkToStyle}>
            <a href="#" className={anchorStyle}>
              Shop
            </a>
            <img src={linkTo} alt="linkTo" />
          </div>
        </div>
      </div>
    </section>
  );
}
