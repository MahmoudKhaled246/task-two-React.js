import React from "react";
import { navLinksStyle } from "./App";
import logo from "./assets/HeaderHeroPhotos/audiophile 2.png";
import facebook from "./assets/FooterPhotos/facebook.png";
import twitter from "./assets/FooterPhotos/twitter.png";
import insta from "./assets/FooterPhotos/insta.png";

export default function Footer() {
  return (
    <footer className="w-full mt-50 bg-[#131313] pt-18.75 pb-12">
      <div className="container" data-aos="fade-up" data-aos-duration="1500">
        <div className="links flex justify-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navs flex gap-8.5  ">
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
          </div>
        </div>
        <div className="footer-content mt-10 flex">
          <div className="left w-1/2">
            <p className="opacity-50 font-normal text-[15px] leading-6.25 text-white">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="right w-1/2 flex justify-end items-end">
            <div className="social flex gap-4 ">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={insta} alt="insta" />
            </div>
          </div>
        </div>
        <div className="copyright mt-14">
          <p className="font-bold opacity-50 text-[15px] leading-6.25 text-white">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
