import * as React from 'react';
import { motion } from 'framer-motion';

function Contact({width, height, delay, color}) {
    return (
        <div className="contact-icon">
            <motion.svg transition={{duration: 1, delay: delay + 0.5}} initial={{ fillOpacity: 0 }} animate={{ fillOpacity: 1}} width={width} height={height} fill={color} stroke={color} stroke-width="1px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
                <motion.path transition={{duration: 1, delay: delay}} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M41.6,18.147l-6.063-3.5h0L25.89,31.354a5.017,5.017,0,0,0-.661,2.2L25.07,36.2a1.975,1.975,0,0,0,.537,1.488,2.02,2.02,0,0,0,1.462.634,1.993,1.993,0,0,0,1.1-.333l2.208-1.458a5.031,5.031,0,0,0,1.575-1.673L41.6,18.147Z"/>
                <motion.path transition={{duration: 1, delay: delay}} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M33.684,35.854a7.031,7.031,0,0,1-2.2,2.341l-2.209,1.459a3.991,3.991,0,0,1-2.2.664,4.031,4.031,0,0,1-2.919-1.263,3.955,3.955,0,0,1-1.076-2.98l.158-2.64a7.059,7.059,0,0,1,.925-3.081L35.8,10.184A4.994,4.994,0,0,1,38,8.174V8a5.006,5.006,0,0,0-5-5H11A5.006,5.006,0,0,0,6,8V40a5.006,5.006,0,0,0,5,5H33a5.006,5.006,0,0,0,5-5V28.378ZM15,11H31a1,1,0,0,1,0,2H15a1,1,0,0,1,0-2Zm-3,6H28.13a1,1,0,0,1,0,2H12a1,1,0,0,1,0-2Zm0,6H24.67a1,1,0,0,1,0,2H12a1,1,0,0,1,0-2Zm8.08,14H12a1,1,0,0,1,0-2h8.08a1,1,0,0,1,0,2Zm1.13-6H12a1,1,0,0,1,0-2h9.21a1,1,0,0,1,0,2Z"/>
                <motion.path transition={{duration: 1, delay: delay}} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M43.9,12.407a2.984,2.984,0,0,0-1.4-1.822l-.866-.5a3,3,0,0,0-4.1,1.1l-1,1.732h0l6.063,3.5,1-1.731A2.979,2.979,0,0,0,43.9,12.407Z"/>
            </motion.svg>
        </div>
    )
}

export default Contact;