import * as React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';

import { motion, useAnimation } from 'framer-motion';

import { COLORS } from '../components/consts';
import selfie from '../graphics/selfie.jpg';

function AboutPage({ inView, innerRef }) {
    const controls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1
            })
        } else {
            controls.start({ opacity: 0 })
        }
    }, [controls, inView]);
    return (
        <Box
            sx={{
                position: "absolute",
                display: "flex",
                width: "100%",
                height: "100vh",
                top: "100vh",
                left: 0,
                flexGrow: 1,
                
            }}
        
        > 
            <Stack useFlexGap sx={{width: "100%", height: "100%"}} spacing={{xs: 5, lg: 7}} ref={innerRef}>
                <motion.div
                    animate={controls}
                >
                    <Typography 
                        variant="h2"
                        sx={{
                            color: "white", 
                            textAlign: {xs: "center"}, 
                            display: {xs: "block"}, 
                            fontWeight: "medium",
                        }}> About
                    </Typography>
                </motion.div>
                <Stack direction={{sm: 'column', md: 'row'}} spacing={5} sx={{paddingX: "5%"}}>
                    
                    <Typography 
                        variant="h6"
                        sx={{
                            color: "white", 
                            alignItems: {xs: "center"},
                            display: {xs: "flex"}, 
                            fontWeight: "medium",
                        }}> Hello! I'm Daanish Khan, a full stack software developer. I'm also a 5th year student at the University of Ottawa! <br/> <br/>
                        I'm proficient in many languages, including Java, JavaScript, Python, and C++. I'm also versed in React (which this website was developed with!), Spring Boot, and Node.JS.
                        <br/> <br/>
                        When I'm not coding, I like to go on bike rides, play video games, and start a million projects that I never get around to finishing :)
                        <br/> <br/>
                        Interested in what I do? Check out my resume or scroll down to see my cool projects that I actually finished!
                    </Typography>
                    <img style={{ width: "auto", height: 400 }} src={selfie} alt="me!" />   
                </Stack>
                
            </Stack>
            
        </Box>
    )
}

export default AboutPage;