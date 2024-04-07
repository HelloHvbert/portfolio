import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Template from "./ui/Template.tsx";
import Error from "./ui/Error.tsx";
import Loader from "./ui/Loader.tsx";
import Home from "./sites/Home.tsx";
import Experience from "./sites/Experience.tsx";
import Contact from "./sites/Contact.tsx";
import Projects from "./sites/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <Error />,
    loader: Loader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
