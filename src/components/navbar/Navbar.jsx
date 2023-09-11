import React from "react";
import "./Navbar.css";
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', backgroundColor: "#0a1f1a", top: 0, justifyContent: "center", paddingBottom: 0, borderBottom: "solid 1px #0a3d30"}}
    >
      <Link to="/" className="link-styling">
        Home
      </Link>
      <Link to="/about" className="link-styling">
        About
      </Link>
      <Link to="/contact" className="link-styling">
        Contact
      </Link>
    </Stack>
  );
}

export default Navbar;
