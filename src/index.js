import React from 'react';
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Error from "./components/Error"
import Contact from "./components/Contact"
import Body from "./components/Body"
import RestaurentMenu from './components/RestaurentMenu';
import Profile from "./components/ProfileClass"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Shimmer from './components/Shimmer';

const About = lazy(() => import("./components/About"))

const Instamart = lazy(() => import("./components/Instamart"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      }
      ,
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
      }

    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

