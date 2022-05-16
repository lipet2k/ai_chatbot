import "./App.css";
import "./home.css"
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

import cloud from "./cloud.png";

const colors = [
    "#72C8F1",
    "#33A1FF",
    "#3385FF",
    "#3376FF",
    "#3382FF",
    "#C70039",
    "#ED33FF"
];



const bodies = [

    "M68 149.5C68 149.5 118.5 112 119.5 68.5C119.886 51.6987 115.121 35.4211 106.017 23C95.6101 8.80322 79.5342 -0.355579 59 0.500012C44.0037 1.12486 31.2571 5.96631 21.5 14.0677C6.20766 26.765 -1.74148 47.4701 0.500002 72.5C4.17165 113.5 52 149.5 52 149.5C50 151 46 160.5 52 159.5C58 158.5 63.5 158.5 69.5 159.5C73.4284 160.155 68 149.5 68 149.5Z",

    "M34.7437 96.6001C34.7437 96.6001 59.2436 75.1001 56.2435 63.1002C52.1185 46.6006 68.2436 39.6001 58.2436 22.6001C44.7436 11.1001 55.7435 1.60025 33.7435 0.100154C11.7436 -1.39995 -4.75628 14.1001 1.24368 36.6001C7.24365 59.1001 -3.75628 67.1001 9.74364 78.1001C23.2436 89.1001 24.7435 96.1002 24.7435 96.1002C22.7435 102.1 19.7435 104.6 25.7435 103.6C31.7435 102.6 29.7435 103.1 35.7435 104.1C39.6719 104.755 34.7437 96.6001 34.7437 96.6001Z",

    "M 34.7437 96.6001C34.7437 96.6001 59.2436 75.1001 56.2435 63.1002C52.1185 46.6006 68.2436 39.6001 58.2436 22.6001C44.7436 11.1001 55.7435 1.6002 33 6C11.7436 -1.4 -4.7563 14.1001 9 37C7.2436 59.1001 -3.7563 67.1001 18 75C23.2436 89.1001 24.7435 96.1002 24.7435 96.1002C22.7435 102.1 19.7435 104.6 25.7435 103.6C31.7435 102.6 29.7435 103.1 35.7435 104.1C39.6719 104.755 34.7437 96.6001 34.7437 96.6001 Z",

    "M60.5 39.5C47.5 37 31.4876 47.2002 29.7438 45.6001C28 44 34.672 53.755 30.7436 53.1002C24.7436 52.1002 26.7436 51.6002 20.7436 52.6002C14.8462 53.5831 17.6437 51.1847 19.6402 45.4048C18.9456 45.1418 16.4657 43.4905 8.50015 37C-4.99978 26 1.75641 23.5 8.50013 14.5C15.2438 5.49999 45 11.5 51.5 4.5C58 -2.5 74.5 1 90 6.5C105.5 12 73.5 42 60.5 39.5Z",

    "M23.0002 18C27.7566 10.5 39.5002 36.3998 54.5002 33C69.5002 29.6002 96.0002 45 89.0002 28.1002C82.0002 11.2005 83.0002 13 71.5 7.5C59.9998 1.99999 45 -1.5 30.5 1.50001C16 4.50002 18.5002 8.50001 10.0002 13.5C1.50008 18.5 7.00008 21 7.00008 21C5.00008 27 2.7438 28.6002 8.7438 27.6002C14.7438 26.6002 19.3287 31 18.7438 28.1002C16.0002 14.5 18.2438 25.5 23.0002 18Z",

    "M71.5 143.084C71.5 112.535 85.6526 140.084 113.153 104.584C123.568 91.1389 133.252 39.0459 100.5 14C75 -5.5 29.9999 -7.99995 26 39C22.0001 86 -13 10.5001 15.5 65.5C44 120.5 -4.5 71 1.50005 80C7.5001 88.9999 55.6526 137.084 53.6526 143.084C51.6526 149.084 48.6525 154.084 54.6526 153.084C60.6526 152.084 66.5 151.5 72.5 152.5C76.4284 153.155 71.5 149 71.5 143.084Z",

    "M87.5198 124.841C88.5198 103.585 103.112 125.023 128 91.0846C139 76.0846 146.343 79.1645 148.5 44.5847C151 4.5 140.524 14.1693 128 49.0847C115.476 84 13.9231 -46.9153 50 20.0847C86.0769 87.0847 -12.5 31.5847 2.50001 60.0847C17.5 88.5847 71.6724 118.841 69.6724 124.841C67.6724 130.841 64.6724 135.841 70.6724 134.841C76.6724 133.841 82.5198 133.257 88.5198 134.257C92.4482 134.912 87.2418 130.75 87.5198 124.841Z",

    "M77.6525 148.084C88.6525 119.584 93.6525 146.084 121.153 110.584C131.568 97.139 146.358 68.0841 126.653 34.5841C116.064 16.5841 101.653 2.33428 68.6525 0.0841246C35.6525 -2.16603 -14.8475 41.0842 4.15253 86.5841C23.1525 132.084 35.1525 124.584 46.1525 132.084C57.1525 139.584 63.6525 143.084 61.6525 149.084C59.6525 155.084 56.6525 160.084 62.6525 159.084C68.6525 158.084 71.6525 158.084 77.6525 159.084C81.5809 159.739 75.966 152.454 77.6525 148.084Z"


];

const bubbles = [
    "M32 35.5C33.7143 30.8262 34.1107 24.8774 29.5 23C25.0335 21.1813 21.2335 25.2258 19 29.5C16.3872 34.5 15.7298 40.8799 20.5 43C25 45 30.1709 40.4869 32 35.5Z",

    "M17.7437 14.1001C19.498 12.872 18.7338 9.40726 16.7437 8.60006C14.8158 7.81808 12.583 9.7492 11.619 11.5869C10.4912 13.7368 9.68472 17.6885 11.7437 18.6001C13.6861 19.46 12.7437 17.6001 17.7437 14.1001Z",

    "M17.7437 14.1001C19.498 12.872 18.7338 9.40726 16.7437 8.60006C14.8158 7.81808 12.583 9.7492 11.619 11.5869C10.4912 13.7368 9.68472 17.6885 11.7437 18.6001C13.6861 19.46 12.7437 17.6001 17.7437 14.1001Z",

    "M62.6129 8.64787C64.1891 8.80178 67.4338 7.9154 66.9182 6.46688C66.4187 5.06363 63.4305 5.23422 61.8919 5.82294C60.0921 6.51162 56.5677 6.4875 57.057 8.0304C57.5185 9.4859 58.1209 8.20921 62.6129 8.64787Z",

    "M79 16C79.5953 16.7057 81.3727 17.4504 81.5 16.5C81.6233 15.5793 79.9677 14.3086 79.2163 14C78.3374 13.639 76.1596 12.0115 76 13C75.8495 13.9325 77.3033 13.9887 79 16Z",

    "M40 47C41.5845 45.5595 49.3657 36.2297 42.8465 36.2297C37.5 36.2297 33.9976 41.0029 32.8465 42.7297C28.8465 48.7297 28.941 50.0884 31 51C32.9423 51.8599 34.5 52 40 47Z",

    "M88.1622 125.617C88.1622 125.617 69.4737 126.125 69.4737 125.617C69.4737 125.108 80.9536 124.53 88.1622 125.617ZM88.1622 125.617C115.928 157.654 33.6984 216.642 68.9397 238",

    "M40.6526 37.0841C41.7316 35.2344 44.3372 25.1457 38.1526 23.0841C33.6526 21.5841 29.3037 27.8574 28.1526 29.5841C24.1526 35.5841 27.5936 42.1726 29.6526 43.0841C31.5949 43.944 37.1526 43.0841 40.6526 37.0841Z"



];

const bubbles_two = [
    "M17.4131 50.1852C18.2587 47.9524 18.4543 45.1104 16.1799 44.2135C13.9766 43.3446 12.1021 45.2768 11.0003 47.3188C9.71139 49.7075 9.38708 52.7554 11.7402 53.7682C13.96 54.7237 16.5108 52.5676 17.4131 50.1852Z",

    "M9.74371 24.6001C10.2437 23.1001 9.81232 21.5485 9.24371 21.1C8.69344 20.6661 8.27009 22.2352 7.99462 23.2563L7.99378 23.2594C7.67156 24.4537 8.15543 25.5936 8.74371 26.1001C9.29867 26.5778 9.36033 25.7502 9.74371 24.6001Z",

    "M9.74371 24.6001C10.2437 23.1001 9.81232 21.5485 9.24371 21.1C8.69344 20.6661 8.27009 22.2352 7.99462 23.2563L7.99378 23.2594C7.67156 24.4537 8.15543 25.5936 8.74371 26.1001C9.29867 26.5778 9.36033 25.7502 9.74371 24.6001Z",

    "M52.645 9.56794C53.9035 9.31261 54.8814 8.43794 55.0124 7.89941C55.1392 7.37824 53.8567 7.70953 53.0221 7.9251L53.0196 7.92575C52.0434 8.17791 51.382 8.92795 51.2157 9.50146C51.0588 10.0425 51.68 9.76373 52.645 9.56794Z",

    "M74.4999 12.5C75.3484 12.6421 76.5 12 75.5 11.5C75.1983 11.3492 75.0648 11.0512 74.4999 11C73.8391 10.9401 73.1385 11.0165 72.9999 11.5C72.8691 11.9561 73.8493 12.391 74.4999 12.5Z",

    "M29.0327 54.4237C29.3341 53.8898 29.8152 52.2829 29.0067 51.5661C28.8295 51.409 27.8365 51.4415 26.9172 52.8276C26.2606 53.8177 26.285 55.3411 27.1221 55.4845C27.3626 55.5257 28.4769 55.408 29.0327 54.4237Z",

    "M53 58.0847C55.1069 57.7016 60.5 48.5847 55.5 52.0847C51.12 55.1506 50.0133 55.5813 48 56.0847C44 57.0846 38.6264 56.3356 40.5 57.5846C42 58.5846 47.5 59.0847 53 58.0847Z",

    "M26.6525 51.0841C27.466 49.7283 28.6525 45.5841 26.1525 43.5841C25.6047 43.1459 22.6693 43.0841 20.1525 46.5841C18.3549 49.0841 18.6525 53.0841 21.1525 53.5841C21.8706 53.7278 25.1525 53.5841 26.6525 51.0841Z"


];

const string = [
    "M68.5 149.5C68.5 149.5 51 150 51 149.5C51 149 61.7498 148.432 68.5 149.5ZM68.5 149.5C94.5 181 17.5 239 50.5 260",

    "M35.138 97.2167C35.138 97.2167 23.5951 97.7252 23.5951 97.2167C23.5951 96.7081 30.6856 96.1302 35.138 97.2167ZM35.138 97.2167C52.2875 129.254 1.49863 188.242 23.2653 209.6",

    "M35.138 97.2167C35.138 97.2167 23.5951 97.7252 23.5951 97.2167C23.5951 96.7081 30.6856 96.1302 35.138 97.2167ZM35.138 97.2167C52.2875 129.254 1.49863 188.242 23.2653 209.6",

    "M30.138 46.2167C30.138 46.2167 18.5951 46.7252 18.5951 46.2167C18.5951 45.7081 25.6856 45.1302 30.138 46.2167ZM30.138 46.2167C47.2875 78.2536 -3.50137 137.242 18.2653 158.6",

    "M18.138 21.2167C18.138 21.2167 6.5951 21.7252 6.5951 21.2167C6.5951 20.7081 13.6856 20.1302 18.138 21.2167ZM18.138 21.2167C35.2875 53.2536 -15.5014 112.242 6.2653 133.6",

    "M71.3339 142.617C71.3339 142.617 53.195 143.125 53.195 142.617C53.195 142.108 64.3373 141.53 71.3339 142.617ZM71.3339 142.617C98.2831 174.654 18.472 233.642 52.6768 255",

    "M50.1606 8.19353C50.111 7.58247 49.6085 5.98208 48.5372 5.84171C48.3025 5.81095 47.4983 6.3945 47.5141 8.05766C47.5253 9.24562 48.3995 10.4936 49.1731 10.143C49.3953 10.0423 50.2521 9.32028 50.1606 8.19353Z",

    "M77.0167 148.701C77.0167 148.701 62.1758 149.209 62.1758 148.701C62.1758 148.192 71.2922 147.614 77.0167 148.701ZM77.0167 148.701C99.066 180.738 33.766 239.726 61.7517 261.084"
];

function closestToIncrement(num)  {
    return Math.round(num / 10);
}

function Home() {

    const [styles, api] = useSpring(() => ({
        from: { y: -10 },
    }))

    useEffect(() => {
        api({
            y: 10,
            config: { duration: "5000" },
            loop: { reverse: true },
        })
    }, [])

    const [pauseValue, setPauseValue] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const animationProps = useSpring({
        pause: pauseValue,
        config: { duration: 1000 },
        body: bodies[activeIndex],
        topBubble: bubbles[activeIndex],
        bottomBubble: bubbles_two[activeIndex],
        string: string[activeIndex],
        color: colors[activeIndex],

    });

    const [sliderValue, setSliderValue] = useState(0);

    const handleChange = (event, newValue) => {
        let num = closestToIncrement(newValue);
        let betweenValue = (newValue % 10) / 10
        if (newValue % 10 >= 1) {
            setPauseValue(false);
            setActiveIndex(num);
            setSliderValue(newValue);
            setTimeout(() => {setPauseValue(true)}, betweenValue * 1000);
        }
        else {
            setPauseValue(false);
            setActiveIndex(num);
            setSliderValue(newValue);
    }
    };



    return (
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

            <animated.div className="balloons" style={{ ...styles }}>
                <div className="balloon_svg place-self-center mx-[42rem] mt-[2rem] mb-10">
                    <svg
                        width="155"
                        height="261"
                        viewBox="0 0 120 261"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                <div className="buttons">
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

                </div>

                <Box width={400} className="place-self-center">
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={handleChange} max={70} value={sliderValue}/>
                </Box>


                <div className="buttonHere">

                    <button
                        onClick={() => {
                            setPauseValue(true);
                        }} style={{
                            background: activeIndex === "7" ? "red" : "orange",
                            color: activeIndex === "7" ? "white" : "white",
                        }}
                        className="h-12 px-6 shadow rounded-full hover:bg-blue-400 text-gray-800 font-bold mx-2 mb-96 text-lg">pause</button>
                    <button
                        onClick={() => {
                            setPauseValue(false);
                        }} style={{
                            background: activeIndex === "7" ? "red" : "orange",
                            color: activeIndex === "7" ? "white" : "white",
                        }}
                        className="h-12 px-6 shadow rounded-full hover:bg-blue-400 text-gray-800 font-bold mx-2 mb-96 text-lg">restart</button>





                </div>

            </div>
        </div>
    )
}

export default Home;