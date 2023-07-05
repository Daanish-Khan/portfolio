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

    const refs = {
        about: React.useRef(null),
        projects: React.useRef(null),
        socials: React.useRef(null),
        contact: React.useRef(null)
    };

    const scrollRef = React.useRef(null);
    const [waveAnimate, setWaveAnimate] = React.useState(false);

    const onFirstPageClick = () => { scrollRef.current.scrollToSlide(1) }

    const views = {
        about: useInView(refs.about, {amount: 0.8}),
        projects: useInView(refs.projects, {amount: 0.8}),
        socials: useInView(refs.socials, {amount: 0.8}),
        contact: useInView(refs.contact, {amount: 0.8}),
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
        if (!md && !mdWidth) {
            if (views.about || views.projects || views.socials || views.contact) {
                setWaveAnimate(true)
            } else {
                setWaveAnimate(false)
            }
        } 
    }, [views.about, views.projects, views.socials, views.contact])

    

    return (

        <Container maxWidth="false"
            sx={{
                width: "100vw",
                maxWidth: "100%",
                paddingX: "10px",
                position:"relative",
            }}>
           <motion.div 
            animate={{y: waveAnimate ? (xs && !sm) ? "5%" : (sm && !md) ? "15%" : (md && !lg) ? "18%" : (lg && !xl) ? "15%" : "40%" : "0%"}} 
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
                        (xs && !sm) ? 40 : (sm && !md) ? 50 : (md && !lg) ? 60 : (lg && !xl) ? 70 : 100
                    }
                    height={5}
                    speed={(xs && !sm) ? 0.1 : (sm && !md) ? 0.15 : (md && !lg) ? 0.2 : (lg && !xl) ? 0.3 : 0.35}
                    points={5}
                    amplitude={20}
                    initialGap={(xs && !sm) ? 200 : (sm && !md) ? 400 : (md && !lg) ? 800 : (lg && !xl) ? 800 : 1000}
                    scrollRef={scrollRef}
                    views={views}
                />
           </motion.div>
            
            
            
            <Stack useFlexGap sx={{width: "100%", height: "100%"}}>
                <FullPage duration={900} scrollMode={md ? "full-page" : "normal"} ref={scrollRef}>
                    <Slide>
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
                                <IconBar xsWidth={xsWidth} smWidth={smWidth} mdWidth={mdWidth} lgWidth={lgWidth} xlWidth={xlWidth} scrollRef={scrollRef} />
                            </Box>
                            <Box
                                sx={{
                                    position: "relative",
                                    justifyContent: "center",
                                    display: "flex",
                                    width: "100%",
                                    top: (xs && !sm) ? "4vh" : (sm && !md) ? "4vh" : (md && !lg) ? "8vh" : (lg && !xl) ? "9vh" : "9vh",
                                    cursor: "pointer"
                                }}
                                onClick={onFirstPageClick}
                                
                            >
                                <ScrollDown
                                    width={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    height={(xsWidth && !smWidth) ? "20pt" : (smWidth && !mdWidth) ? "25pt" : (mdWidth && !lgWidth) ? "30pt" : (lgWidth && !xlWidth) ? "35pt" : "40pt"}
                                    delay={3.7}
                                    color="white"
                                />
                            </Box>
                        </Stack>
                    </Slide>
                    <Slide>
                        <AboutPage inView={views.about} innerRef={refs.about} />
                    </Slide>
                    <Slide>
                        <ProjectsPage inView={views.projects} innerRef={refs.projects} />
                    </Slide>
                    <Slide>
                        <SocialsPage inView={views.socials} innerRef={refs.socials} />
                    </Slide>
                    <Slide>
                        <ContactPage inView={views.contact} innerRef={refs.contact} />
                    </Slide>
                    
                </FullPage>
            </Stack>
    
            
        </Container>

        
    );
}

export default LandingPage;