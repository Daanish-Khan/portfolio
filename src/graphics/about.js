import * as React from 'react';
import { motion } from 'framer-motion';

function About({width, height, delay, color}) {
    return (
        <div className="about-icon">
            <motion.svg transition={{duration: 1, delay: delay + 0.5}} initial={{ fillOpacity: 0}} animate={{ fillOpacity: 1 }} fill={color} style={{fillRule:"evenodd", clipRule:"evenodd", strokeLinejoin: "round", strokeMiterlimit:2,}} stroke={color} stroke-width="1px" width={width} height={height} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/">
                <g id="Icon">
                    <g>
                        <motion.path transition={{duration: 1, delay: delay}} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M12,1.25c-5.933,0 -10.75,4.817 -10.75,10.75c0,5.933 4.817,10.75 10.75,10.75c5.933,0 10.75,-4.817 10.75,-10.75c0,-5.933 -4.817,-10.75 -10.75,-10.75Zm-0,8.75c-0.398,0 -0.779,0.158 -1.061,0.439c-0.281,0.282 -0.439,0.663 -0.439,1.061c0,1.888 0,4.612 0,6.5c-0,0.398 0.158,0.779 0.439,1.061c0.282,0.281 0.663,0.439 1.061,0.439c0.398,-0 0.779,-0.158 1.061,-0.439c0.281,-0.282 0.439,-0.663 0.439,-1.061c0,-1.888 0,-4.612 0,-6.5c0,-0.398 -0.158,-0.779 -0.439,-1.061c-0.282,-0.281 -0.663,-0.439 -1.061,-0.439Zm0,-5.75c0.966,0 1.75,0.784 1.75,1.75c0,0.966 -0.784,1.75 -1.75,1.75c-0.966,0 -1.75,-0.784 -1.75,-1.75c0,-0.966 0.784,-1.75 1.75,-1.75Z"/>
                    </g>
                </g>
            </motion.svg>
        </div>
    )
}

export default About;