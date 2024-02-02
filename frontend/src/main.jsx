import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import BetPage from "./components/BetPage";
import Card from "./components/Card";
import App from "./App";
import DuelCard from "./components/DuelCard";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "/DuelCard",
        element: <DuelCard />,
        loader: ({ params }) =>
          axios
            .get(`http://localhost:8000/api/gladiators/${params.id}`)
            .then((response) => response.data),
      },
      {
        path: "/BetPage/:id1/:id2",
        element: <BetPage />,
        loader: () =>
          axios
            .get(`http://localhost:8000/api/gladiators`)
            .then((response) => response.data),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
