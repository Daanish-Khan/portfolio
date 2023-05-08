import * as React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import Waves from '../components/Waves';
import { COLORS } from '../components/consts'
import './LandingPage.css'


function LandingPage() {

    const xs = useMediaQuery('(min-height:0px)');
    const sm = useMediaQuery('(min-height:350px');
    const md = useMediaQuery('(min-height:1000px');
    const lg = useMediaQuery('(min-height:1337px');
    const xl = useMediaQuery('(min-height:2000px');

    return (
        <Container fixed
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "hidden",
            width: "100%",
            height: "100vh",
        }}>

            <div className="bg"/>

            <Box
            sx={{
                position:"fixed",
                top: "15vh",
            }}>
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
                            textAlign: "center", 
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
                            textAlign: "center", 
                            display: "inline",
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