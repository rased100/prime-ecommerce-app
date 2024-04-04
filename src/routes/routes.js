import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Checkout from "../pages/Checkout";
import ViewDetails from "../pages/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/viewdetails",
    element: <ViewDetails />,
  },
]);

export default router;
