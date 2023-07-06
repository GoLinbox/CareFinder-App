import React, { useState } from "react";
import hospitalsData from "../../jSon/hospitalsData";
import map from "../../assets/findHospital/map.svg";
import user from "../../assets/findHospital/user.svg";
import search from "../../assets/findHospital/search.svg";
import Hospital from "./Hospital";
import Navbar from "../../components/Navbar";

function FindHospital() {
  const [showParent, setShowParent] = useState(true);
  const [showHospital, setShowHospital] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [hospitalData, setHospitalData] = useState(hospitalsData);

  const selectedHospitalData = hospitalData.find(
    (hospital) => hospital.id === selectedHospital?.id
  );

  const onHospitalClick = (id) => {
    setShowHospital(true);
    setShowParent(false);
    setSelectedHospital(id);
  };
  const onBackClick = () => {
    setShowHospital(false);
    setShowParent(true);
  };

  console.log(selectedHospitalData);

  return (
    <>
      {showParent ? (
        <div className=" ">
          <div className="HospitalNav">
            <Navbar />
          </div>
          <div className="HospitalCont">
            <div
              className="ContH"
              style={{
                backgroundImage: `url(${map})`,
              }}
            >
              <div className="HospitalInput">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-[30.57vw] h-[6.26vh] rounded-[15px] px-4 "
                />
                <input
                  type="number"
                  placeholder="Zipcode"
                  className="w-[12.71vw] h-[6.26vh] rounded-[15px] px-4  "
                />
                <div className="Search">
                  <button>
                    <img src={search} alt="" />
                  </button>
                  <img
                    src={user}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="NearbyHospitals">
              <h1 className="text-2xl font-medium mb-[3.14vh] ml-[6.25vw] ">
                Hospitals Nearby
              </h1>
              <div className="Nearby">
                {hospitalData.map((hospital, index) => (
                  <div
                    className="NearbyCont"
                    onClick={() => onHospitalClick(hospital)}
                    key={index}
                  >
                    <img
                      src={hospital.src}
                      alt=""
                    />
                    <h4 className="mb-[] ">{hospital.name}</h4>
                    <p>{hospital.address}</p>
                    <a href="/" className="text-xs hover:underline">
                      see more
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Hospital
          onBackClick={onBackClick}
          hospital={selectedHospitalData.name}
          key={selectedHospitalData.id}
          src={selectedHospitalData.src}
          address={selectedHospitalData.address}
          phone={selectedHospitalData.phone}
          email={selectedHospitalData.email}
          openingHours={selectedHospitalData.openingHours}
        />
      )}
    </>
  );
}

export default FindHospital;
