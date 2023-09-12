import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import BlobOne from './images/blobone.png';
import BlobTwo from './images/blobtwo.png';
import BlobThree from './images/blobthree.png';
import BlobFour from './images/blobfour.png';
import BlobFive from './images/blobfive.png';
import BlobSix from './images/blobsix.png';
import BlobSeven from './images/blobseven.png';
import { Box, Typography } from '@mui/material';

const getRandomPosition = () => {
  const randomX = (Math.random() * 5 - 1).toFixed(2);
  const randomY = (Math.random() * 5 - 1).toFixed(2);

  return { x: randomX, y: randomY };
};

var widths = [0, 640, 1920];

function Home() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= widths[2]);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= widths[2]);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function renderContent() {
    if (isWideScreen) {
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
                  I am a Computer <br />
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
                  Currently looking for <br />
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
    } else {
      return (
        <Box sx={{ display: 'flexbox', position: 'relative', marginBottom: 0, paddingBottom: '-2',}}>

          <Box sx={{ display: 'flexbox', zIndex: '5', position: 'relative'}}>
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '80px',
                zIndex: '1',
                color: 'white',
                margin: 2,
                zIndex: '3'
              }}
            >
              Hey!
            </Typography>
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '60px',
                zIndex: '1',
                color: 'white',
                margin: 2,
                marginLeft: 8,
                zIndex: '3'
              }}
            >
              My name is
            </Typography>
            <Typography
              sx={{
                fontWeight: '900',
                fontSize: '28vw',
                zIndex: '1',
                color: 'white',
                margin: 2,
                zIndex: '23',
              }}
            >
              LAURA
              GOLEC
            </Typography>
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '20px',
                zIndex: '1',
                color: 'var(--fadedcolour)',
                margin: 2,
                textAlign: 'left',
                zIndex: '3'
              }}
            >
              I am currently looking <br />
              for an internship
            </Typography>
            <Link to='/projects'>
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '20px',
                  zIndex: '1',
                  color: 'var(--fadedcolour)',
                  margin: 5,
                  textAlign: 'right',
                  zIndex: 3
                }}
              >
                Check out <br />
                my work
              </Typography>
            </Link>
          </Box>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              zIndex: '1', // To place it behind other content
              height: '10vh',
              marginBottom: '-2',
              paddingBottom: '-2',
            }}
          >
            <div className="hero_area">
              <svg
                className="waves smallWave"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(50, 168, 147,0.5)" />
                  <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(50, 168, 166,0.3)" />
                  <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(58, 201, 173,0.1)" />
                  <use xlinkHref="#gentle-wave" x={48} y={7} fill="rgba(50, 168, 147,0.7)" />
                </g>
              </svg>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              zIndex: 1, // To place it behind other content
              height: '50vh',
              marginBottom: '-2',
              paddingBottom: '-2',
            }}
          >
            <div className="hero_area">
              <svg
                className="waves bigWave"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(11, 33, 28,0.5)" />
                  <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(11, 33, 28,0.3)" />
                  <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(11, 33, 28,0.1)" />
                  <use xlinkHref="#gentle-wave" x={48} y={7} fill="rgba(11, 33, 28,0.7)" />
                </g>
              </svg>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-10vh',
              width: '100%',
              zIndex: '-10', // To place it behind other content
              height: '50vh',
              marginBottom: '-2',
              paddingBottom: '-2',
              backgroundColor: "rgba(11, 33, 28,0.7)"
            }}>
            </div>
          </div>
        </Box>
      );
    }
  }

  return renderContent();
}

export default Home;
