import { useScrollTrigger } from '@mui/material';
import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

function App() {
    
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Resume />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
