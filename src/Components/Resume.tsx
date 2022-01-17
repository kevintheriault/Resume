import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Category = styled(Typography)`
color: black;
font-weight: 500;
text-transform: uppercase;
font-size: 1.6em;
text-decoration: underline 5px #1093e1;
`
const Body = styled(Typography)`
color: black;
font-weight: 300;
`
const Heading = styled(Typography)`
color: black;
font-weight: 500;
font-size: 2.0em;
font-family: Oswald;
`
const SubHeading = styled(Typography)`
color: #545454;
font-weight: 400;
font-size: 1.2em;
`

function Resume(){
    return (
        <Container id="resume" sx={{py:"50px"}}>
            <Grid container spacing={1}>

                {/* EDUCATION SECTION */}
                <Grid item xs={12} md={3}>
                    <Category variant="body1">Education</Category>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Grid container direction="column" spacing={2}>

                        {/* SHERIDAN */}
                        <Grid item>
                            <Body>
                                <Heading>
                                    Sheridan College
                                </Heading>
                                <SubHeading><i>Computer Programming</i> | December 2021</SubHeading>
                                I graduated from Sheridan College with a 3.7 GPA and with Honours.  My education here ranged from personal leadership development to building out fully function Java Spring Boot web applications.
                                The program focused mostly on applied aspects of programming and was project focused.  Here I learned many languages including: Java, C, C#, HTML5, CSS, Javascript, SQL, PL/SQL, Bash as well as using many
                                frameworks and libraries within each language to solve problems and build out applications.  I also learned Cisco networking and Linux system administration which gave me the confidence to build out and run
                                a home server which I used to serve and deploy projects.
                            </Body>
                        </Grid>

                        {/* TRENT */}
                        <Grid item>
                            <Body>
                            <Heading>
                                    Trent University
                                </Heading>
                                <SubHeading><i>H.B.Sc Biochemistry and Molecular Biology</i> | June 2016</SubHeading>
                                I graduated from Trent with a 3.7 GPA and with Honours.  While completing my degree at Trent is when I initially became interested in programming.  I completed a research paper on the Structrual Biology of HIV
                                with the intent of looking at the chemistry and the models generated using PyMOL (a Python based molecule visualization tool).  I also used the R programming language to generate epidemiological models (SIR and variations of it) 
                                of various infectious disease looking at how different mitigation strategies could impact spread.  The main disease at the time I was interested in was Ebola in West Africa.  This unique interest of infectious diseases
                                and programming lead me to create my first programming projects (A simple COVID API and Dashboard).
                            </Body>
                        </Grid>
                    </Grid>
                    {/* END OF COLUMN 2 ^^ */}
                </Grid>

                {/* HORIZONTAL LINE */}
                <Grid item xs={12}>
                    <hr></hr>
                </Grid>

                {/* WORK */}
                <Grid item xs={12} md={3}>
                    <Category variant="body1">Work</Category>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Grid container direction="column" spacing={2}>

                        {/* SHERIDAN */}
                        <Grid item>
                            <Body>
                                <Heading>
                                    SAIL 
                                </Heading>
                                <SubHeading><i>Assistant Department Manager</i> | March 2017-August 2020</SubHeading>
                                I worked my way to management from a sales member.  SAIL reignited my love for the outdoors (by fuelling a gear addiction via discounted goods) and gave me the knowledge and experience
                                required to lead teams and individuals to set and achieve SMART goals.  I also managed small projects which resulted in increased KPIs year-over-year.
                            </Body>
                        </Grid>
                    </Grid>
                </Grid>

                {/* HORIZONTAL LINE */}
                <Grid item xs={12}>
                    <hr></hr>
                </Grid>
                
                {/* TECHNOLOGIES */}
                <Grid item xs={12} md={3}>
                    <Category variant="body1">TECHNOLOGIES</Category>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Grid container direction="column" spacing={2}>

                        {/* SHERIDAN */}
                        <Grid item>
                            <Body>
                                <SubHeading><i>These are the main languages/technologies I've worked with and my experience level with them</i></SubHeading>
                                <Heading>Most Experienced</Heading>
                                Java {'\u25CF'} Javascript {'\u25CF'} HTML5 {'\u25CF'} CSS {'\u25CF'} MySQL {'\u25CF'} GIT {'\u25CF'} Linux {'\u25CF'} React
                                <Heading>Somewhat Experienced</Heading>
                                PHP {'\u25CF'} MongoDB {'\u25CF'} NodeJS {'\u25CF'} Express {'\u25CF'} Docker {'\u25CF'} Angular {'\u25CF'} C {'\u25CF'} C#
                                <Heading>Dabbled with</Heading>
                                Kotlin {'\u25CF'} Shell
                            </Body>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        )
}

export default Resume;