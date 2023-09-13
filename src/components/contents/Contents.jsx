import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import './Contents.css';
import { useLocation } from 'react-router-dom';

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
    document.querySelector(headingId).scrollIntoView();
  }

  
  

  return (
    <Box sx={{ padding: '3vh 1vw', position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'var(--secondary)', justifyContent: 'center',}}>
      <Typography color='var(--text)' variant='h4' borderBottom='2px solid' marginBottom='1vh' padding='0 1vw'>Contents</Typography>
      <ul justifyContent='center' alignText='center'>
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
  );
};

export default Contents;
