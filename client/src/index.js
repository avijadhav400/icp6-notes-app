import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";
import NewNote from "./views/NewNote";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewNote />,
  },
]);
root.render(<RouterProvider router={(router)}/>);
