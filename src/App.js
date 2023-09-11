import React from "react";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { Navbar, Footer, Menu } from "./components";
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <Box sx={{ backgroundColor: '#12332c' }}>
        <Navbar />
        <Box sx={{ display: "flex" }}>
          <Menu />
          <Outlet />
        </Box>
        <Footer />
      </Box>
    );
  };

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
      ],
    },
  ]);

  const theme = createTheme({
    palette: {
      background: {
        default: "#222222"
      },
    },
    typography: {
      fontFamily: 'Lato',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider> 
  );

}


export default App;