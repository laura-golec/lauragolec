import React from "react";
import './About.css';
import { Typography } from "@mui/material";
import BlobOneAbout from './images/bloboneabout.png';
import BlobTwoAbout from './images/blobtwoabout.png';
import BlobThreeAbout from './images/blobthreeabout.png';
import BlobFourAbout from './images/blobfourabout.png';
import ProfilePic from './images/profile.jpg';


const getRandomPosition = () => {
    const randomX = (Math.random() * 5 - 1).toFixed(2);
    const randomY = (Math.random() * 5 - 1).toFixed(2);

    return { x: randomX, y: randomY };
};

function About() {
    const blob1Position = getRandomPosition();
    const blob2Position = getRandomPosition();
    const blob3Position = getRandomPosition();
    const blob4Position = getRandomPosition();

    const Profile = () => (
            <div className="blob-containerAbout">
                <img src={ProfilePic} className="blobAbout" style={{ height: '18vw', borderRadius: '50%', zIndex: '8', top: '15%', left: '20%' }} />
                <img
                    src={BlobOneAbout}
                    alt="Blob One"
                    className="blobAbout blob-1About"
                    style={{ '--x': `${blob1Position.x}%`, '--y': `${blob1Position.y}%` }}
                />
                <img
                    src={BlobTwoAbout}
                    alt="Blob Two"
                    className="blobAbout blob-2About"
                    style={{ '--x': `${blob2Position.x}%`, '--y': `${blob2Position.y}%` }}
                />
                <img
                    src={BlobThreeAbout}
                    alt="Blob Three"
                    className="blobAbout blob-3About"
                    style={{ '--x': `${blob3Position.x}%`, '--y': `${blob3Position.y}%` }}
                />
                <img
                    src={BlobFourAbout}
                    alt="Blob Four"
                    className="blobAbout blob-4About"
                    style={{ '--x': `${blob4Position.x}%`, '--y': `${blob4Position.y}%` }}
                />
            </div>
    )

    return (
        <div className='about' justifyContent='center'>
            <div style={{ display: 'flex', alignContent:'center', justifyContent:'center', flexDirection:'column', justifySelf:'center!important'}}>
                    <Profile />
                <Typography variant='h3' sx={{ backgroundColor: 'var(--mainbg)', color: 'var(--accent)', paddingTop: '2vh', textAlign: 'center'}}>
                    About Me
                </Typography>
            </div>

            <div className='aboutContent'>
                <Typography variant='body1'>
                    I am a 4th year Trinity Computer Science student in the Masters Programme of my course.

                </Typography>
            </div>
        </div>
    )
}

export default About