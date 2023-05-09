import * as React from 'react';
import { motion } from 'framer-motion';

function Contact({width, height, delay, color}) {
    return (
        <div style={{cursor:"pointer"}} className="contact-icon">
            <motion.svg xmlns="http://www.w3.org/2000/svg" transition={{duration: 1, delay: delay + 0.5}} initial={{ fillOpacity: 0 }} animate={{ fillOpacity: 1}} width={width} height={height} fill={color} stroke={color} strokeWidth="1px" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <g>
                    <motion.path transition={{duration: 2, delay: delay}} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/>
                </g>
            </motion.svg>
        </div>

    )
}

export default Contact;