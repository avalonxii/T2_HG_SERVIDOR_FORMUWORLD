import React from "react";
import ReactDOM from "react-dom/client";
import { FormualrioContextProvider } from "./context/FormuContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import AddFormu from "./routes/addFormu";
import AllFormu from "./routes/AllFormu";
import App from './App'
import GetStarted from "./routes/GetStarted";

const HeaderLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element:  <App />,
      },
      {
        path: "/crear",
        element:  <AddFormu />,
      } ,
      {
        path: '/todos',
        element: <AllFormu />,
      },
      {
        path: '/started',
        element: <GetStarted />,
      } 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormualrioContextProvider>
      <RouterProvider router={router} />
    </FormualrioContextProvider>
  </React.StrictMode>
);
