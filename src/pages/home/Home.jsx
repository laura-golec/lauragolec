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

var widths = [0, 1400];

function Home() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= widths[1]);

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
        <div className="home-container" style={{overflow:'clip'}}>
          <div className="seventy-percent">
            <Typography sx={{
              fontWeight: '800',
              position: 'absolute',
              fontSize: '100px',
              zIndex: '1',
              color: 'var(--accent)',
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
              color: 'var(--text)',
              top: '40%',
              left: '20%'
            }}>
              My name is
            </Typography>
            <Typography sx={{
              fontWeight: '900',
              position: 'absolute',
              fontSize: '12vw',
              zIndex: '1',
              color: 'var(--primary)',
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
                  fontSize: '2.5vw',
                  zIndex: '1',
                  color: 'black',
                  top: '25%',
                  left: '40%'
                }}>
                  I am a Computer <br />
                  Science student
                </Typography>
                <Typography sx={{
                  fontWeight: '400',
                  position: 'absolute',
                  fontSize: '1.75vw',
                  zIndex: '1',
                  color: 'black',
                  top: '40%',
                  left: '40%'
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
        <Box sx={{ display: 'flex', position: 'relative', marginBottom: 0, height: '91vh', width: '100%', overflow: 'clip',}}>

          <Box sx={{ display: 'flex', flexDirection: 'column', zIndex: '5', position: 'absolute', height:'91vh', top: '7vh' }}>
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '15vw',
                color: 'var(--accent)',
                zIndex: '3',
                bottom: '72vh',
                left: '4vw',
                position: 'absolute',
              }}
            >
              Hey!
            </Typography>
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '6vh',
                color: 'var(--text)',
                bottom: '65vh',
                textAlign: 'center',
                position: 'absolute',
                width: '70vw',
                left: '10vw'
              }}
            >
              My name is
            </Typography>
            <Typography
              sx={{
                fontWeight: '900',
                fontSize: '20vw',
                color: 'var(--primary)',
                margin: '0',
                bottom: '42vh',
                position: 'absolute',
                width: '100vw',
                left: '4vw'
              }}
            >
              LAURA
            </Typography>
            <Typography
              sx={{
                fontWeight: '900',
                fontSize: '20vw',
                color: 'var(--primary)',
                margin: '-5vh 0',
                textAlign: 'center',
                bottom: '30vh',
                width: '100vw',
                position: 'absolute'
              }}
            >
              GOLEC
            </Typography>

            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '2vh',
                color: 'var(--fadedcolour)',
                left: '4vw',
                textAlign: 'left',
                bottom: '15vh',
                position: 'absolute',
                width: '70vw'
              }}
            >
              I am Computer Science student <br />
              currently looking for an internship
            </Typography>

            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '2vh',
                color: 'var(--fadedcolour)',
                left: '-4vw',
                textAlign: 'right',
                position: 'absolute',
                bottom: '10vh',
                width: '100vw'
              }}
            >
              Check out my work!
            </Typography>
          </Box>

          <div style={{ position: 'relative', display: 'flex', width: '100vw', }}>
            {/* Green wave and rectangle*/}
            <div style={{ position: 'absolute', height: '91vh', zIndex: '1', width: '100%' }}>
              <div style={{display: 'flex', flexDirection: 'column-reverse', width: '100%', position:'relative', height: '91vh' }}>
                {/* Blue rectangle */}

                <div
                  style={{
                    left: '0',
                    width: '100%',
                    height: '40vh',
                    backgroundColor: 'rgba(210, 224, 239, 0.9)', // Match wave color with 0.9 alpha
                  }}
                ></div>
                
                {/* Green wave */}
                <div
                  style={{
                    width: '100%',
                    height: '10vh',
                    display: 'inline-block',
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
                      {/* SVG Content */}
                      <defs>
                        <path
                          id="gentle-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                      </defs>
                      <g className="parallax">
                        <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(210, 224, 239,0.5)" />
                        <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(210, 224, 239,0.3)" />
                        <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(210, 224, 239,0.1)" />
                        <use xlinkHref="#gentle-wave" x={48} y={6} fill="rgba(210, 224, 239,0.7)" />
                      </g>
                    </svg>
                  </div>
                </div>

              </div>
            </div>


            {/* Green wave and rectangle*/}
            <div style={{ position: 'absolute', height: '91vh', zIndex: '2', width: '100%' }}>
              <div style={{display: 'flex', flexDirection: 'column-reverse', width: '100%', position:'relative', height: '91vh' }}>
                {/* Blue rectangle */}

                <div
                  style={{
                    left: '0',
                    width: '100%',
                    height: '5vh',
                    backgroundColor: 'rgba(65, 180, 122, 0.9)', // Match wave color with 0.9 alpha
                  }}
                ></div>
                
                {/* Green wave */}
                <div
                  style={{
                    width: '100%',
                    height: '10vh',
                    display: 'inline-block',
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
                      {/* SVG Content */}
                      <defs>
                        <path
                          id="gentle-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                      </defs>
                      <g className="parallax">
                        <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(65, 180, 122,0.5)" />
                        <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(65, 180, 122,0.3)" />
                        <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(65, 180, 122,0.1)" />
                        <use xlinkHref="#gentle-wave" x={48} y={6} fill="rgba(65, 180, 122,0.7)" />
                      </g>
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </Box>
      );
    }
  }

  return renderContent();
}

export default Home;
