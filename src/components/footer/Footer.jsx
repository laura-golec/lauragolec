import React from "react";
import "./Footer.css";
import { Box, Typography } from '@mui/material'
import '../../utils/globals.css'

function Footer() {
  return(
<Box 
p={1} 
sx={{ 
  position: 'fixed',
  bottom: 0,
  width: '100vw',
  backgroundColor: "var(--mainbg)", 
  borderTop: "solid 1px var(--darkbg)",
  color: 'var(--fadedcolour)',
  textAlign: 'center',
  margin: 0,
  padding: '0.2vh',
  zIndex: 99,
  height: '1.5vh',
  
}}>
  <Typography fontSize='1.4vh'> Copyright © 2023 Laura Golec</Typography>
</Box>
  );
}
export default Footer;
