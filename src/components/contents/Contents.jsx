import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Menu, IconButton } from '@mui/material';
import './Contents.css';
import { useLocation } from 'react-router-dom';
import { ExpandMore } from '@mui/icons-material';
import Fade from '@mui/material/Fade';


var widths = [0, 1400];

const Contents = () => {
  const [headings, setHeadings] = useState([]);
  const { hash } = useLocation();

  useEffect(() => {
    // Get all the headings (h2 and h3) within the second flexbox
    const headingElements = document.querySelectorAll('.projects-content div:nth-child(2) h2, .projects-content div:nth-child(2) h3');

    // Create an array of objects with the heading text and their IDs
    const headingsArray = Array.from(headingElements).map((heading, index) => ({
      text: heading.textContent,
      id: `heading${index + 1}`,
    }));

    setHeadings(headingsArray);

    if (hash) {
      if (document.getElementById(hash)) {
        scrollToHeading(hash);
      } else {
        console.log(hash + " nooooooo doesnt exist")
      }
    }
  }, []);

  function scrollToHeading(headingId) {
    console.log(headingId)
    document.querySelector(headingId).scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (document.getElementById(hash.slice(1))) {
      scrollToHeading(hash);
    }
  }, [hash, headings])

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= widths[1]);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= widths[2]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderWideScreenContents = () => (
    <Box sx={{ padding: '3vh 1vw', position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'var(--secondary)', justifycontent: 'center', }}>
      <Typography color='var(--primary)' variant='h4' borderBottom='2px solid' marginBottom='1vh' padding='0 1vw'>Contents</Typography>
      <ul justifycontent='center' aligntext='center'>
        {headings.map((heading) => (
          <li key={heading.id} onClick={() => scrollToHeading(`#${heading.id}`)}>
            <Link to={`#${heading.id}`}>
              <Typography variant='h6' marginBottom='1vh' width='100%'>
                {heading.text}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  )

  const renderMobileContents = () => (
    <div style={{height: '100%', alignItems:'center'}}>
      <IconButton id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        <ExpandMore sx={{fontSize:'5vh'}} />
      </IconButton>
      <Menu id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          margin: '0',
          padding: '0'
        }}
      >
        <Box sx={{ padding: '2vh 1vw', position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'var(--secondary)', justifycontent: 'center', borderRadius:'1vh'}}>
          <Typography color='var(--primary)' variant='h4' borderBottom='2px solid' marginBottom='2.5vh' padding='0 1vw'>Contents</Typography>
          <ul justifycontent='left' aligntext='left'>
            {headings.map((heading) => (
              <li key={heading.id} onClick={() => scrollToHeading(`#${heading.id}`)}>
                <Link to={`#${heading.id}`}>
                  <Typography variant='h6' marginBottom='1vh' width='100%'>
                    {heading.text}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Menu>
    </div>
  )

  return (
    <div>
      {isWideScreen ? renderWideScreenContents() : renderMobileContents()}
    </div>
  );
};

export default Contents;
