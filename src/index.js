import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import DashboardPage from "./components/DashboardPage";
import { Provider, useSelector } from "react-redux"; // Import Provider
import appStore from "./Utils/appStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <SignInPage operation={"signin"} />,
      },
      {
        path: "/signup",
        element: <SignInPage operation={"signup"} />,
      },
      {
        path: "/full",
        element: <PrivateRoute />,
      },
      {
        path: "*",
        element: (
          <div className="flex bg-radial-gradient items-center h-screen w-full  justify-center ">
            <p className="text-white text-4xl">Page Not Found</p>
          </div>
        ),
      },
    ],
  },
]);

function PrivateRoute() {
  const token = useSelector((state) => state.login.token);
  const isAuthenticated = !!token;
  console.log(isAuthenticated);
  return isAuthenticated ? (
    <DashboardPage />
  ) : (
    <SignInPage operation={"signin"} />
  );
}

root.render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
