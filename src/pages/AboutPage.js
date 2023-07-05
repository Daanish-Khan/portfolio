import * as React from 'react';
import { Box, } from '@mui/material';

import { motion, useAnimation } from 'framer-motion';


import ScrollDown from '../graphics/scrolldown';

import { COLORS } from '../components/consts';

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
                
            }}
        
        > 
            <motion.div
                ref={innerRef}
                animate={controls}
                
            >
                <Box
                    sx={{
                        position: "relative",
                        justifyContent: "center",
                        display: "flex",
                        width: "100%",
                        
                        
                    }}  
                >
                    <ScrollDown
                        width={"40pt"}
                        height={"40pt"}
                        delay={0}
                        color="white"
                    />
                </Box>
            </motion.div>
        </Box>
    )
}

export default AboutPage;