import React from "react";
import search from "../../assets/findHospital/w-search.svg";
import save from "../../assets/findHospital/save.svg";
import exportImg from "../../assets/findHospital/export.svg";
import left from "../../assets/findHospital/left.png";

function Hospital({
  onBackClick,
  email,
  hospital,
  src,
  address,
  phone,
  openingHours,
}) {
  const hospitalDetails = [hospital, address, email, openingHours, phone];

  return (
    <div className="MainH">
      <div className="HBtn">
        <button
          onClick={onBackClick}
        >
          <img src={left} alt=""/>
          Back
        </button>
        <div className="EachH">
          <input
            type="search"
          />
          <img
            src={search}
            alt=""
          />
        </div>
      </div>
      <div className="MainH1">
        <img
          src={src}
          alt=""
        />
        <div className="MainH2">
          <div className="MainH3">
            {hospitalDetails.map((hospital) => (
              <div className="MainH4">
                <h1>{hospital}</h1>
              </div>
            ))}
            <div className="MainH5">
              <button>
                <img src={save} alt=""/>
              </button>
              <button>
                <img src={exportImg} alt=""/>
              </button>
            </div>
          </div>
          <button className="LastBtn">
            Book an appointment now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hospital;
