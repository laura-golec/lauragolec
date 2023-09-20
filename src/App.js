import React from "react";
import { Home, Projects, About, Contact } from './pages';
import { Navbar, Footer } from "./components";
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './utils/globals.css';
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <Box
        sx={{
          backgroundColor: 'var(--mainbg)',
          display: 'block',
          direction: 'column',
          height: '100%',
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          boxSizing: 'border-box',
          margin: '0',
        }}
      >
        <Navbar sx={{ left: '0' }} />
        <Box sx={{ overflowY: 'auto', justifyContent: 'center', display: 'flex', maxWidth: '2048px', width: '100vw', justifySelf: 'center', boxSizing: 'border-box', overflow: 'auto', height: 'calc(100% - 90px)'}}>
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
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  const theme = createTheme({
    typography: {
      fontFamily: ['Lato'],
      h1: {
        fontFamily: ['Lato'],
        fontWeight: 800,
      },
      h2: {
        fontFamily: ['Lato'],
        fontWeight: 800,
      },
      h3: {
        fontFamily: ['Lato'],
        fontWeight: 700,
      },
      h4: {
        fontFamily: ['Lato'],
        fontWeight: 700,
      },
      body1: {
        fontFamily: ['Lato'],
        fontWeight: 500,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: [
            { '@font-face': 'Lato' },
          ],
        }
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );

}


export default App;