import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import './ProjectsContent.css';

import Homefull from "./images/home-full.png";
import Homemobile from "./images/home-mobile.png";
import Aboutme from "./images/about-me.png";
import Ingreaderscreenone from "./images/ingreader-screen-one.png";
import Ingreaderscreentwo from "./images/ingreader-screen-two.png";
import Ingreaderfigma from "./images/ingreader-figma.png";
import CaptionBoardscreenone from "./images/captionboard-screen-one.png";
import CaptionBoardscreentwo from "./images/captionboard-screen-two.png";
import Tuneifyfigma from "./images/tuneify-figma.png";
import UDPgraphic from "./images/udp-graphic.png";
import Covidscreenone from "./images/covid-screen-one.png";
import Covidscreentwo from "./images/covid-screen-two.png";
import Transfergraphic from "./images/transfer-graphic.png";


function ProjectsContent() {
  return (
    <Box sx={{ padding: '2vw 1vw', color: 'var(--text)', backgroundColor: 'var(--mainbg)', display: 'flex' }} className="projects-content">
      <div>

      </div>
      <div>
        <div id="heading1" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            Personal Website
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center' }}>
            At the start of my 4th year of Computer Science, I created this website as a portfolio for my work. It has allowed me to improve my visibility, and further develop my communication skills. I have applied my knowledge in Javascript, React, and modern web development standards. It was good to have full creative control, given it was a personal project.
            <div className="imagesContainer">
              <img src={Homefull} />
              <img src={Homemobile} />
            </div>
            <br />
            I have made the design responsive, to change the layout based on the browser window width. This allows the website to be accessible regardless of the device it is being rendered on.
            <div className="imagesContainer">
              <img src={Homefull} />
              <img src={Aboutme} />
            </div>
            <br />
            The multiple animations used throughout the website were a great learning experience. I opted to use css animations as opposed to uploading gifs as this allows me to scale down the size of my application. It also allowed me to randomise the animations to make the experience of using the website feel fresh every time it is visited.
          </Typography>
        </div>

        <br /><br />

        <div id="heading2" className="projectContainer">
          <a href='https://github.com/morawi/IngReader' alignSelf='start' display='flex'>
            <Typography variant="h3" alignSelf='start' color='var(--text)'>
              Ingreader
            </Typography>
          </a>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>
            I was a co-team leader, product owner, and frontend team lead for a team of 10 TCD people in 2023, working in collaboration  with the University of Aveiro (Universidade de Aveiro). We created a mobile application that allows the user to take a photo of the ingredients label on a food package, and be told information about each ingredient on the label.  The application can be used for allergen detection or for health-conscious individuals that want to avoid certain ingredients. This project allowed me to develop my skills in leadership and collaboration skills.
            <div className="imagesContainer">
              <img src={Ingreaderscreenone} style={{ maxWidth: 'calc(33% - 5vw)' }} />
              <img src={Ingreaderscreentwo} style={{ maxWidth: 'calc(33% - 5vw)' }} />
              <img src={Ingreaderfigma} style={{ maxWidth: 'calc(33% - 5vw)' }} />
            </div>
            <br />
            This project also developed my programming skills, using technologies that included Google Vision. The framework used for this project was React Native, which developed ny experience in working with Javascript and React. I took the lead on UI design, and created a mockup using Figma. This allowed our team to develop the frontend quicker as we had a prototype to work from.
          </Typography>
        </div>

        <br /><br />
        <div id="heading3" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            CaptionBoard
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>

            My experience with frontend development started in this project - a collaboratively developed web-app titled “Captionboard”. This was a web-app developed under the mentorship of ADAPT - Trinity College’s research centre for AI-driven digital content. This web-app provides a platform for collaboration in captioning images for commercial purposes such as digital advertising. It allows admin users to upload images for which they need captions. They can also include a general blurb and theme of what they would like to convey with the captions. Freelancers can then be shown these requests and provide captions for review.
            <div className="imagesContainer">
              <img src={CaptionBoardscreenone} />
              <img src={CaptionBoardscreentwo} />
            </div>
            <br />
            As a junior member of the team, I was in charge of designing and implementing the frontend UI for multiple pages of the web-app. I implemented this using Vue.js. My work was overseen by a senior frontend lead, which gave me the opportunity to develop skills in individual research and collaboration.
          </Typography>
        </div>

        <br /><br />
        <div id="heading4" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            Tuneify
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>

            I am working on in this project in my spare time. It is called “Tuneify” - an alternative client to Spotify. It utilises Spotify's API, and allows users to have a more customised experience in terms of UI while providing the same access to music and podcast libraries.
            <br />
            <div className="imagesContainer">
              <img src={Tuneifyfigma} style={{ width: '40vw', height: '100%' }} />
            </div>
            <br />
            I have started creating the app using the React Native framework. I have initial designs created on Figma, as pictured above.
          </Typography>
        </div>

        <br /><br />
        <div id="heading5" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            UDP File Transfer Protocol
          </Typography>
          <Typography variant='body1' sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>
            This university project involved designing and creating my own program which would transfer files of any type and size between two “computers” (virtual nodes in docker) using the UDP Transfer Protocol.
            <br />
            <div className="imagesContainer">
              <img src={UDPgraphic} style={{ width: '40vw', height: '100%' }} />
            </div>
            <br />
            This gave me a deeper appreciation for network transfers and allowed me to understand what is happening at a base level when transferring files. It also gave me experience in using Docker and Wireshark. The project report included a justification for my design choices, and reflected on what I could improve if I approached the project again.
          </Typography>
        </div>

        <br /><br />
        <div id="heading6" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            Covid Case Tracker
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>

            During the lockdown of 2020, I was assigned a group project which entailed creating an application which would extract data from an excel sheet and displaying it in an interactive way. I was a frontend leader and created most of the UI and UX components. This included a data visualisation function and a search function that would allow the user to sort the data by location.
            <br />
            <div className="imagesContainer">
              <img src={Covidscreenone} />
              <img src={Covidscreentwo} />
            </div>
            <br />
            This project gave me insight into data visualisation, working with large datasets, and creating scalable systems.
          </Typography>
        </div>

        <br /><br />
        <div id="heading7" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            Roman Numeral RegEx Calculator
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>

            An interesting project I took on in the third year of my studies involved creating a Roman Numeral calculator using regular expression processing and Bison. This utilised Flex and Bison to process regular expressions and calculate equations composed of roman numerals. It also made me more comfortable with C which was the language used for processing the equations once they had been turned into integers.
          </Typography>
          <br /><br />
        </div>
        <div id="heading8" className="projectContainer" style={{ borderBottom: 'none' }}>
          <Typography variant="h3" alignSelf='start'>
            Network Forwarding System
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>
            This was an individual project which entailed creating a network forwarding system using Python and Docker. Multiple nodes would be simulated in Docker and messages had to be sent from any node to any other node using transmitter nodes.
            <br />
            <div className="imagesContainer">
              <img src={Transfergraphic} style={{ width: '40vw', height: '100%' }} />
            </div>
            <br />
            The project included working with algorithms, particularly Dijkstra"s shortest path algorithm to determine which nodes to go through in order to take the shortest possible path.
          </Typography>
        </div>
      </div>

    </Box >
  );
}

export default ProjectsContent;
