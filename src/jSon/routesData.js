import FindHospital from "../pages/findHospital/FindHospital";
import LandingPage from "../pages/landingPage/LandingPage";
import Profile from "../pages/profile/Profile";

const routesData = [
  {
    id: 1,
    path: "/",
    element: <LandingPage />,
  },
  {
    id: 2,
    path: "/find-hospital",
    element: <FindHospital />,
  },
  {
    id: 3,
    path: "/profile",
    element: <Profile />,
  },
];

export default routesData;
