import * as React from 'react';
import { Box, Typography, useMediaQuery, Divider, Stack } from '@mui/material';
import { Container } from '@mui/system';
import { TypeAnimation } from 'react-type-animation';
import { motion, wrap } from 'framer-motion';

import Waves from '../components/Waves';
import { COLORS } from '../components/consts'
import './LandingPage.css'


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

    return (
        <Container maxWidth="false"
        sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            paddingX: "10px"
        }}>

            <div className="bg"/>
            <Stack useFlexGap sx={{width: "100vw", height: "100vh"}} spacing={5}>
                <Box
                    sx={{
                        position: "relative",
                        top: "15vh",
                        left: {sm: "0vw", md: "10vw"}
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
                                textAlign: "left", 
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
                                textAlign: "left", 
                                display: "inline"
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
                        top: "15vh",
                        left: {sm: "0vw", md: "10vw"}
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
                                    width: {xs: "100%", sm: "65%", md: "50%", xl: "30%"}
                                    
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
            </Stack>
            <Waves
                colorArray={[
                    "#FA7268",
                    "#EF5F67",
                    "#E34C67",
                    "#D53867",
                    "#C62368",
                ]}
                style={{
                    position:"absolute",
                    width: "100vw",
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

        </Container>

        
    );
}

export default LandingPage;