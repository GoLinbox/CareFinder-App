import React, { useState } from "react";
import Input from "./Input.jsx";
import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  email_validation,
  address_validation,
  password_validation,
} from "../utils/inputValidations.js";
import { NavLink as Link } from "react-router-dom";
import SuccessPage from "./SuccessPage.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";
import google from "../assets/auth/google.svg";
import facebook from "../assets/auth/facebook.svg";
import apple from "../assets/auth/apple.svg";

export function AppointmentForm() {
  const [success, setSuccess] = useState(false);
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
    success &&
      toast.success("Appointment Booked!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {background: "#08299b", color: "#fff"}
      });
  });

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          action=""
          className="AptmtForm"
        >
          <Input {...address_validation} />
          <Input {...name_validation} />
          <Input {...email_validation} />

          <button type="submit" onClick={onSubmit}>
            Book Appointment Now
          </button>
        </form>
        <ToastContainer />
      </FormProvider>
    </>
  );
}

export function LoginForm() {
  const [success, setSuccess] = useState(false);
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
    toast.success("Log in successful!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {background: "#08299B", color: "#fff"}
    });
  });
  return (
    <FormProvider {...methods}>
      <div className="LoginAuth">
        <h1>Welcome Back!</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          action=""
        >
          <Input {...email_validation} />
          <Input {...password_validation} />

          <button type="submit" onClick={onSubmit}>
            Login
          </button>

          <span>OR</span>
          <div className="TheOr">
            <button>
              <img src={google} alt="" className="w-[1.56vw] " />
            </button>
            <button>
              <img src={apple} alt="" className="w-[1.56vw] " />
            </button>
            <button>
              <img src={facebook} alt="" className="w-[1.56vw] " />
            </button>
          </div>
          <p className="text-sm">
            Don't have an account yet?
            <Link to="/signup" className="text-blue-700 italic">
              {" "}
              Sign Up!
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </FormProvider>
  );
}

export function SignupForm() {
  const [success, setSuccess] = useState(false);
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
    toast.success("Account Created!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { background: "#08299b", color: "#fff" },
    });
  });
  return (
    <FormProvider {...methods}>
      <div className="Register">
        <h1>Create an Account</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          action=""
        >
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...password_validation} />
          <button type="submit" onClick={onSubmit}>
            Create Account
          </button>

          <span>OR</span>
          <div className="TheOr ">
            <button>
              <img src={google} alt="" className="w-[1.56vw] " />
            </button>
            <button>
              <img src={apple} alt="" className="w-[1.56vw] " />
            </button>
            <button>
              <img src={facebook} alt="" className="w-[1.56vw] " />
            </button>
          </div>
          <p className="text-sm">
            Already have an account?
            <Link to="/login" className="text-blue-700 italic">
              {" "}
              Login!
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </FormProvider>
  );
}
