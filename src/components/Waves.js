import Wave from 'react-wavify'
import './Waves.css'
import { useScroll, useMotionValueEvent, motion, useTransform } from 'framer-motion';
import * as React from 'react';

function Waves({colorArray, gap, height, speed, points, amplitude, style, wrapperHeight}) {
    const { scrollY, scrollYProgress } = useScroll();
    const percentage = 72
    let wave1Calc = useTransform(scrollY, latest => ((percentage - gap) / 100) * (document.body.scrollHeight - latest))
    let wave2Calc = useTransform(scrollY, latest => ((percentage - gap * 2) / 100) * (document.body.scrollHeight - latest))
    let wave3Calc = useTransform(scrollY, latest => ((percentage - gap * 3) / 100) * (document.body.scrollHeight - latest))
    let wave4Calc = useTransform(scrollY, latest => ((percentage - gap * 4) / 100) * (document.body.scrollHeight - latest))
    let wave5Calc = useTransform(scrollY, latest => ((percentage - gap * 5) / 100) * (document.body.scrollHeight - latest))

    useMotionValueEvent(scrollY, "change", latest => {

        console.log(document.body.scrollHeight)
        
        
    })
    console.log(wave1Calc)
    return (
        <div style={{...style, height: wrapperHeight }}>
            {colorArray.map((element, i) => {
                return (
                    <motion.div key={i} style={{...style, position: "absolute", height: (i === 0) ? wave1Calc : (i === 1) ? wave2Calc : (i === 2) ? wave3Calc : (i === 3) ? wave4Calc : wave5Calc}}>
                        <Wave
                            fill={element}
                            paused={false}
                            options={{
                                height: height,
                                amplitude: amplitude,
                                speed: 0,
                                points: points - i
                            }}
                            style={{height: "100%"}}
                        />
                    </motion.div>
                    
                )
            })}
        </div>   
    );
}

export default Waves;