import Wave from 'react-wavify'
import './Waves.css'
import { motion, useAnimation } from 'framer-motion';
import * as React from 'react';

function Waves({colorArray, gap, height, speed, points, amplitude, style, wrapperHeight, initialGap, scrollRef, heightBreakpoints, widthBreakpoints, views}) {

    const wave1 = useAnimation();
    const wave2 = useAnimation();
    const wave3 = useAnimation();
    const wave4 = useAnimation();
    const wave5 = useAnimation();

    const animation = [wave1, wave2, wave3, wave4, wave5]
    const slideIndex = scrollRef.current !== null ? scrollRef.current.getCurrentSlideIndex() : null;

    React.useEffect(() => {
        const animateToPercentage = (heightBreakpoints.xs && !heightBreakpoints.sm) ? "-71%" : (heightBreakpoints.sm && !heightBreakpoints.md) ? "-60%" : (heightBreakpoints.md && !heightBreakpoints.lg) ? "-80%" : (heightBreakpoints.lg && !heightBreakpoints.xl) ? "-80%" : "-83%"
        if (slideIndex != null) {
            slideIndex >= 1 ? animation[0].start({y: animateToPercentage}) : animation[0].start({y: "0%"})
            slideIndex >= 2 ? animation[1].start({y: animateToPercentage}) : animation[1].start({y: "0%"})
            slideIndex >= 3 ? animation[2].start({y: animateToPercentage}) : animation[2].start({y: "0%"})
            slideIndex >= 4 ? animation[3].start({y: animateToPercentage}) : animation[3].start({y: "0%"})
        }
    }, [slideIndex])

    React.useEffect(() => {    
        const animateToPercentage = (heightBreakpoints.xs && !heightBreakpoints.sm) ? "-71%" : (heightBreakpoints.sm && !heightBreakpoints.md) ? "-60%" : (heightBreakpoints.md && !heightBreakpoints.lg) ? "-80%" : (heightBreakpoints.lg && !heightBreakpoints.xl) ? "-80%" : "-83%"
        if (!heightBreakpoints.md && !widthBreakpoints.md) {
            if (views.home || views.about || views.projects || views.socials || views.contact) {
                if (views.about || views.projects || views.socials || views.contact) {
                    animation[0].start({y: animateToPercentage})
                } else {
                    animation[0].start({y: "0%"})
                }
    
                if (views.projects || views.socials || views.contact) {
                    animation[1].start({y: animateToPercentage})
                } else {
                    animation[1].start({y: "0%"})
                }
    
                if (views.socials || views.contact) {
                    animation[2].start({y: animateToPercentage})
                } else {
                    animation[2].start({y: "0%"})
                }
    
                if (views.contact) {
                    animation[3].start({y: animateToPercentage})
                } else {
                    animation[3].start({y: "0%"})
                }
            }
            
        }
    }, [views.home, views.about, views.projects, views.socials, views.contact])

    return (
        <div style={{...style, height: wrapperHeight }}>
            {colorArray.map((element, i) => {
                return (
                    <motion.div key={i} transition={{duration: 0.75, type: "spring"}} animate={animation[i]} style={{...style, bottom: -(gap * (i + 1) + initialGap), position: "absolute", height: "100%"}}>
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