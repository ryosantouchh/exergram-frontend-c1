import React, { useContext } from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Route,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import date from "date-and-time";
import "./index.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ActivityPage from "./pages/ActivityPage";
import EditProfile from "./pages/EditProfile";

import AuthContextProvider from "./context/AuthContext";
import ImageContextProvider from "./context/ImageContext";
import ActivityContextProvider from "./context/ActivityContext";
import UserContextProvider from "./context/UserContext";

import CreateActivity from "./pages/CreateActivity";
import EditActivity from "./pages/EditActivity";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
// axios.defaults.withCredentials = true;

// for non-token or non-login
function NonAuthProtectedRoute({ children }) {
  const isAuthenticated = window.localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// for token or login
function AuthProtectedRoute({ children }) {
  const isAuthenticated = window.localStorage.getItem("token");
  if (isAuthenticated) {
    return <Navigate to="/feed" replace />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProtectedRoute>
        <Home />
      </AuthProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <NonAuthProtectedRoute>
        <Dashboard />
      </NonAuthProtectedRoute>
    ),
    // element: <ProtectedRoute path="/login" element={<Dashboard />} />,
  },
  {
    path: "/signup",
    element: (
      <AuthProtectedRoute>
        <Signup />
      </AuthProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthProtectedRoute>
        <Login />
      </AuthProtectedRoute>
    ),
  },
  {
    path: "/feed",
    element: (
      <NonAuthProtectedRoute>
        <ActivityPage />
      </NonAuthProtectedRoute>
    ),
    children: [
      {
        path: ":feedPage",
        element: <ActivityPage />,
      },
    ],
  },
  {
    path: "/editprofile",
    element: (
      <NonAuthProtectedRoute>
        <EditProfile />
      </NonAuthProtectedRoute>
    ),
  },
  {
    path: "/createactivity",
    element: (
      <NonAuthProtectedRoute>
        <CreateActivity />
      </NonAuthProtectedRoute>
    ),
    children: [
      {
        path: ":activityId",
        element: <CreateActivity />,
      },
    ],
  },
  {
    path: "/editactivity",
    element: (
      <NonAuthProtectedRoute>
        <EditActivity />
      </NonAuthProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <UserContextProvider>
      <ActivityContextProvider>
        <ImageContextProvider>
          <RouterProvider router={router} />
        </ImageContextProvider>
      </ActivityContextProvider>
    </UserContextProvider>
  </AuthContextProvider>
);
