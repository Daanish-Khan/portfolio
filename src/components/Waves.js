import Wave from 'react-wavify'
import './Waves.css'
import { motion } from 'framer-motion';
import * as React from 'react';

function Waves({colorArray, gap, height, speed, points, amplitude, style, wrapperHeight, initialGap, views}) {

   

    return (
        <div style={{...style, height: wrapperHeight }}>
            {colorArray.map((element, i) => {
                return (
                    <motion.div key={i} style={{...style, bottom: -(gap * (i + 1) + initialGap), position: "absolute", height: "100%"}}>
                        <Wave
                            fill={element}
                            paused={false}
                            options={{
                                height: height,
                                amplitude: amplitude,
                                speed: speed,
                                points: points - i
                            }}
                            style={{height: "200%"}}
                        />
                    </motion.div>
                    
                )
            })}
        </div>   
    );
}

export default Waves;