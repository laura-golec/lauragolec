import React from 'react';
import { Contents } from '../../components';
import { ProjectsContent } from '../';
import { Typography } from '@mui/material';

const Projects = () => {
  return (
      <div style={{display: 'flex', flexDirection: 'row', position: 'relative', overflow: 'clip', backgroundColor: 'var(--mainbg)'}}>
      <Contents/>
      <div paddingbottom= '5vh' marginbottom='5vh'>
      <Typography variant='h2' padding='1vw' color='var(--accent)'>
              Projects
      </Typography>
      <ProjectsContent style={{paddingBottom: '5vh'}}/>
      </div>
    </div>
  );
};

export default Projects;
