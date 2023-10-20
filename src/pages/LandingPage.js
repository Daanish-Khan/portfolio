import * as React from 'react';
import { Box, Typography, useMediaQuery, Divider, Stack } from '@mui/material';
import { Container } from '@mui/system';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation, useInView, useScroll, wrap } from 'framer-motion';
import { FullPage, Slide } from 'react-full-page';


import ScrollDown from '../graphics/scrolldown';
import IconBar from '../components/IconBar'

import Waves from '../components/Waves';
import { COLORS } from '../components/consts';
import './LandingPage.css';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import SocialsPage from './SocialsPage';
import ContactPage from './ContactPage';

function LandingPage() {

    const heightBreakpoints = {
        xs: useMediaQuery('(min-height:0px)'),
        sm: useMediaQuery('(min-height:350px'),
        md: useMediaQuery('(min-height:1000px'),
        lg: useMediaQuery('(min-height:1337px'),
        xl: useMediaQuery('(min-height:2000px'),
    }

    const widthBreakpoints = {
        xs: useMediaQuery('(min-width:0px)'),
        sm: useMediaQuery('(min-width:600px'),
        md: useMediaQuery('(min-width:900px'),
        lg: useMediaQuery('(min-width:1200px'),
        xl: useMediaQuery('(min-width:1600px'),
    }

    const refs = {
        home: React.useRef(null),
        about: React.useRef(null),
        projects: React.useRef(null),
        socials: React.useRef(null),
        contact: React.useRef(null)
    };

    const scrollRef = React.useRef(null);
    const [waveAnimate, setWaveAnimate] = React.useState(false);

    const onFirstPageClick = () => { scrollRef.current.scrollToSlide(1) }

    const views = {
        home: useInView(refs.home, {amount: 0.6}),
        about: useInView(refs.about, {amount: 0.6}),
        projects: useInView(refs.projects, {amount: 0.6}),
        socials: useInView(refs.socials, {amount: 0.6}),
        contact: useInView(refs.contact, {amount: 0.6}),
    }

    const slideIndex = scrollRef.current !== null ? scrollRef.current.getCurrentSlideIndex() : null;
    React.useEffect(() => {
        if (slideIndex != null) {
            if (slideIndex > 0) {
                setWaveAnimate(true)
            } else {
                setWaveAnimate(false)
            }
        }
    }, [slideIndex])

    React.useEffect(() => {
        if (!heightBreakpoints.md && !widthBreakpoints.md) {
            if (views.about || views.projects || views.socials || views.contact) {
                setWaveAnimate(true)
            } else if (views.home) {
                setWaveAnimate(false)
            }
        } 
    }, [views.home, views.about, views.projects, views.socials, views.contact])

    return (

        <Container maxWidth="false"
            sx={{
                width: "100vw",
                maxWidth: "100%",
                paddingX: "10px",
                position:"relative",
            }}>
           <motion.div
            transition={{duration: 0.75, type: "spring"}} 
            animate={{y: waveAnimate ? (heightBreakpoints.xs && !heightBreakpoints.sm) ? "5%" : (heightBreakpoints.sm && !heightBreakpoints.md) ? "15%" : (heightBreakpoints.md && !heightBreakpoints.lg) ? "18%" : (heightBreakpoints.lg && !heightBreakpoints.xl) ? "15%" : "40%" : "0%"}} 
            style={{
                position:"fixed",
                height: "100%",
                width: "100%",
                display: "flex",
                left: 0
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
                        left:"0px",
                        bottom: 0,
                        margin: "0px",
                        overflow: "visible",
                    }}
                    wrapperHeight="100%"
                    gap={ 
                        (heightBreakpoints.xs && !heightBreakpoints.sm) ? 40 : (heightBreakpoints.sm && !heightBreakpoints.md) ? 50 : (heightBreakpoints.md && !heightBreakpoints.lg) ? 60 : (heightBreakpoints.lg && !heightBreakpoints.xl) ? 70 : 100
                    }
                    height={5}
                    speed={(heightBreakpoints.xs && !heightBreakpoints.sm) ? 0.1 : (heightBreakpoints.sm && !heightBreakpoints.md) ? 0.15 : (heightBreakpoints.md && !heightBreakpoints.lg) ? 0.2 : (heightBreakpoints.lg && !heightBreakpoints.xl) ? 0.3 : 0.35}
                    points={5}
                    amplitude={20}
                    initialGap={(heightBreakpoints.xs && !heightBreakpoints.sm) ? 200 : (heightBreakpoints.sm && !heightBreakpoints.md) ? 400 : (heightBreakpoints.md && !heightBreakpoints.lg) ? 800 : (heightBreakpoints.lg && !heightBreakpoints.xl) ? 800 : 1000}
                    scrollRef={scrollRef}
                    views={views}
                    heightBreakpoints={heightBreakpoints}
                    widthBreakpoints={widthBreakpoints}
                />
           </motion.div>

            <Stack useFlexGap sx={{width: "100%", height: "100%"}}>
                <FullPage duration={900} scrollMode={(heightBreakpoints.sm && widthBreakpoints.md) ? "full-page" : "normal"} ref={scrollRef}>
                    <Slide>
                        <Stack useFlexGap sx={{width: "100%", height: "100%"}} spacing={{xs: 5, lg: 7}} ref={refs.home}>
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
                                    top: (heightBreakpoints.xs && !heightBreakpoints.sm) ? "4vh" : (heightBreakpoints.sm && !heightBreakpoints.md) ? "6vh" : (heightBreakpoints.md && !heightBreakpoints.lg) ? "8vh" : (heightBreakpoints.lg && !heightBreakpoints.xl) ? "9vh" : "9vh",
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
                                                {( widthBreakpoints.lg ) ? 
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
                                    top: (heightBreakpoints.xs && !heightBreakpoints.sm) ? "4vh" : (heightBreakpoints.sm && !heightBreakpoints.md) ? "4vh" : (heightBreakpoints.md && !heightBreakpoints.lg) ? "8vh" : (heightBreakpoints.lg && !heightBreakpoints.xl) ? "9vh" : "9vh",
                                }}    
                            >   
                                <IconBar widthBreakpoints={widthBreakpoints} scrollRef={scrollRef} />
                            </Box>
                            <Box
                                sx={{
                                    position: "relative",
                                    justifyContent: "center",
                                    display: "flex",
                                    width: "100%",
                                    top: (heightBreakpoints.xs && !heightBreakpoints.sm) ? "4vh" : (heightBreakpoints.sm && !heightBreakpoints.md) ? "4vh" : (heightBreakpoints.md && !heightBreakpoints.lg) ? "8vh" : (heightBreakpoints.lg && !heightBreakpoints.xl) ? "9vh" : "9vh",
                                    cursor: "pointer"
                                }}
                                onClick={onFirstPageClick}
                                
                            >
                                <ScrollDown
                                    width={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "20pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "25pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "30pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "35pt" : "40pt"}
                                    height={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "20pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "25pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "30pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "35pt" : "40pt"}
                                    delay={3.7}
                                    color="white"
                                />
                            </Box>
                        </Stack>
                    </Slide>
                    <Slide>
                        <AboutPage inView={views.about} innerRef={refs.about} widthBreakpoints={widthBreakpoints} heightBreakpoints={heightBreakpoints} />
                    </Slide>
                    {/*<Slide>
                        <ProjectsPage inView={views.projects} innerRef={refs.projects} />
                    </Slide>
                    <Slide>
                        <SocialsPage inView={views.socials} innerRef={refs.socials} />
                    </Slide>
                    <Slide>
                        <ContactPage inView={views.contact} innerRef={refs.contact} />
							</Slide>*/}
                    
                </FullPage>
            </Stack>
    
            
        </Container>

        
    );
}

export default LandingPage;