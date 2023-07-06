import React from "react";
import { motion } from "framer-motion";
import imgOne from "../../assets/hero-section/imgOne.svg";
import imgTwo from "../../assets/hero-section/imgTwo.svg";
import doctor from "../../assets/hero-section/doctor.svg";
import hospital from "../../assets/hero-section/hospital.svg";
import exportIcon from "../../assets/hero-section/export.svg";
import share from "../../assets/hero-section/share.svg";
import how from "../../assets/hero-section/how.svg";

function PageTwo() {
  const features = [
    {
      id: 1,
      img: doctor,
      title: "Search Doctors",
      description: "Effortlessly Find the Best Doctors Near You",
    },
    {
      id: 2,
      img: hospital,
      title: "Search Hospitals",
      description: "Effortlessly Find the Best Hospitals Near You",
    },
    {
      id: 3,
      img: exportIcon,
      title: "Export Hospital",
      description: "Save list of hospitals",
    },
    {
      id: 4,
      img: share,
      title: "Share Hospitals",
      description: "Share the list of hospitals with others. ",
    },
  ];
  return (
    <div className="SecondPhase">
      <div className="SecondPhaseContainer">
        <div className="SecondPhaseWrap">
          <img
            src={imgOne}
            alt=""
            style={{
              objectFit: "cover",
              width: "20vw",
              height: "65vh",
              borderRadius: "20px",
            }}
          />
          <img
            src={imgTwo}
            alt=""
            style={{
              objectFit: "cover",
              width: "20vw",
              height: "65vh",
              borderRadius: "20px", alignSelf: "flex-end"
            }}
          />
        </div>
        <div className="SecondPhaseTxt">
          <h1>
            Welcome to <br />{" "}
            <span>CareFinder</span>
          </h1>
          <p>
            Carefinder is a platform where users can search for hosiptals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <button>
            Our Services
          </button>
        </div>
      </div>
      <div className="Motion">
        {features.map((feature) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={feature.id}
            className="MotionContent"
          >
            <div className="MotionContent2">
              <img
                src={feature.img}
                alt=""
              />
            </div>
            <h1 className="mb-[4vh] ">{feature.title}</h1>
            <p className="text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="MotionImage">
        <img src={how} alt="" />
      </div>
    </div>
  );
}

export default PageTwo;
