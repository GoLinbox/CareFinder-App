import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="FHead">
        <h2>
          CareFinder
        </h2>
        <p>Plot 42, Akinza Street, Victoria island, Lagos +2349167351788</p>
      </div>
      <div className="QuickLinks ">
        <h2 className="font-medium text-2xl text-[#E0E4EC] mb-[5vh] ">
          About us
        </h2>
        <p>Health services provider</p>
      </div>
      <div className="QuickLinks  ">
        <h2 className="font-medium text-2xl text-[#E0E4EC] mb-[5vh] ">
          Quick Links
        </h2>
        <div className="FooterLinks">
          <a href="/my-account">My Account</a>
          <a href="/book-appointment">Book an appointment</a>
          <a href="/library">Library</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
