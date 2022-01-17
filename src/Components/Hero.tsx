import { Container, Typography, Box, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import heroImage from './images/hero-image2.jpg';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontawesomeObject, Icon } from "@fortawesome/fontawesome-svg-core";

const HeroContainer = styled(Container)`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${heroImage});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
position: relative;
top: -64px;
color: white;
`

const HeroBox = styled(Box)`
position: relative;
top: -60px;
`

const Name = styled(Typography)`
font-weight: 700;
text-shadow: 2px 3px 4px rgba(0,0,0,0.47);
margin-bottom: 0.1em;
`

const Description = styled(Typography)`
font-weight: 500;
text-shadow: 3px 3px 6px rgba(0,0,0,0.67);
max-width: 600px;
margin-left: auto;
margin-right: auto;
`

const IconLI = styled(LinkedIn)`
opacity: 0.7;
filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.67));
:hover{
    color: #1093e1;
    opacity: 1;
}
`
const IconGH = styled(GitHub)`
opacity: 0.7;
filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.67));
:hover{
    color: #1093e1;
    opacity: 1;
}
`
const IconEmail = styled(Email)`
opacity: 0.7;
filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.67));
:hover{
    color: #1093e1;
    opacity: 1;
}
`
const IconDocker = styled(FontAwesomeIcon)`
opacity: 0.7;
filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.67));
:hover{
    color: #1093e1;
    opacity: 1;
}
`
let description: string = "I am a recent graduate, with honours, of Sheridan College in Computer Programming living in Burlington, Ontario.  " +
                          "After 3 years in a supervisory/management position I am looking to use my new education to change careers."
function Hero(){
    return (
        <>
        <HeroContainer id="home" maxWidth={false}>
            <HeroBox>
                <Name variant="h1" align="center" fontSize={{lg: 100,md: 70,sm: 50,xs: 50}}>
                    Hello!
                </Name>
                <Name variant="h2" align="center" fontSize={{lg: 85,md: 65,sm: 45,xs: 45}}>
                    I'm Kevin Theriault
                </Name>

                <Description variant="body1" align="center" fontSize={{lg: 20,md:20,sm: 10,xs: 10}}>
                    {description}
                </Description>
            </HeroBox>
            <Box component="span">
                <IconButton component="a" href="https://www.linkedin.com/in/kevintheriault/">
                    <IconLI sx={{fontSize: 50, color: "white"}} />
                </IconButton>
                <IconButton component="a" href="https://github.com/kevintheriault">
                    <IconGH sx={{fontSize: 50, color: "white"}}/>
                </IconButton>
                <IconButton component="a" href="mailto: kevin@theriake.ca">
                    <IconEmail sx={{fontSize: 50, color: "white"}}/>
                </IconButton>
                <IconButton component="a" href="https://hub.docker.com/u/theriake">
                    <IconDocker icon={faDocker} size="2x" color="white" />
                </IconButton>
            </Box>
        </HeroContainer>
        </>
    )
}

export default Hero;