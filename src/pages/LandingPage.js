import * as React from 'react';
import { Box, Typography, useMediaQuery, Divider, Stack } from '@mui/material';
import { Container } from '@mui/system';
import { TypeAnimation } from 'react-type-animation';
import { motion, wrap } from 'framer-motion';
import About from '../graphics/about';
import Projects from '../graphics/projects';
import Socials from '../graphics/socials';
import Blog from '../graphics/blog';
import Contact from '../graphics/contact';
import ScrollDown from '../graphics/scrolldown';

import Waves from '../components/Waves';
import { COLORS } from '../components/consts';
import './LandingPage.css';


function LandingPage() {

    const xs = useMediaQuery('(min-height:0px)');
    const sm = useMediaQuery('(min-height:350px');
    const md = useMediaQuery('(min-height:1000px');
    const lg = useMediaQuery('(min-height:1337px');
    const xl = useMediaQuery('(min-height:2000px');

    const xsWidth = useMediaQuery('(min-width:0px)');
    const smWidth = useMediaQuery('(min-width:600px');
    const mdWidth = useMediaQuery('(min-width:900px');
    const lgWidth = useMediaQuery('(min-width:1200px');
    const xlWidth = useMediaQuery('(min-width:1536px');

    const textMotion = {
        rest: {
            opacity: 0,
            width: 0,
            x: -10,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeIn"
            },
            transitionEnd: { display: "none" }
        },
        hover: {
            opacity: 1,
            width: "100%",
            x:0,
            display: "block",
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeOut"
            }
        }
    }

    const parent = {
        rest: {
            opacity: 1,
        },
        hover: {
            opacity: 1
        }
    }


    return (

        <Container maxWidth="false"
        sx={{
            display: "flex",
            width: "100vw",
            height: "300vh",
            maxWidth: "100%",
            alignItems: "center",
            paddingX: "10px",
            position:"relative",
        }}>

            <Waves
                colorArray={[
                    "#FA7268",
                    "#EF5F67",
                    "#E34C67",
                    "#D53867",
                    "#C62368",
                ]}
                style={{
                    position:"fixed",
                    width: "100%",
                    bottom:"0px",
                    left:"0px",
                    margin: "0px"
                }}
                wrapperHeight="45vh"
                gap={
                    (xs && !sm) ? 20 : (sm && !md) ? 15 : (md && !lg) ? 14 : (lg && !xl) ? 12 : 8
                }
                height={20}
                speed={(xs && !sm) ? 0.1 : (sm && !md) ? 0.15 : (md && !lg) ? 0.2 : (lg && !xl) ? 0.3 : 0.35}
                points={5}
                amplitude={20}
            />

            
            <Stack useFlexGap sx={{width: "100%", height: "100%"}} spacing={{xs: 5, lg: 7}}>
                <Box
                    sx={{
                        position: "relative",
                        top: "10vh",
                        left: {sm: "0vw", md: "10vw"},
                        width: {md: "90%"}
                    }}
                >
                    <motion.div
                        className='greeting-text'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <Typography 
                            variant="h1"
                            sx={{
                                color: COLORS.defaultColor, 
                                textAlign: {xs: "center", md: "left"}, 
                                display: {xs: "block", md: "inline"}, 
                                fontWeight: "medium",
                            }}> Hey!
                        </Typography>
                    </motion.div>
                    <motion.div
                        className='name-text'
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <Typography 
                            variant="h1" 
                            sx={{
                                color: COLORS.defaultColor, 
                                textAlign: {xs: "center", md: "left"}, 
                                display: {xs: "block", md: "inline"}
                            }}>
                                <TypeAnimation 
                                    sequence={[
                                        '', 1400,
                                        'I\'m Daanish.'
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                />
                        </Typography>
                    </motion.div>
                </Box>
                <Box 
                    sx={{
                        position: "relative",
                        top: (xs && !sm) ? "4vh" : (sm && !md) ? "6vh" : (md && !lg) ? "8vh" : (lg && !xl) ? "9vh" : "9vh",
                        left: {sm: "0vw", md: "10vw"},
                        width: {md: "90%"}
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 100}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 2.35,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >    
                        <Divider role="presentation" textAlign="center"
                                sx={{
                                    '&:before': {borderColor: "white", borderWidth: "2px"}, 
                                    '&:after': {borderColor: "white", borderWidth: "2px"},
                                    '& .MuiDivider-wrapper': {  
                                        paddingLeft: "calc(2px * 10)",
                                        paddingRight: "calc(2px * 10)",
                                        overflow: "visible",
                                    },
                                    color: COLORS.defaultColor,
                                    width: {xs: "100%", md: "50%", xl: "30%"}
                                    
                                }}>
                                    {( lgWidth ) ? 
                                        <Typography variant="h6" sx={{ color: 'white', top: 0, left: 0}}>
                                            Software Engineer, Full Stack Dev, Cat Enthusiast
                                        </Typography>
                                    : 
                                        <div>
                                            <Typography variant={{md: "h6", sm: "h7"}} sx={{ color: 'white', top: 0, left: 0, display: "block"}}>
                                                Software Engineer, Full Stack Dev,
                                            </Typography>
                                            <Typography variant={{md: "h6", sm: "h7"}} sx={{ color: 'white', top: 0, left: 0}}>
                                                Cat Enthusiast
                                            </Typography>
                                        </div>
                                    }
                        </Divider>
                    </motion.div>
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        left: {xs: "0vw", md: "10vw"},
                        width: {md: "90%"},
                        top: (xs && !sm) ? "4vh" : (sm && !md) ? "4vh" : (md && !lg) ? "8vh" : (lg && !xl) ? "9vh" : "9vh",
                    }}    
                >   
                    <Stack direction="row" spacing={{xs: 5, lg: 7}} justifyContent={{xs: "center", md: "left"}}>
                        
                        <motion.div style={{ display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={parent}>
                            <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                                <About 
                                    width={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    height={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    delay={2.8}
                                    color="white"
                                />
                            </motion.div>
                            {mdWidth && <motion.div variants={textMotion} style={{display: "inline-flex"}} >
                                <Typography  
                                    variant="h4" 
                                    sx={{
                                        color: "white", 
                                        overflow: "hidden",
                                        paddingLeft: "10px",
                                        cursor: "pointer"
                                    }}>About</Typography>
                            </motion.div>}
                        </motion.div>

                        <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={parent}>
                            <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                                <Projects 
                                    width={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    height={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    delay={3.1}
                                    color="white"
                                />
                            </motion.div>
                            {mdWidth && <motion.div variants={textMotion} style={{display: "inline-flex"}}>
                                <Typography  
                                    variant="h4" 
                                    sx={{
                                        color: "white", 
                                        overflow: "hidden",
                                        paddingLeft: "10px",
                                        cursor: "pointer"
                                    }}>Projects</Typography>
                            </motion.div>}
                        </motion.div>

                        <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={parent}>
                            <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                                <Socials 
                                    width={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    height={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    delay={3.3}
                                    color="white"
                                />
                            </motion.div>
                            {mdWidth && <motion.div variants={textMotion} style={{display: "inline-flex"}}>
                                <Typography  
                                    variant="h4" 
                                    sx={{
                                        color: "white", 
                                        overflow: "hidden",
                                        paddingLeft: "10px",
                                        cursor: "pointer"
                                    }}>Socials</Typography>
                            </motion.div>}
                        </motion.div>
                        
                        <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={parent}>
                            <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                                <Blog 
                                    width={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    height={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    delay={3.5}
                                    color="white"
                                />
                            </motion.div>
                            {mdWidth && <motion.div variants={textMotion} style={{display: "inline-flex"}}>
                                <Typography  
                                    variant="h4" 
                                    sx={{
                                        color: "white", 
                                        overflow: "hidden",
                                        paddingLeft: "10px",
                                        cursor: "pointer"
                                    }}>Blog</Typography>
                            </motion.div>}
                        </motion.div>
                        
                        <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={parent}>
                            <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                                <Contact 
                                    width={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    height={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    delay={3.7}
                                    color="white"
                                />
                            </motion.div>
                            {mdWidth && <motion.div variants={textMotion} style={{display: "inline-flex"}}>
                                <Typography  
                                    variant="h4" 
                                    sx={{
                                        color: "white", 
                                        overflow: "hidden",
                                        paddingLeft: "10px",
                                        cursor: "pointer"
                                    }}>Contact</Typography>
                            </motion.div>}
                        </motion.div>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        justifyContent: "center",
                        display: "flex",
                        width: "100%",
                        top: (xs && !sm) ? "4vh" : (sm && !md) ? "4vh" : (md && !lg) ? "8vh" : (lg && !xl) ? "9vh" : "9vh",
                    }}  
                >
                     <ScrollDown
                        width={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                        height={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                        delay={3.7}
                        color="white"
                    />
                </Box>
               
            </Stack>
        </Container>

        
    );
}

export default LandingPage;