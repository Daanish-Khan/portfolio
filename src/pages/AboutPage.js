import * as React from 'react';
import { Box, Button, Stack, Typography, createTheme } from '@mui/material';

import { motion, useAnimation } from 'framer-motion';

import { COLORS } from '../components/consts';
import selfie1 from '../graphics/selfie-1.jpg';
import selfie2 from '../graphics/selfie-2.jpg';
import selfie3 from '../graphics/selfie-3.jpg';
import selfie4 from '../graphics/selfie-4.jpg';
import selfie5 from '../graphics/selfie-5.jpg';
import selfie6 from '../graphics/selfie-6.jpg';
import cv from '../graphics/cv.png';
import ImageCarousel from '../components/ImageCarousel';
import { ThemeProvider } from '@emotion/react';

function AboutPage({ inView, innerRef, heightBreakpoints, widthBreakpoints }) {
    const controls_title = useAnimation();
    const controls_carousel = useAnimation();
    const controls_text = useAnimation();
    const controls_button = useAnimation();
    const controls_resume = useAnimation();
    const images = [
        {
            label: 'It\'s me!',
            imgPath: selfie1,
        },
        {
            label: 'Staring into the distance... probably at a food stand.',
            imgPath: selfie2,
        },
        {
            label: 'Me n da homies',
            imgPath: selfie3,
        },
        {
            label: 'Not one peace sign... but two?!',
            imgPath: selfie4,
        },
        {
            label: 'I should\'ve bought that red hat',
            imgPath: selfie5,
        },
        {
            label: 'I swear this was for ironic effect',
            imgPath: selfie6,
        },
      ];

    React.useEffect(() => {
        console.log(heightBreakpoints)
        if (inView) {
            controls_title.start({ opacity: 1, y: 0, transition: { duration: 0.7 } })
            controls_text.start({ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } })
            controls_carousel.start({ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } })
            controls_button.start({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5 } })
            controls_resume.start({ opacity: 1, transition: { duration: 0.7, delay: 0.5 } })
        } else {
            controls_title.start({ opacity: 0, y: -50 })
            controls_text.start({ opacity: 0, x: -50 })
            controls_carousel.start({ opacity: 0, x: 50 })
            controls_button.start({ opacity: 0, y: 50 })
            controls_resume.start({ opacity: 0 })
        }
    }, [controls_title, inView, controls_text, controls_carousel, controls_button, controls_resume]);

    const theme = createTheme({
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: COLORS.primaryColor,
                '&:hover': {
                    backgroundColor: COLORS.primaryFocusedColor,
                }
              },
            }
          }
        },
        typography: {
            allVariants: {
                fontFamily: 'Poppins',
            }
        }
      })
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
                <motion.div animate={controls_title}>
                    <Typography 
                        variant="h2"
                        sx={{
                            color: "white", 
                            textAlign: {xs: "center"}, 
                            display: {xs: "block"}, 
                            fontWeight: "medium",
                            paddingTop: (heightBreakpoints.xs && !heightBreakpoints.sm) ? "0%" : (heightBreakpoints.sm && !heightBreakpoints.md) ? "3%" : (heightBreakpoints.md && !heightBreakpoints.lg) ? "3%" : (heightBreakpoints.lg && !heightBreakpoints.xl) ? "3%" : "10%",
                        }}> About
                    </Typography>
                </motion.div>
                <Stack direction={{xs: 'column', md: 'row'}} spacing={3} sx={{alignItems: "center", paddingX: (widthBreakpoints.xs && !widthBreakpoints.sm) ? "4%" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "3%" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "5%" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "8%" : "15%"}}>
                    {!widthBreakpoints.md &&
                        <motion.div animate={controls_carousel} style={{width: "100%", justifyContent: "center", display: "flex"}}>
                            <ImageCarousel images={images} widthBreakpoints={widthBreakpoints} />
                        </motion.div>
                    }
                    <motion.div animate={controls_text}>
                        <Typography 
                            variant={(heightBreakpoints.xs && !heightBreakpoints.sm) ? "body1" : (heightBreakpoints.sm && !heightBreakpoints.md) ? "body2" : (heightBreakpoints.md && !heightBreakpoints.lg) ? "h6" : (heightBreakpoints.lg && !heightBreakpoints.xl) ? "h5" : "h5"}
                            sx={{
                                color: "white", 
                                alignItems: {xs: "center"},
                                display: {xs: "flex"}, 
                                fontWeight: {xs: "regular", md: "medium"},
                                
                            }}> Hello! I'm Daanish Khan, a full stack software developer. I'm also a 5th year student at the University of Ottawa! <br/> <br/>
                            I'm proficient in many languages, including Java, JavaScript, Python, and C++. I'm also versed in React (which this website was developed with!), Spring Boot, and Node.JS.
                            <br/> <br/>
                            When I'm not coding, I like to go on bike rides, play video games, and start a million projects that I never get around to finishing :)
                            <br/> <br/>
                            Interested in what I do? Check out my resume or scroll down to see my cool projects that I actually finished!
                        </Typography>
                    </motion.div>
                    {widthBreakpoints.md &&
                        <motion.div animate={controls_carousel} style={{width: "100%"}}>
                            <ImageCarousel images={images} widthBreakpoints={widthBreakpoints} />
                        </motion.div>
                    }
                </Stack>
                {!heightBreakpoints.xl &&
                    <motion.div animate={controls_button}>
                        <Box sx={{display: "flex", justifyContent: "center"}}>   
                            <ThemeProvider theme={theme}>
                                <Button href={"http://daanish-khan.github.io/resume/cv.pdf"} size="large" variant="contained">Resume</Button>
                            </ThemeProvider>
                        </Box>
                    </motion.div>
                }
                {heightBreakpoints.xl &&
                    <motion.div animate={controls_resume}>
                        <a download="Daanish-Khan_Resume" href={cv} style={{display: "flex", justifyContent: "center"}}>
                            <img style={{height: "auto", width: "70%", display: "block" }} src={cv} alt="resume"/>
                        </a>
                    </motion.div>   
                }
                
            </Stack> 
        </Box>
    )
}

export default AboutPage;