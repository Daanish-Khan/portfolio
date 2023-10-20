import { Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import About from '../graphics/about';
import Projects from '../graphics/projects';
import Socials from '../graphics/socials';
import Contact from '../graphics/contact';

function IconBar({ widthBreakpoints, scrollRef }) {

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
            width: 50,
        },
        hover: {
            opacity: 1,
            width: 150,
        }
    }

    const parentSmall = {
        rest: {
            opacity: 1,
        },
        hover: {
            opacity: 1,
        }
    }

    const onAboutClick = () => { scrollRef.current.scrollToSlide(1) }
	const onProjectsClick = () => { /*scrollRef.current.scrollToSlide(2)*/ window.location.href = "https://github.com/Daanish-Khan"}
    const onSocialsClick = () => { scrollRef.current.scrollToSlide(3) }
    const onContactClick = () => { /*scrollRef.current.scrollToSlide(4)*/ window.location.href = "mailto:dkhan045@uottawa.ca" }

    return (  
        <Stack direction="row" spacing={{xs: 5, lg: 7}} justifyContent={{xs: "center", md: "left"}}>   
            <motion.div style={{ display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={widthBreakpoints.md ? parent : parentSmall} onClick={onAboutClick}>
                <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                    <About 
                        width={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "20pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "25pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "30pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "35pt" : "40pt"}
                        height={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "20pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "25pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "30pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "35pt" : "40pt"}
                        delay={2.8}
                        color="white"
                    />
                </motion.div>
                {widthBreakpoints.md && <motion.div variants={textMotion} style={{display: "inline-flex"}} >
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

            <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={widthBreakpoints.md ? parent : parentSmall} onClick={onProjectsClick}>
                <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                    <Projects 
                        width={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "20pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "25pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "30pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "35pt" : "40pt"}
                        height={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "20pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "25pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "30pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "35pt" : "40pt"}
                        delay={3.1}
                        color="white"
                    />
                </motion.div>
                {widthBreakpoints.md && <motion.div variants={textMotion} style={{display: "inline-flex"}}>
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

            {/*<motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={widthBreakpoints.md ? parent : parentSmall} onClick={onSocialsClick}>
                <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                    <Socials 
                        width={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "20pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "25pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "30pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "35pt" : "40pt"}
                        height={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "20pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "25pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "30pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "35pt" : "40pt"}
                        delay={3.3}
                        color="white"
                    />
                </motion.div>
                {widthBreakpoints.md && <motion.div variants={textMotion} style={{display: "inline-flex"}}>
                    <Typography  
                        variant="h4" 
                        sx={{
                            color: "white", 
                            overflow: "hidden",
                            paddingLeft: "10px",
                            cursor: "pointer"
                        }}>Socials</Typography>
                </motion.div>}
					</motion.div>*/}

            <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={widthBreakpoints.md ? parent : parentSmall} onClick={onContactClick}>
                <motion.div style={{flexShrink: 0, display:"inline-block"}}>
                    <Contact 
                        width={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "25pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "35pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "40pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "45pt" : "50pt"}
                        height={(widthBreakpoints.xs && !widthBreakpoints.sm) ? "25pt" : (widthBreakpoints.sm && !widthBreakpoints.md) ? "35pt" : (widthBreakpoints.md && !widthBreakpoints.lg) ? "40pt" : (widthBreakpoints.lg && !widthBreakpoints.xl) ? "45pt" : "50pt"}
                        delay={3.5}
                        color="white"
                    />
                </motion.div>
                {widthBreakpoints.md && <motion.div variants={textMotion} style={{display: "inline-flex"}}>
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
    
    )

}

export default IconBar;