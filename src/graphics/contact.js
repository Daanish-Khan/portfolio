import * as React from 'react';
import { motion } from 'framer-motion';

function Contact({width, height, delay, color}) {
    return (
        <div style={{cursor:"pointer"}} className="contact-icon">
            <motion.svg xmlns="http://www.w3.org/2000/svg" transition={{duration: 1, delay: delay + 0.5}} initial={{ fillOpacity: 0 }} animate={{ fillOpacity: 1}} width={width} height={height} fill={color} stroke={color} strokeWidth="1px" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
                <g>
                    <motion.path transition={{duration: 2, delay: delay}} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M34.05 50 9 66.31V33.69L34.05 50zm31.9 0L91 66.31V33.69L65.95 50zm-3.66 2.39-11.2 7.29c-.33.21-.71.32-1.09.32s-.76-.11-1.09-.32l-11.2-7.29L10.66 70l-1.57 1.02C9.58 73.84 12.04 76 15 76h70c2.96 0 5.42-2.15 5.91-4.98L89.33 70 62.29 52.39zM50 55.61 89.33 30l1.58-1.02C90.42 26.15 87.96 24 85 24H15c-2.96 0-5.42 2.16-5.91 4.98L10.66 30 50 55.61z"/>
                    
                </g>
            </motion.svg>
        </div>
    )
}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="email"><path d=""></path></svg>
export default Contact;