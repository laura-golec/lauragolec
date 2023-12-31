import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Menu, IconButton } from '@mui/material';
import './Contents.css';
import { useLocation } from 'react-router-dom';
import { ExpandMore } from '@mui/icons-material';
import Fade from '@mui/material/Fade';

const Contents = () => {
  const [headings, setHeadings] = useState([]);
  const { hash } = useLocation();

  useEffect(() => {
    // Get all the headings (h2 and h3) within the second flexbox
    const headingElements = document.querySelectorAll('.projects-content div:nth-child(1) h2, .projects-content div:nth-child(1) h3');

    // Create an array of objects with the heading text and their IDs
    const headingsArray = Array.from(headingElements).map((heading, index) => ({
      text: heading.textContent,
      id: `heading${index + 1}`,
    }));

    setHeadings(headingsArray);
  }, []);

  function scrollToHeading(headingId) {
    console.log(headingId)
    document.querySelector(headingId).scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
  }

  useEffect(() => {
    if (document.getElementById(hash.slice(1))) {
      scrollToHeading(hash);
    }
  }, [hash, headings])

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > window.innerHeight);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth > window.innerHeight);
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
    if (document.getElementById(hash.slice(1))) {
      scrollToHeading(hash);
    }
  };

  const renderWideScreenContents = () => (
    <Box sx={{ padding: '8vh 1vw', position: 'sticky', top: 0, backgroundColor: 'var(--secondary)', justifycontent: 'center', }}>
      <Typography color='var(--primary)' variant='h4' borderBottom='2px solid' marginBottom='1vh' padding='0 1vw'>List of Projects</Typography>
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
          margin: '1vw',
          padding: '1vw',
          color: 'var(--mainbg)!important'
        }}
      >
          <Typography color='var(--primary)' variant='h4' borderBottom='2px solid' marginBottom='2.5vh' padding='1vh 3vw'>List of Projects</Typography>
          <ul justifycontent='left' aligntext='left'>
            {headings.map((heading) => (
              <li key={heading.id} onClick={() => {scrollToHeading(`#${heading.id}`); {handleClose()};}}>
                <Link to={`#${heading.id}`}>
                  <Typography variant='h6' marginBottom='1vh' width='100%'>
                    {heading.text}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
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
