import React from "react";
import ReactDOM from "react-dom";
import Phosphor from "./components/Phosphor";
import Admin from "./components/Admin";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Phosphor />,
    },
    {
        path: "/admin",
        element: <Admin />,
    }
  ]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
