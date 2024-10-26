import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CreatePage from "./pages/createpage/CreatePage.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navbar />,
      },
    ],
  },
  {
    path: "/create",
    element: <CreatePage />,
    children: [
      {
        path: "/create",
        element: <Navbar />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
