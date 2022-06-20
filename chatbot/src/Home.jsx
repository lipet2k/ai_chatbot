import "./App.css";
import "./home.css"
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import red from '@mui/material/colors/red';



import {happy} from "./balloons/happy";
import {sad} from "./balloons/sad";

import cloud from "./cloud.png";

const theme = createTheme({
    palette: {
      secondary: red,
    },
  });

const str = "M68 149.5C68 149.5 118.5 112 119.5 68.5C119.886 51.6987 115.121 35.4211 106.017 23C95.6101 8.80322 79.5342 -0.355579 59 0.500012C44.0037 1.12486 31.2571 5.96631 21.5 14.0677C6.20766 26.765 -1.74148 47.4701 0.500002 72.5C4.17165 113.5 52 149.5 52 149.5C50 151 46 160.5 52 159.5C58 158.5 63.5 158.5 69.5 159.5C73.4284 160.155 68 149.5 68 149.5Z"
const new_str = str.split(/[\MCZ]+/);
const strM = new_str[1]
let string_strM = strM.split(" ")
let new_strM = ""
for (let i = 0; i < string_strM.length - 1; i++) {
    new_strM+= (Number(string_strM[i]) * 2) + " "
}
new_strM += string_strM[string_strM.length - 1] * 2
console.log(new_strM)

let strC = new_str.splice(2, new_str.length-3)

console.log(strC)

for (let x = 0; x < strC.length; x++) {
    let numArray = strC[x].split(" ")
    let new_array = []
    for (let i = 0; i < numArray.length; i++) {
        new_array.push(Number(numArray[i]) * 2)
    }
    strC[x] = new_array
}
console.log(strC)

let final_str = "M" + new_strM
for (let x = 0; x < strC.length; x++) {
    let array = strC[x]
    final_str += "C"
    for (let i = 0; i < array.length - 1; i++) {
        final_str += array[i] + " "
    }
    final_str += array[array.length - 1]
}
final_str += "Z"

console.log(final_str)


const Balloons = {
    Happy: happy,
    Sad: sad,
    Mad: "mad"
};

function fourierTransform(apply_this) {
    //make new points
}

function closestToIncrement(num)  {
    return Math.round(num / 10);
}

function Home() {

    const [balloonType, setBalloonType] = useState(Balloons.Happy);

    const [styles, api] = useSpring(() => ({
        from: { y: -10 },
    }))

    useEffect(() => {
        api({
            y: 10,
            config: { 
                duration: "5000",
             },
            loop: { reverse: true },
        })
    }, [])

    const [pauseValue, setPauseValue] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const animationProps = useSpring({
        pause: pauseValue,
        config: { duration: 500 },
        body: balloonType.bodies[activeIndex],
        topBubble: balloonType.bubbles[activeIndex],
        bottomBubble: balloonType.bubbles_two[activeIndex],
        string: balloonType.string[activeIndex],
        color: balloonType.colors[activeIndex],

    });

    const [happySliderValue, setHappyValue] = useState(0);

    const [sadSliderValue, setSadValue] = useState(0);

    const [animatingBool, setAnimatingBool] = useState(false);

    const handleChange = (event, newValue, setSliderChange) => {
        if (animatingBool === true) {
            return;
        }
        let num = closestToIncrement(newValue);
        let betweenValue = (newValue % 10) / 10
        if (newValue % 10 >= 1) {
            setAnimatingBool(true);
            setPauseValue(false);
            setActiveIndex(num);
            setSliderChange(newValue);
            setTimeout(() => {setPauseValue(true)}, betweenValue * 500);
            setAnimatingBool(false);
        }
        else {
            setAnimatingBool(true);
            setPauseValue(false);
            setActiveIndex(num);
            setSliderChange(newValue);
            setAnimatingBool(false);
    }
    };
    
    return (
        <ThemeProvider theme={theme}>
        <div className="Figma">

            <marquee behavior="alternate" scrollamount="2" direction="left">
                <img src=
                    {cloud} width="200"
                    alt="cloud" className="mt-10" />
            </marquee>

            <marquee behavior="alternate" scrollamount="4" direction="right">
                <img src=
                    {cloud} width="200"
                    alt="cloud" className="mt-5" />
            </marquee>

            <animated.div className="balloons mx-auto" style={{ ...styles }}>
                <div className="balloon_svg mt-[2rem] mb-10">
                    <svg
                        width="155"
                        height="261"
                        viewBox="0 0 120 261"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="mx-auto"
                    >
                        <animated.path
                            d={animationProps.body} fill={animationProps.color} />
                        <animated.path
                            d={animationProps.topBubble} fill="#A9DCF7" />
                        <animated.path
                            d={animationProps.bottomBubble} fill="#AADCF7" />
                        <animated.path
                            d={animationProps.string} stroke="black" />
                    </svg>
                </div>

            </animated.div>

            <div className="button-container mb-80 flex flex-col">
                {/* <div className="buttons">
                    {["Original", "Deflated", "More deflated", "Super Deflated", "Even more deflated", "popped", "what is this?", "inflate"].map((text, index) => (
                        <button
                            type="button"
                            key={index}
                            onClick={() => {
                                setActiveIndex(index);
                            }}
                            style={{
                                background: activeIndex === index ? "purple" : "indigo",
                                color: activeIndex === index ? "white" : "white",
                            }}
                            className="h-12 px-6 shadow rounded-full hover:bg-blue-400 text-gray-800 font-bold mx-2 mb-10 text-lg">
                            {text}
                        </button>
                    ))}

                </div> */}

                <Box width={400} className="place-self-center">
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={(event, newValue) => {setBalloonType(Balloons.Happy); handleChange(event, newValue, setHappyValue) }} max={70} value={happySliderValue}/>

                    <Slider color="secondary" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={(event, newValue) => {setBalloonType(Balloons.Sad); handleChange(event, newValue, setSadValue);}} max={50} value={sadSliderValue}/>
                </Box>

            </div>
        </div>
        </ThemeProvider>
    )
}

export default Home;
