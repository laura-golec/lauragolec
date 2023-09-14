import React, { useEffect, useState } from 'react';
import { Contents } from '../../components';
import { ProjectsContent } from '../';
import { Typography } from '@mui/material';
import StickyBox from 'react-sticky-box';

var widths = [0, 1400];

const Projects = () => {

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

  const renderWideScreenHeader = () => (
    <div>
      <StickyBox><Contents /></StickyBox>
    </div>
  )

  const headerWide = () => (
    <Typography variant='h2' padding='1vw' color='var(--accent)' backgroundColor='var(--mainbg)'>
        Projects
      </Typography>
  )

  const renderMobileHeader = () => (
    <div style={{ display: 'flex', direction: 'row', alignItems: 'center'}}>
      <StickyBox><Contents /></StickyBox>
      <Typography variant='h2' padding='1vw' color='var(--accent)' backgroundcolor='var(--mainbg)'>
        Projects
      </Typography>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', overflow: 'clip', backgroundColor: 'var(--secondary)' }}>
      <div>
        {isWideScreen ? renderWideScreenHeader(): undefined}
      </div>
      <div paddingbottom='5vh' marginbottom='5vh' backgroundcolor='var(--mainbg)'>
        <div>
        {isWideScreen ? headerWide(): renderMobileHeader()}
        </div>
        
        <ProjectsContent style={{ paddingBottom: '5vh', backgroundcolor: 'var(--mainbg)' }} />
      </div>
    </div>
  );
};

export default Projects;
