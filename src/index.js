import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutUs from "./Components/AboutUs";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ShowTeam from "./Components/ShowTeam";
import { RecoilRoot } from "recoil";
import Activity from "./Components/Activity";
import Pricing from "./Components/Pricing";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/showTeam",
    element: <ShowTeam />,
  },
  {
    path: "/activity",
    element: <Activity />,
  },

  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
