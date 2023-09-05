import React from 'react';
import './App.css';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App (){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
