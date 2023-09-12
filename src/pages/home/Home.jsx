import React from 'react';
import './Home.css';
import BlobOne from './images/blobone.png';
import BlobTwo from './images/blobtwo.png';
import BlobThree from './images/blobthree.png';
import BlobFour from './images/blobfour.png';
import BlobFive from './images/blobfive.png';
import BlobSix from './images/blobsix.png';
import BlobSeven from './images/blobseven.png';
import { Typography } from '@mui/material';

const getRandomPosition = () => {
  const randomX = (Math.random() * 5 - 1).toFixed(2); 
  const randomY = (Math.random() * 5 - 1).toFixed(2);

  return { x: randomX, y: randomY };
};

const Home = () => {
  const blob1Position = getRandomPosition();
  const blob2Position = getRandomPosition();
  const blob3Position = getRandomPosition();
  const blob4Position = getRandomPosition();
  const blob5Position = getRandomPosition();
  const blob6Position = getRandomPosition();
  const blob7Position = getRandomPosition();

  return (
    <div className="home-container">
      <div className="seventy-percent">
        <Typography sx={{
          fontWeight: '800',
          position: 'absolute',
          fontSize: '100px',
          zIndex: '1',
          color: 'white',
          top: '25%',
          left: '15%'
        }}>
          Hey!
        </Typography>
        <Typography sx={{
          fontWeight: '700',
          position: 'absolute',
          fontSize: '100px',
          zIndex: '1',
          color: 'white',
          top: '40%',
          left: '20%'
        }}>
          My name is
        </Typography>
        <Typography sx={{
          fontWeight: '900',
          position: 'absolute',
          fontSize: '200px',
          zIndex: '1',
          color: 'white',
          top: '65%',
          left: '10%'
        }}>
          LAURA GOLEC
        </Typography>
        <div className="blob-container">
          <div className="blob-wrapper">
            <img
              src={BlobOne}
              alt="Blob One"
              className="blob blob-1"
              style={{ '--x': `${blob1Position.x}%`, '--y': `${blob1Position.y}%` }}
            />
          </div>
          <div className="blob-wrapper">
            <img
              src={BlobTwo}
              alt="Blob Two"
              className="blob blob-2"
              style={{ '--x': `${blob2Position.x}%`, '--y': `${blob2Position.y}%` }}
            />
          </div>
          <div className="blob-wrapper">
            <img
              src={BlobThree}
              alt="Blob Three"
              className="blob blob-3"
              style={{ '--x': `${blob3Position.x}%`, '--y': `${blob3Position.y}%` }}
            />
          </div>
          <div className="blob-wrapper">
            <img
              src={BlobFour}
              alt="Blob Four"
              className="blob blob-4"
              style={{ '--x': `${blob4Position.x}%`, '--y': `${blob4Position.y}%` }}
            />
          </div>
          <div className="blob-wrapper">
            <img
              src={BlobFive}
              alt="Blob Five"
              className="blob blob-5"
              style={{ '--x': `${blob5Position.x}%`, '--y': `${blob5Position.y}%` }}
            />
          </div>
          <div className="blob-wrapper">
            <img
              src={BlobSeven}
              alt="Blob Seven"
              className="blob blob-7"
              style={{ '--x': `${blob7Position.x}%`, '--y': `${blob7Position.y}%` }}
            />
          </div>
        </div>
      </div>
      <div className="thirty-percent">
        <div className="blob-container">
          <div className="blob-wrapper">
            <Typography sx={{
              fontWeight: '700',
              position: 'absolute',
              fontSize: '50px',
              zIndex: '1',
              color: 'black',
              top: '25%',
              left: '35%'
            }}>
              I am a Computer <br/>
              Science student
            </Typography>
            <Typography sx={{
              fontWeight: '400',
              position: 'absolute',
              fontSize: '30px',
              zIndex: '1',
              color: 'black',
              top: '42%',
              left: '35%'
            }}>
              Currently looking for <br/>
              an internship
            </Typography>
            <img
              src={BlobSix}
              alt="Blob Six"
              className="blob blob-6"
              style={{ '--x': `${blob6Position.x}%`, '--y': `${blob6Position.y}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
