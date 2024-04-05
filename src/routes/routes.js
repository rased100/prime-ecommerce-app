import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Main/Checkout";
import Home from "../pages/Main/Home";
import ViewDetails from "../pages/Main/ViewDetails";
import Main from "../layout/Main/Main";
import Cart from "../pages/Main/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "viewdetails",
        element: <ViewDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
