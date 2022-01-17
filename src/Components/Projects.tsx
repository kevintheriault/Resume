import { Container, styled, Typography, ButtonBase, Box, ImageList, ImageListItem, Link } from "@mui/material";
import covidapi from './images/covidapi.jpg';
import coviddash from './images/coviddash.jpg';
import resumesite from './images/resumesite.jpg';
import americondem from './images/americonnect.jpg';
import React, { useState } from "react";

const Heading = styled(Typography)`
color: white;
font-weight: 700;
padding-top: 10px;
`
// Image array
const images = [{
        src: covidapi,
        title: "Covid API",
        description: "TESTING",
        url: 'https://github.com/kevintheriault/covid19_api_canada'
    },
    {
        src: coviddash,
        title: "Covid Dashboard",
        description: "TESTING",
        url: 'https://theriake.dev.fast.sheridanc.on.ca/'
    },
    {
        src: americondem,
        title: "Americonnect Demo site",
        description: "TESTING",
        url: 'https://project-2b1cc.web.app/'
    },
    {
        src: resumesite,
        title: "Personal Resume",
        description: "TESTING",
        url: 'https://www.theriake.ca'
    }
]

function Projects(){
const [isHover, setIsHover] = useState();

    return (
        <Container id="projects" maxWidth={false} sx={{backgroundColor: "#424242", py:"50px"}}>
            <Container>
                <Heading variant="h3" align="center">My Projects</Heading><br/>

                <ImageList cols={4} rowHeight={200}>
                    {images.map((image) => (
                        <Link key={image.title} href={image.url}>
                          <ImageListItem>
                                <img
                                  src={image.src}
                                  alt={image.title}
                                  loading="lazy"
                                />
                          </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Container>
        </Container>
    )
}

export default Projects;