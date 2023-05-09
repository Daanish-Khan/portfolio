import * as React from 'react';
import { motion } from 'framer-motion';

function Projects({width, height, delay, color}) {
    return (
        <motion.div style={{cursor:"pointer"}} className="projects-icon">
            <motion.svg transition={{duration: 1, delay: delay + 0.5}} initial={{ fillOpacity: 0 }} animate={{ fillOpacity: 1}} width={width} height={width} viewBox="0 0 64 64" fill={color} stroke={color} strokeWidth="1px" xmlns="http://www.w3.org/2000/svg">
                <motion.path transition={{duration: 1, delay: delay}} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M61.3201 2.57991C61.1069 2.36457 60.8477 2.20047 60.5618 2.09999C60.276 1.99952 59.9711 1.9653 59.6701 1.99991C42.853 3.6058 27.1009 10.9504 15.0601 22.7999L2.93006 25.4699C2.57794 25.5446 2.2525 25.7129 1.98806 25.9571C1.72363 26.2013 1.53 26.5124 1.4276 26.8575C1.32521 27.2025 1.31784 27.5688 1.40627 27.9178C1.4947 28.2667 1.67566 28.5853 1.93006 28.8399L35.3101 62.2099C35.5647 62.4643 35.8833 62.6453 36.2322 62.7337C36.5811 62.8221 36.9474 62.8148 37.2925 62.7124C37.6376 62.61 37.9486 62.4163 38.1929 62.1519C38.4371 61.8875 38.6054 61.562 38.6801 61.2099L41.3601 49.0699C53.2084 36.9596 60.4708 21.1019 61.9001 4.21991C61.9331 3.92052 61.8981 3.61753 61.7977 3.33355C61.6973 3.04958 61.534 2.79195 61.3201 2.57991V2.57991ZM41.1301 29.9099C32.0601 29.6499 32.0101 16.4299 41.1301 16.1499C50.2401 16.4299 50.1901 29.6499 41.1301 29.9099Z" />
                <motion.path transition={{duration: 1, delay: delay}} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M9.76007 43.5901C9.51168 43.3409 9.20194 43.1616 8.8621 43.0704C8.52227 42.9791 8.16438 42.9791 7.82456 43.0704C7.48474 43.1617 7.17502 43.3411 6.92667 43.5903C6.67831 43.8396 6.50012 44.15 6.41007 44.4901L2.54007 58.9301C2.44822 59.2704 2.4479 59.6288 2.53914 59.9692C2.63037 60.3096 2.80993 60.6198 3.05962 60.8685C3.30931 61.1172 3.62027 61.2954 3.96103 61.3853C4.30178 61.4751 4.66023 61.4734 5.00007 61.3801L19.4401 57.5101C19.7802 57.4201 20.0906 57.2419 20.3399 56.9935C20.5891 56.7452 20.7685 56.4355 20.8598 56.0956C20.9511 55.7558 20.9511 55.3979 20.8598 55.0581C20.7686 54.7183 20.5893 54.4085 20.3401 54.1601L9.76007 43.5901Z" />
            </motion.svg>
        </motion.div>
    )
}

export default Projects;