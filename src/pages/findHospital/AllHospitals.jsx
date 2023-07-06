import React from "react";
import hospitalsData from "../../jSon/hospitalsData";
import search from "../../assets/findHospital/w-search.svg";

function AllHospitals() {
  return (
    <div className="AllH">
      <div className="AllHCont">
        <div className="AllHWrap">
          <input
            type="search"
          />
          <img
            src={search}
            alt=""
          />
        </div>
        <div className="AllH2">
          {hospitalsData.map((hospital) => (
            <div className="Hospitals">
              <img
                src={hospital.src}
                alt=""
                className="w-[11.61vw] h-[18.61vh] mb-[3.61vh] "
              />
              <h4 className="mb-[] ">{hospital.name}</h4>
              <p>{hospital.address}</p>
              <a href="" className="text-xs hover:underline">
                see more
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full mt-[3.15vh] ">
        <h1 className="text-2xl font-medium mb-[3.14vh] ml-[6.25vw] ">
          Hospitals Nearby
        </h1>
        <div className="flex items-center justify-around gap-[7.40vw] mx-[3.4vw] ">
          {hospitalsData.map((hospital) => (
            <div className="flex flex-col items-center text-sm font-medium">
              <img
                src={hospital.src}
                alt=""
                className="w-[11.61vw] h-[18.61vh] mb-[3.61vh] "
              />
              <h4 className="mb-[] ">{hospital.name}</h4>
              <p>{hospital.address}</p>
              <a href="" className="text-xs hover:underline">
                see more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllHospitals;
