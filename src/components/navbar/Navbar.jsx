import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Stack, Typography, IconButton, Drawer, Box } from '@mui/material';
import './Navbar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';

var widths = [0, 1400];


const Navbar = () => {
    const [open, setOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= widths[1]);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= widths[2]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderWideScreenNavbar = () => (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "var(--darkbg)",
        padding: '10px',
        borderBottom: "solid 1px var(--brightbg)",
        width: '100vw',
        zIndex: 9999,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="left"
      >
        <Link to="/" className="link-styling">
          <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>Home</Typography>
        </Link>
        <Link to="/projects" className="link-styling">
          <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>Projects</Typography>
        </Link>
        <Link to="/about" className="link-styling">
          <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>About</Typography>
        </Link>
        <Link to="/contact" className="link-styling">
          <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>Contact</Typography>
        </Link>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="right"
        sx={{ width: '20%', marginRight: '1%' }}
      >
        <IconButton href="mailto:laura.golec@gmail.com" sx={{ color: "var(--fadedcolour)", '&:hover': { color: "white" } }}>
          <EmailIcon sx={{ fontSize: 45 }} />
        </IconButton>
        <IconButton href="https://github.com/laura-golec" sx={{ color: "var(--fadedcolour)", '&:hover': { color: "white" } }}>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/laura-golec/" sx={{ color: "var(--fadedcolour)", '&:hover': { color: "white" } }}>
          <LinkedInIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Stack>
    </Stack>
  );

  const renderMobileDrawer = () => (
    <Stack direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{
      backgroundColor: "var(--darkbg)",
      padding: '10px',
      borderBottom: "solid 1px var(--brightbg)",
      width: '100vw',
      zIndex: 9999,
    }}>
      <IconButton onClick={openDrawer} sx={{ color: "var(--fadedcolour)", '&:hover': { color: "white" } }}>
        <MenuIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Drawer
        variant='temporary'
        anchor="left"
        open={open}
        onClose={closeDrawer}
        onClick={closeDrawer}
        sx={{width: '70vw',}}
      >
        <Box
          sx={{
            width: '70vw',
            height: '100%',
            backgroundColor: 'var(--darkbg)',
            display: 'flexbox'
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            textAlign="center"
            display='flex'
          >
            <Typography sx={{ fontSize: 25, fontWeight: 'bold', color:'white', paddingTop:'20%', borderBottom:'2px solid'}}>
                Laura Golec
            </Typography>
            <Link to="/" className="link-styling">
              <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>Home</Typography>
            </Link>
            <Link to="/projects" className="link-styling">
              <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>Projects</Typography>
            </Link>
            <Link to="/about" className="link-styling">
              <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>About</Typography>
            </Link>
            <Link to="/contact" className="link-styling">
              <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>Contact</Typography>
            </Link>
          </Stack>
        </Box>
      </Drawer>
      <Stack direction='row' marginRight='1%'>
        <IconButton href="mailto:laura.golec@gmail.com" sx={{ color: "var(--fadedcolour)", '&:hover': { color: "white" } }}>
          <EmailIcon sx={{ fontSize: 45 }} />
        </IconButton>
        <IconButton href="https://github.com/laura-golec" sx={{ color: "var(--fadedcolour)", '&:hover': { color: "white" } }}>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/laura-golec/" sx={{ color: "var(--fadedcolour)", '&:hover': { color: "white" } }}>
          <LinkedInIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
  return (
    <div>
      {isWideScreen ? renderWideScreenNavbar() : renderMobileDrawer()}
    </div>
  );
};

export default Navbar;
