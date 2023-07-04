import { Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import About from '../graphics/about';
import Projects from '../graphics/projects';
import Socials from '../graphics/socials';
import Blog from '../graphics/blog';
import Contact from '../graphics/contact';

function IconBar({xsWidth, smWidth, mdWidth, lgWidth, xlWidth}) {

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

    return (  
        <Stack direction="row" spacing={{xs: 5, lg: 7}} justifyContent={{xs: "center", md: "left"}}>   
            <motion.div style={{ display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={mdWidth ? parent : parentSmall}>
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

            <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={mdWidth ? parent : parentSmall}>
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

            <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={mdWidth ? parent : parentSmall}>
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
            
            <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={mdWidth ? parent : parentSmall}>
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
            
            <motion.div style={{display:"flex", alignItems: "center"}} initial="rest" whileHover="hover" animate="rest" variants={mdWidth ? parent : parentSmall}>
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
    
    )

}

export default IconBar;