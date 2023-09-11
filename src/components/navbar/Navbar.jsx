import React from "react";
import "./Navbar.css";
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../utils/globals.css'

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center" // Center-align the content vertically
      textAlign={"center"}
      sx={{ 
        position: 'fixed', 
        backgroundColor: "var(--darkbg)",  
        justifyContent: "left", 
        padding: '10px', // Equal padding at the top and bottom
        borderBottom: "solid 1px var(--brightbg)",
        width: '100vw',
        zIndex: 9999,
      }}
    >
      <Link to="/" className="link-styling">
        <Typography sx={{fontSize: 25, fontWeight: 'bold' }}>Home</Typography>
      </Link>
      <Link to="/about" className="link-styling">
        <Typography sx={{fontSize: 25, fontWeight: 'bold' }}>About</Typography>
      </Link>
      <Link to="/contact" className="link-styling">
        <Typography sx={{fontSize: 25, fontWeight: 'bold' }}>Contact</Typography>
      </Link>
    </Stack>
  );
}

export default Navbar;
