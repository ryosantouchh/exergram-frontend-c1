import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import date from "date-and-time";
import "./index.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateActivity from "./pages/CreateActivity";
import EditActivity from "./pages/EditActivity";

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
    path: "/createactivity",
    element: <CreateActivity />,
  },
  {
    path: "/editactivity",
    element: <EditActivity />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
