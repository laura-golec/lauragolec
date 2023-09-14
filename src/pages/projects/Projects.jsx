import React from 'react';
import { Contents } from '../../components';
import { ProjectsContent } from '../';
import { Typography } from '@mui/material';
import StickyBox from 'react-sticky-box';

const Projects = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', overflow: 'clip', backgroundColor: 'var(--secondary)'}}>
      <StickyBox><Contents /></StickyBox>

      <div paddingbottom='5vh' marginbottom='5vh' backgroundColor='var(--mainbg)'>
        <Typography variant='h2' padding='1vw' color='var(--accent)' backgroundColor='var(--mainbg)'>
          Projects
        </Typography>
        <ProjectsContent style={{ paddingBottom: '5vh', backgroundColor:'var(--mainbg)'}} />
      </div>
    </div>
  );
};

export default Projects;
