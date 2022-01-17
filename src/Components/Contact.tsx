import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

const Heading = styled(Typography)`
color: black;
font-weight: 700;
padding-top: 10px;
`

const Body = styled(Typography)`
color: black;
font-weight: 300;
font-size: 1.1rem;
line-height: 1.6;
`

const ContactButton = styled(Button)`
background-color: grey;
:hover{
    background-color: #525252;
}
`
function Contact(){
    init("user_qGzRF5isjaIyTdUhVV4C4");

    function sendEmail(){
    emailjs.sendForm('service_3gj3a3b', 'template_n1mjtss', '#form')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
};
    return (

        <Container maxWidth='md' sx={{my: "50px"}} id="contact" >
        <Heading variant="h3" align="center">Contact Me!</Heading>
        <Body>I'd love for you to get in touch with me whether it's to work on a project or if you think I'd be a good fit for your team!</Body>
            
                <Box component="form"
                     autoComplete="off"
                     id="form"
                     sx={{m:"30px"}}
                     onSubmit={sendEmail}>

                    <Grid container direction={"column"} >
                        <Grid item>
                            <TextField required
                                   fullWidth
                                   margin="dense"
                                   id="name"
                                   name="name"
                                   label="Your Name"
                                   placeholder="Kevin" />
                        </Grid>

                        <Grid item>
                            <TextField required
                                   fullWidth
                                   margin="dense"
                                   id="email"
                                   name="email"
                                   label="Your E-Mail"
                                   placeholder="kevin@theriake.ca"/>
                        </Grid>

                        <Grid item>
                            <TextField required
                                       fullWidth
                                       multiline
                                       margin="dense"
                                       rows={6}
                                       maxRows={6}
                                       id="message"
                                       name="message"
                                       label="Message"
                                       placeholder="Hey! We like your work!"/>
                        </Grid>
                            <Grid item>
                                <Box component="div" textAlign="right">
                                    <ContactButton type="submit" variant="contained"> SEND ME AN EMAIL! </ContactButton>
                                </Box>
                            </Grid>
                    </Grid>
                </Box>     
        </Container>
    )
}

export default Contact;
