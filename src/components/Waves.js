import Wave from 'react-wavify'
import './Waves.css'
import { useScroll, useMotionValueEvent, motion, useTransform, useVelocity } from 'framer-motion';
import * as React from 'react';

function Waves({colorArray, gap, height, speed, points, amplitude, style, wrapperHeight, initialGap, scrollGap}) {
    const { scrollYProgress } = useScroll();
    const [animScrollGap, setAnimScrollGap] = React.useState(0)
    const [stringAnimScrollGap, setStringAnimScrollGap] = React.useState("0vh")
    const [scroll1, setScroll1] = React.useState(gap + initialGap);
    const [scroll2, setScroll2] = React.useState(gap * 2 + initialGap);
    const [scroll3, setScroll3] = React.useState(gap * 3 + initialGap);
    const [scroll4, setScroll4] = React.useState(gap * 4 + initialGap);
    const [scroll5, setScroll5] = React.useState(gap * 5 + initialGap);
    const scrollArray = [scroll1, scroll2, scroll3, scroll4, scroll5];

    useMotionValueEvent(scrollYProgress, "change", latest => {
            if (latest > 0) {
                
                if (animScrollGap < scrollGap) {
                    setAnimScrollGap(animScrollGap => animScrollGap += 0.5)
                } else if (animScrollGap > scrollGap) {
                    setAnimScrollGap(animScrollGap => animScrollGap -= 0.5)
                }
                setStringAnimScrollGap(animScrollGap.toString() + "vh")
            } 
            if (latest > 0.05) {
                const modifiedGap = latest * 12 - 0.6 >= 2 ? 2 : latest * 12 - 0.6; 
                setScroll1((1 - modifiedGap) * (gap + initialGap))
            }
            if (latest > 0.2) {
                const modifiedGap = latest * 12 - 2.4 >= 2 ? 2 : latest * 12 - 2.4; 
                setScroll2((1 - modifiedGap) * (gap * 2 + initialGap))
            }
            if (latest > 0.4) {
                const modifiedGap = latest * 12 - 4.8 >= 2 ? 2 : latest * 12 - 4.8; 
                setScroll3((1 - modifiedGap) * (gap * 3 + initialGap))
            }
            if (latest > 0.6) {
                const modifiedGap = latest * 12 - 7.2 >= 2 ? 2 : latest * 12 - 7.2; 
                setScroll4((1 - modifiedGap) * (gap * 4 + initialGap))
            }
            if (latest > 0.8) {
                const modifiedGap = latest * 12 - 9.6 >= 2 ? 2 : latest * 12 - 9.6; 
                setScroll5((1 - modifiedGap) * (gap * 5 + initialGap))
            }
            
    })
    

    return (
        <div style={{...style, bottom: stringAnimScrollGap, height: wrapperHeight }}>
            {colorArray.map((element, i) => {
                return (
                    <motion.div key={i} style={{...style, bottom: -scrollArray[i], position: "absolute", height: "100%"}}>
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