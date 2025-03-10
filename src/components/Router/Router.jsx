import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Splash from '../Splash/Splash'
import Layout from '../Layout/Layout'
import NotFounded from '../NotFounded/NotFounded'
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'
function Router() {
    let routers = createBrowserRouter([
        { path: "/", element: <Splash /> }, // Splash screen appears first
        {
          path: "",
          element: <Layout />,
          children: [
            { path: "home", element: <Home /> }, 
            { path: "about", element: <AboutMe /> }, 
            { path: "*", element: <Home /> },
          ],
        },
      ]);
  return <RouterProvider router={routers}/>;
}

export default Router;
