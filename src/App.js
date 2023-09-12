import React from "react";
import { Home, Projects, About, Contact } from './pages';
import { Navbar, Footer} from "./components";
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
          display: 'flex-box',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Navbar />
        <Box sx={{overflow: 'hidden' }}>
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
      fontFamily: ['Lato'],
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: [
            {'@font-face': 'Lato'},
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