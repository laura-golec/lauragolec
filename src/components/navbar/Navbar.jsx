import React from "react";
import "./Navbar.css";
import { Stack, Typography, Icon, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../utils/globals.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center" // Center-align the content vertically
      textAlign={"center"}
      sx={{ 
        position: 'fixed', 
        backgroundColor: "var(--darkbg)",  
        justifyContent: "space-between", 
        padding: '10px', // Equal padding at the top and bottom
        borderBottom: "solid 1px var(--brightbg)",
        width: '100vw',
        zIndex: 9999,
      }}
    >
      <Stack direction="row" sx={{justifyContent: 'left'}}>
      <Link to="/" className="link-styling">
        <Typography sx={{fontSize: 25, fontWeight: 'bold' }}>Home</Typography>
      </Link>
      <Link to="/projects" className="link-styling">
        <Typography sx={{fontSize: 25, fontWeight: 'bold' }}>Projects</Typography>
      </Link>
      <Link to="/about" className="link-styling">
        <Typography sx={{fontSize: 25, fontWeight: 'bold' }}>About</Typography>
      </Link>
      <Link to="/contact" className="link-styling">
        <Typography sx={{fontSize: 25, fontWeight: 'bold' }}>Contact</Typography>
      </Link>
      </Stack>

      <Stack direction="row" sx={{width: '20%', justifyContent: 'right', marginRight: '1%'}}>
      <IconButton href="mailto:laura.golec@gmail.com" sx={{color:"var(--fadedcolour)", '&:hover':{color:"white"}}}>
        <EmailIcon sx={{fontSize:45}}/>
      </IconButton>
      <IconButton href="https://github.com/laura-golec" sx={{color:"var(--fadedcolour)", '&:hover':{color:"white"}}}>
        <GitHubIcon sx={{fontSize:40}}/>
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/laura-golec/" sx={{color:"var(--fadedcolour)", '&:hover':{color:"white"}}}>
        <LinkedInIcon sx={{fontSize:50}}/>
      </IconButton>
      </Stack>
    </Stack>
  );
}

export default Navbar;
