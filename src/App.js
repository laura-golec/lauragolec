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
      path: "lauragolec/",
      element: <Home />,
    },
    {
      path: "lauragolec/about",
      element: <About />,
    },
    {
      path: "lauragolec/contact",
      element: <Contact />,
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
