import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero-section/hero.svg";
import right from "../../assets/hero-section/right.png";

function HeroSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="Banner"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="Container"
      >
        <div className="BannerTxt">
          <h1 className="Txt">
            Find the nearest hospital <br /> to you and make an <br />{" "}
            appointment
          </h1>
          <p>
            Discover Your Perfect Care: Find <br /> Your Hospital, Anytime,
            Anywhere!
          </p>
          <button className="Btn">
            Get Started
          </button>
          <a
            href="/"
            className="LearnMore"
          >
            Learn more{" "}
            <img src={right} alt="" className="ArrowRight" />
          </a>
        </div>

        <img
          src={hero}
          alt=""
          className="BannerImage"
        />
      </motion.div>
      <div className="Find">
        <h3 className="FindTxt">
          Find a nearby hospital
        </h3>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search for a hospital"
        />
      </div>
    </motion.div>
  );
}

export default HeroSection;
