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



const Balloons = {
    Happy: happy,
    Sad: sad,
    Mad: "mad"
};

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