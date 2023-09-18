import React from "react";
import "./Footer.css";
import { Box, Typography } from '@mui/material'
import '../../utils/globals.css'

function Footer() {
  return(
<Box 
sx={{ 
  position: 'absolute',
  bottom: '0px',
  left: 0,
  width: '100vw',
  backgroundColor: "var(--mainbg)", 
  borderTop: "solid 1px var(--darkbg)",
  color: 'var(--fadedcolour)',
  textAlign: 'center',
  margin: 0,
  zIndex: 99,
  height: '20px',
  boxSizing: 'border-box'
  
}}>
  <Typography fontSize='12px' height='100%'> Copyright © 2023 Laura Golec</Typography>
</Box>
  );
}
export default Footer;
