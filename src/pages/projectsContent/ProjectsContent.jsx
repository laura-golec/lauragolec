import React from 'react';
import { Box, Typography } from '@mui/material';
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
            The project I am most proud of is this personal website. It allowed me to apply my knowledge in Javascript, React, and modern web development standards. It also allowed me to have full creative control over it as it was a personal project.
            <br />
            <div className="imagesContainer">
              <img src={Homefull} />
              <img src={Homemobile} />
            </div>
            <br />
            The main component of this project that I am proud of is its responsiveness. I have taken great care to include a responsive design that changes the layout based on the browser window width. This allows the website to be easily accessible regardless of the device it is being rendered on.
            <br />
            <div className="imagesContainer">
              <img src={Homefull} />
              <img src={Aboutme} />
            </div>
            <br />
            Another component that was important to me was the multiple animations used throughout the website. I opted to use css animations as opposed to uploading gifs as this allows me to scale down the size of my application. It also allows me to randomise the animations to make the experience of using the website feel fresh every time it is visited.
          </Typography>
        </div>

        <br /><br />

        <div id="heading2" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            Ingreader
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>
            A major project that allowed me to develop my leadership and collaboration skills was the Ingreader app that I made in collaboration with my teammates and University of Aveiro (Universidade de Aveiro). It is a mobile application that allows the user to take a photo of an ingredients label and be told information about each ingredient on the label. It could be used for allergen detection or for health conscious individuals that want to avoid certain ingredients.
            <br />

            <div className="imagesContainer">
              <img src={Ingreaderscreenone} />
              <img src={Ingreaderscreentwo} />
            </div>

            <br />
            I was a product owner, a team co-leader, and a frontend team leader. This greatly developed both my leadership and collaboration skills. It also developed my programming skills as we were working with technologies I had never used before, including Google Vision. The framework we used for this project was React Native, which boosted my confidence in working with Javascript and React.

            <br />
            <div className="imagesContainer">
              <img src={Ingreaderfigma} style={{ width: '40vw', height: '100%' }} />
            </div>

            <br />
            This was also the first project where I was required to create a UI mockup using the software Figma. This allowed our team to develop the frontend quicker as we had a prototype to work off of.
          </Typography>
        </div>

        <br /><br />
        <div id="heading3" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            CaptionBoard
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>

            An earlier project that began my experience with frontend development was the collaborative web-app titled “Captionboard”. This was a web-app developed under the mentorship of ADAPT. Its intended purpose was to provide a platform for collaboration in captioning images for commercial purposes such as advertisements. It would allow certain users to upload images they need captions for along with a general blurb and theme of what they would like to convey with the captions. Freelancers would then be shown these requests and provide captions for review.
            <br />
            <div className="imagesContainer">
              <img src={CaptionBoardscreenone} />
              <img src={CaptionBoardscreentwo} />
            </div>
            <br />
            As a junior member of the team, I was in charge of designing and implementing the frontend ui for multiple pages of the web-app. I implemented this using Vue.js. My work was overseen by a senior frontend lead, which gave me the opportunity to develop the individual research skills along with a knowledge of when to ask for help.
          </Typography>
        </div>

        <br /><br />
        <div id="heading4" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            Tuneify
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>

            The current project I am working on in my spare time is called “Tuneify”. It is an alternative client to Spotify which utilises their API to allow users to have a more customised experience in terms of UI while providing the same access to music and podcast libraries.
            <br />
            <div className="imagesContainer">
              <img src={Tuneifyfigma} style={{ width: '40vw', height: '100%' }} />
            </div>
            <br />
            It is a work in progress, however I am planning on creating it using the React Native framework. I have some designs created on Figma, as pictured above.
          </Typography>
        </div>

        <br /><br />
        <div id="heading5" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            UDP File Transfer Protocol
          </Typography>
          <Typography variant='body1' sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>
            One of my favourite university projects was designing and creating my own program which would transfer files of any type and size between two “computers” (virtual nodes in docker) using the UDP Transfer Protocol.
            <br />
            <div className="imagesContainer">
              <img src={UDPgraphic} style={{ width: '40vw', height: '100%' }} />
            </div>
            <br />
            This gave me a deeper appreciation for network transfers and allowed me to understand what is happening at a base level when transferring files. It also gave me experience in using Docker and Wireshark.
          </Typography>
        </div>

        <br /><br />
        <div id="heading6" className="projectContainer">
          <Typography variant="h3" alignSelf='start'>
            Covid Case Tracker
          </Typography>
          <Typography var="body1" sx={{ display: 'grid', justifyContent: 'center', direction: 'column' }}>

            During the lockdown of 2020, I had been assigned a group project which entailed creating an application which would extract data from an excel sheet and display it in an interactive way. I was a frontend leader and created most of the UI and UX components. This included a data visualisation function and a search function that would allow the user to sort the data by location.
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

            A very interesting project I took on in the third year of my studies was creating a Roman Numeral calculator using regular expression processing and Bison. This was unlike anything I had done before and utilised Flex and Bison to process regular expressions and calculate equations composed of roman numerals. It also made me more comfortable with C as this was the language used for processing the equations once they had been turned into integers.
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
            This also included working with algorithms, particularly Dijkstra"s shortest path algorithm to determine which nodes to go through in order to take the shortest possible path.
          </Typography>
        </div>
      </div>


    </Box >
  );
}

export default ProjectsContent;
