import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed"
import EditProfile from "./pages/EditProfile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/editprofile",
    element: <EditProfile />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
