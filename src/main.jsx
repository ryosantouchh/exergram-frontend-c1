import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed"

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

    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,

    path: "/feed",
    element: <Feed />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
