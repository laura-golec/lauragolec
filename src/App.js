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
          display: 'flex',
          flexDirection: 'column',
          height: '99vh',
          width: '100vw',
          overflowY: 'scroll',
          overflowX: 'hidden'
        }}
      >
        <Navbar />
        <Box sx={{overflowY: 'scroll', marginTop:'5vh'}}>
          <Outlet/>
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
      h1:{
        fontFamily: ['Lato'],
        fontWeight: 800,
      },
      h2:{
        fontFamily: ['Lato'],
        fontWeight: 800,
      },
      h3:{
        fontFamily: ['Lato'],
        fontWeight: 700,
      },
      h4:{
        fontFamily: ['Lato'],
        fontWeight: 700,
      },
      body1:{
        fontFamily: ['Lato'],
        fontWeight: 500,
      },
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