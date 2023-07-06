import React from "react";
import { AppointmentForm } from "../../components/Form.jsx";
import john from "../../assets/hero-section/john.svg";
import mary from "../../assets/hero-section/mary.svg";
import cole from "../../assets/hero-section/cole.svg";
import susan from "../../assets/hero-section/susan.svg";

function BookAppointment() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Cole",
      img: john,
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
    },
    {
      id: 2,
      img: mary,
      name: "Meredith Grey",
      speciality: "General Surgeon",
      hospital: "John Hopkins Hospital",
    },
    {
      id: 3,
      img: cole,
      name: "Will Sloane",
      speciality: "Neurologist",
      hospital: "Stanford Hospital",
    },
    {
      id: 4,
      img: susan,
      name: "Dr. Susan Routledge",
      speciality: "Pediatrician",
      hospital: "Kincaid General Hospital",
    },
  ];
  return (
    <div className="BookAptmt">
      <div className="Aptmt">
        <h1>
          QUALIFIED DOCTORS
        </h1>
        <div className="Doctors">
          {doctors.map((doctor) => (
            <div
              className="TxtImages"
              key={doctor.id}
            >
              <img
                src={doctor.img}
                alt=""
              />
              <h4>{doctor.name}</h4>
              <h5>{doctor.speciality}</h5>
              <h6>{doctor.hospital}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="Book">
        <h1>
          Book an appointment
        </h1>
        <div className="BookForms">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
