import "./App.css";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

import cloud from "./cloud.png";

const bodies = [

    "M68 149.5C68 149.5 118.5 112 119.5 68.5C119.886 51.6987 115.121 35.4211 106.017 23C95.6101 8.80322 79.5342 -0.355579 59 0.500012C44.0037 1.12486 31.2571 5.96631 21.5 14.0677C6.20766 26.765 -1.74148 47.4701 0.500002 72.5C4.17165 113.5 52 149.5 52 149.5C50 151 46 160.5 52 159.5C58 158.5 63.5 158.5 69.5 159.5C73.4284 160.155 68 149.5 68 149.5Z",

    "M34.7437 96.6001C34.7437 96.6001 59.2436 75.1001 56.2435 63.1002C52.1185 46.6006 68.2436 39.6001 58.2436 22.6001C44.7436 11.1001 55.7435 1.60025 33.7435 0.100154C11.7436 -1.39995 -4.75628 14.1001 1.24368 36.6001C7.24365 59.1001 -3.75628 67.1001 9.74364 78.1001C23.2436 89.1001 24.7435 96.1002 24.7435 96.1002C22.7435 102.1 19.7435 104.6 25.7435 103.6C31.7435 102.6 29.7435 103.1 35.7435 104.1C39.6719 104.755 34.7437 96.6001 34.7437 96.6001Z",

    "M 34.7437 96.6001C34.7437 96.6001 59.2436 75.1001 56.2435 63.1002C52.1185 46.6006 68.2436 39.6001 58.2436 22.6001C44.7436 11.1001 55.7435 1.6002 33 6C11.7436 -1.4 -4.7563 14.1001 9 37C7.2436 59.1001 -3.7563 67.1001 18 75C23.2436 89.1001 24.7435 96.1002 24.7435 96.1002C22.7435 102.1 19.7435 104.6 25.7435 103.6C31.7435 102.6 29.7435 103.1 35.7435 104.1C39.6719 104.755 34.7437 96.6001 34.7437 96.6001 Z"
];

const bubbles = [
    "M32 35.5C33.7143 30.8262 34.1107 24.8774 29.5 23C25.0335 21.1813 21.2335 25.2258 19 29.5C16.3872 34.5 15.7298 40.8799 20.5 43C25 45 30.1709 40.4869 32 35.5Z",

    "M17.7437 14.1001C19.498 12.872 18.7338 9.40726 16.7437 8.60006C14.8158 7.81808 12.583 9.7492 11.619 11.5869C10.4912 13.7368 9.68472 17.6885 11.7437 18.6001C13.6861 19.46 12.7437 17.6001 17.7437 14.1001Z",

    "M17.7437 14.1001C19.498 12.872 18.7338 9.40726 16.7437 8.60006C14.8158 7.81808 12.583 9.7492 11.619 11.5869C10.4912 13.7368 9.68472 17.6885 11.7437 18.6001C13.6861 19.46 12.7437 17.6001 17.7437 14.1001Z"

];

const bubbles_two = [
    "M17.4131 50.1852C18.2587 47.9524 18.4543 45.1104 16.1799 44.2135C13.9766 43.3446 12.1021 45.2768 11.0003 47.3188C9.71139 49.7075 9.38708 52.7554 11.7402 53.7682C13.96 54.7237 16.5108 52.5676 17.4131 50.1852Z",

    "M9.74371 24.6001C10.2437 23.1001 9.81232 21.5485 9.24371 21.1C8.69344 20.6661 8.27009 22.2352 7.99462 23.2563L7.99378 23.2594C7.67156 24.4537 8.15543 25.5936 8.74371 26.1001C9.29867 26.5778 9.36033 25.7502 9.74371 24.6001Z",

    "M9.74371 24.6001C10.2437 23.1001 9.81232 21.5485 9.24371 21.1C8.69344 20.6661 8.27009 22.2352 7.99462 23.2563L7.99378 23.2594C7.67156 24.4537 8.15543 25.5936 8.74371 26.1001C9.29867 26.5778 9.36033 25.7502 9.74371 24.6001Z"
];

const string = [
    "M68.5 149.5C68.5 149.5 51 150 51 149.5C51 149 61.7498 148.432 68.5 149.5ZM68.5 149.5C94.5 181 17.5 239 50.5 260",

    "M35.138 97.2167C35.138 97.2167 23.5951 97.7252 23.5951 97.2167C23.5951 96.7081 30.6856 96.1302 35.138 97.2167ZM35.138 97.2167C52.2875 129.254 1.49863 188.242 23.2653 209.6",

    "M35.138 97.2167C35.138 97.2167 23.5951 97.7252 23.5951 97.2167C23.5951 96.7081 30.6856 96.1302 35.138 97.2167ZM35.138 97.2167C52.2875 129.254 1.49863 188.242 23.2653 209.6"
];

function Home() {

    const [activeIndex, setActiveIndex] = useState(0);
    const animationProps = useSpring({
        body: bodies[activeIndex],
        topBubble: bubbles[activeIndex],
        bottomBubble: bubbles_two[activeIndex],
        string: string[activeIndex]
    });

    return (
        <div className="Figma">

            <marquee behavior="alternate" scrollamount="2" direction="left">
                <img src=
                    {cloud} width="200"
                    alt="cloud" className="mt-10"/>
            </marquee>

            <marquee behavior="alternate" scrollamount="4" direction="right">
                <img src=
                    {cloud} width="200"
                    alt="cloud" className="mt-5"/>
            </marquee>

            <div className="balloon_svg place-self-center mx-[42rem] mt-[2rem] mb-10">
                <svg
                    width="120"
                    height="261"
                    viewBox="0 0 120 261"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <animated.path
                        d={animationProps.body} fill="#72C8F1" />
                    <animated.path
                        d={animationProps.topBubble} fill="#A9DCF7" />
                    <animated.path
                        d={animationProps.bottomBubble} fill="#AADCF7" />
                    <animated.path
                        d={animationProps.string} stroke="black" />
                </svg>
            </div>

            <div className="buttons mb-80">
                {["Original", "Deflated", "More deflated"].map((text, index) => (
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
                        className="h-12 px-6 shadow rounded-full hover:bg-blue-400 text-gray-800 font-bold mx-2 mb-96 text-lg">
                        {text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Home;