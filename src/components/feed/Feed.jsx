import React from 'react'
import { Box, Stack } from '@mui/material'

function feed() {
  return (
    <Stack 
    sx={{ flexDirection: { sx: "column", md: "row" }}}>
        <Box 
        sx={{ height:{ sx: 'auto', md: '92vh' }, 
        borderRight:'1px solid white', 
        px:{ sx: 0, md: 2}  }}>
          sidebar
        </Box>
    </Stack>
  )
}


export default feed
