import React from "react";
import success from "../assets/success.svg";

function SuccessPage() {
  return (
    <div className="flex flex-col items-center pt-[12.41vh] font-bold ">
      <h1 className="mb-[16.67vh] text-3xl ">
        Appointment Booked Successfully
      </h1>
      <img
        src={success}
        alt=""
        className="mb-[7.69vh] w-[10.42vw] h-[10.42vw] "
      />
      <p className="text-[#C1C1C1] ">Kindly check your email for details.</p>
    </div>
  );
}

export default SuccessPage;
