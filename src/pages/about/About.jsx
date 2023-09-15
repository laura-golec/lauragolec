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
        <div className='about' justifyContent='center' paddingBottom='10vh'>
            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', justifySelf: 'center!important' }}>
                <Profile />
                <Typography variant='h3' sx={{ backgroundColor: 'var(--mainbg)', color: 'var(--accent)', paddingTop: '2vh', textAlign: 'center' }}>
                    About Me
                </Typography>
            </div>

            <div className='aboutContent' style={{ maxWidth: '800px' }}>
                <Typography variant='body1' >
                    Hi, I am Laura Golec! I am a 4th year student in Trinity College Dublin, in the Computer Science Masters Programme. I am currently seeking a 6-8 month software engineering internship at the beginning of 2024 as part of my course.
                    <br />
                    <br />

                    I have a particular interest in frontend development. I love working with and creating coherent and maintainable frontend code using modern standards.

                    <br />
                    <br />
                </Typography>
                <Typography variant='h5' sx={{ borderBottom: 'double 2px var(--fadedcolour)' }}>
                    Education
                </Typography>
                <div style={{ margin: '0 1vw' }}>
                    <div style={{ display: 'flex', direction: 'row', borderBottom: 'dotted 1px var(--fadedcolour)', justifyContent: 'space-between' }}>
                        <Typography variant='h6' sx={{ width: 'fit-content', fontWeight: '600' }}>
                            Tertiary: <i>Trinity College Dublin</i>
                        </Typography>
                        <Typography variant='h6' sx={{ width: 'fit-content' }}>
                            Sept. 2020 - Present
                        </Typography>
                    </div>
                    <Typography variant='body1' sx={{ borderBottom: 'dotted 1px var(--fadedcolour)', fontWeight: '600' }}>
                        <i>Bachelor in Computer Science</i>
                    </Typography>
                    <Typography variant='body1' sx={{ borderBottom: 'solid 1px var(--fadedcolour)', fontWeight: '500' }}>
                        Upper Second Class Honours in Third Year
                        <br />
                        Upper Second Class Honours in Second Year
                        <br />
                        First Class Honours in First Year (Book Prize)
                    </Typography>

                    <div style={{ display: 'flex', direction: 'row', borderBottom: 'dotted 1px var(--fadedcolour)', justifyContent: 'space-between' }}>
                        <Typography variant='body1' sx={{ width: 'fit-content', fontWeight: '600' }}>
                            Secondary: <i>Adamstown Community College</i>
                        </Typography>
                        <Typography variant='body1' sx={{ width: 'fit-content' }}>
                            Sept. 2015 - June 2020
                        </Typography>
                    </div>
                </div>

                <br />
                <Typography variant='h5' sx={{ borderBottom: 'double 2px var(--fadedcolour)' }}>
                    Skills
                </Typography>
                <div style={{ margin: '0 1vw' }}>
                    <Typography variant='h6' sx={{ width: 'fit-content', fontWeight: '600' }}>
                        Languages
                    </Typography>
                    <Typography variant='body1' sx={{ borderBottom: 'solid 1px var(--fadedcolour)', fontWeight: '500' }}>
                        English - <i>Fluent</i>
                        <br />
                        Polish - <i>Fluent</i>
                    </Typography>

                    <Typography variant='h6' sx={{ width: 'fit-content', fontWeight: '600' }}>
                        Programming
                    </Typography>
                    <Typography variant='body1' sx={{ borderBottom: 'solid 1px var(--fadedcolour)', fontWeight: '500' }}>
                        JavaScript
                        <br />
                        Python
                        <br />
                        Java
                        <br/>
                        C
                        <br/>
                        HTML5
                        <br/>
                        CSS
                        <br/>
                        SQL
                        <br/>
                    </Typography>

                    <Typography variant='h6' sx={{ width: 'fit-content', fontWeight: '600' }}>
                        Software
                    </Typography>
                    <Typography variant='body1' sx={{ borderBottom: 'solid 1px var(--fadedcolour)', fontWeight: '500', marginBottom:'5vh' }}>
                        React
                        <br />
                        Figma 
                        <br/>
                        Vue.js
                        <br />
                        Github
                        <br/>
                        Gitlab
                        <br/>
                        Visual Studio Code
                        <br/>
                        React Native
                        <br/>
                        MySQL
                        <br/>
                    </Typography>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default About
