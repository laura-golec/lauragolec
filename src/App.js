import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

function App (){
  const router = createHashRouter([
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
  
  

  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  );
}

export default App;
