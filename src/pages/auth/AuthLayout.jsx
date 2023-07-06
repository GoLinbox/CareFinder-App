import React from "react";
import bg from "../../assets/auth/bg.svg";
import { NavLink as Link } from "react-router-dom";
import img from "../../assets/auth/img.svg";

function AuthLayout({ children }) {
  return (
    <div className="Authentication">
      <div className="Auth1">
        {" "}
        <div className="Auth2">
          {children}
        </div>
      </div>
      <div
        className="Auth3"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link
          to="/"
        >
          CareFinder
        </Link>
        <h1>
          Join our <br /> community
        </h1>
        <p>
          Enjoy seamless access to medical services.
        </p>
        <img src={img} alt=""/>
      </div>
    </div>
  );
}

export default AuthLayout;
