import * as React from 'react';
import { motion } from 'framer-motion';

function ScrollDown({width, height, delay, color, sx}) {
    return (
        
        <motion.svg transition={{duration: 0.5, delay: delay}} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0}} width={width} height={height} fill={color} stroke={color} strokeWidth="1px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Icons" stroke={"none"} strokeWidth="1" fill={"none"} fillRule="evenodd">
                <g id="Rounded" transform="translate(-482.000000, -3442.000000)">
                    <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                        <g id="-Round-/-Navigation-/-arrow_drop_down" transform="translate(374.000000, 54.000000)">
                            <g>
                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M8.71,11.71 L11.3,14.3 C11.69,14.69 12.32,14.69 12.71,14.3 L15.3,11.71 C15.93,11.08 15.48,10 14.59,10 L9.41,10 C8.52,10 8.08,11.08 8.71,11.71 Z" id="🔹-Icon-Color" fill={color}></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </motion.svg>


    )
}

export default ScrollDown;