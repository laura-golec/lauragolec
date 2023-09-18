import React, { useEffect, useState } from 'react';
import { Contents } from '../../components';
import { ProjectsContent } from '../';
import { Typography } from '@mui/material';
import StickyBox from 'react-sticky-box';

var widths = [0, 700];

const Projects = () => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= widths[1]);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= widths[1]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderWideScreenHeader = () => (
    <div>
      <Contents />
    </div>
  )

  const headerWide = () => (
    <Typography variant='h2' padding='1vw' color='var(--accent)' backgroundColor='var(--mainbg)'>
        Projects
      </Typography>
  )

  const renderMobileHeader = () => (
    <div style={{ display: 'flex', direction: 'row', alignItems: 'center'}}>
      <Contents />
      <Typography variant='h2' padding='1vw' color='var(--accent)' backgroundcolor='var(--mainbg)'>
        Projects
      </Typography>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', overflow: 'scroll', backgroundColor: 'var(--secondary)', justifyContent:'start' }}>
      <div>
      <StickyBox>
        {isWideScreen ? renderWideScreenHeader(): undefined}
        </StickyBox>
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
