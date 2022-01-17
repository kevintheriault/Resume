import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import photo from "./images/faceshot.jpg";
import "./about.css";
import styled from "styled-components";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Heading = styled(Typography)`
color: white;
font-weight: 700;
padding-top: 10px;
`
const Body = styled(Typography)`
color: lightgrey;
font-weight: 300;
font-size: 1.1rem;
line-height: 1.6;
`
const ResumeButton = styled(Button)`
background-color: grey;
:hover{
    background-color: #525252;
}
`
function About(){
    return (
        <Container maxWidth={false} id="aboutme" sx={{backgroundColor: "#424242", mt:"-64px", py:"50px"}}>

        <Heading variant="h3" align="center">About Me</Heading>
            {/* Nest containers so that the background container is fullwidth and nested has margins */}
            <Container maxWidth={'md'}>

            <Grid container spacing={2}>

                {/* ROW1 */}
                <Grid item xs={12}>
                    <Body id='about' align="left">My name is Kevin Theriault and I am a Software Developer based out of Burlington, Ontario.  
                    I graduated with Honours from Sheridan College where I gained experience in Enterprise Software development as well as Full Stack Web Development.
                    This experience includes working as Lead Programmer on projects and creating Project Management plans.  My favourite language
                    currently is JavaScript and my favourite library is React.
                    </Body>
                </Grid>

                {/* ROW 2 */}
                <Grid item sx={{display:{xs: "none", md: "block"}, py: '5px', pr: '10px'}} xs={0} md={3}>
                    <Box textAlign='right'>
                        <img className="faceshot" src={photo} />
                    </Box>
                </Grid> 
                <Grid item xs={6} md={2.5}>
                <Heading id='contact-heading' align='left'>
                        Contact Info:
                    </Heading>
                    <Body>
                        Kevin Theriault <br/>
                        kevin@theriake.ca <br/>
                        (647)656-1337 <br/>
                    </Body>
                </Grid>

                <Grid item xs={6} md={3}>
                <Heading id='contact-heading' align='left'>
                        Traditional Resume:
                    </Heading>
                    <ResumeButton startIcon={<FileDownloadIcon/>} variant="contained">
                        Download Resume
                    </ResumeButton>

                </Grid>



            </Grid>
            </Container>
        </Container>
    )
}

export default About;