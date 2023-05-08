import Wave from 'react-wavify'

function Waves({colorArray, gap, height, speed, points, amplitude, style, wrapperHeight}) {
    return (
        <div style={{...style, height: wrapperHeight}}>
            {colorArray.map((element, i) => {
                return (
                    <Wave
                        fill={element}
                        paused={false}
                        options={{
                            height: height,
                            amplitude: amplitude,
                            speed: speed,
                            points: points - i
                        }}
                        style={{...style, height: (100 - gap * i).toString() + "%"}}
                    />
                )
            })}
        </div>   
    );
}

export default Waves;