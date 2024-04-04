import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Home from "./routes/home";
import Trade from "./routes/trade";
import History from "./routes/history";
import Wallet from "./routes/wallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "organization",
        element: "Organization",
      },
      {
        path: "assets",
        element: "Assets",
      },
      {
        path: "trade",
        element: <Trade />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
