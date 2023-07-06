import React from "react";

import Navbar from "../../components/Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import PageTwo from "./PageTwo.jsx";
import BookAppointment from "./BookAppointment.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "../../components/Footer.jsx";

function LandingPage() {
  return (
    <div className="relative">
      <div className="LandingPage">
        <div>
          <Navbar />
        </div>
        <div>
          <div>
            <HeroSection />
          </div>
          <div>
            <PageTwo />
          </div>
          <div>
            <BookAppointment />
          </div>
          <div>
            <Testimonials />
          </div>
          <div className="MainFooter">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
