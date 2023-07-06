import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage.jsx";

import FindHospital from "./pages/findHospital/FindHospital.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import About from "./pages/about/About.jsx";
import AuthLayout from "./pages/auth/AuthLayout.jsx";
import Mobile from "./components/Mobile.jsx";

function App() {
  return (
    <div className="AllApp">
      <div className="NoMobile">
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <LandingPage />
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                </>
              }
            />
            <Route path="/find-hospital" element={<FindHospital />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />

            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={
                <>
                  <AuthLayout>
                    <Login />
                  </AuthLayout>
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <AuthLayout>
                    <SignUp />
                  </AuthLayout>
                </>
              }
            />
          </Routes>
        </Router>
      </div>
      <div className="Mobile">
        <Mobile />
      </div>
    </div>
  );
}

export default App;
