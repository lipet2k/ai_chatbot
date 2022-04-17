import Form from './Form.jsx';
import './styles/Home.css';
import { gsap } from "gsap";
import React, { useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import { animated, useSpring } from 'react-spring';
import { useState } from 'react';

import './home.css';

const Og_balloon = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const bodies = [
        "M59.92.5c-15.5,0-29.61,7-40.19,18.34C7.91,31.57.5,49.83.5,70.12c0,25,12.41,45.36,28,59.14l0,0L51.5,149.2c-2.91,5.57-3.37,10.93-.26,10.53,8.66-1.13,8.68-1.39,17.36,0,3.11.5,2.64-4.9-.28-10.52l22.9-19.89h0c15.66-13.79,28.11-34.19,28.11-59.19a77.05,77.05,0,0,0-13.23-43.8C95.21,10.57,78.57.5,59.92.5Z",

        "M48,5.64C23.42,4.5,9.09,7.44,5.4,17,2.45,24.59-2.53,30.49,2.33,34.49h0L16.27,45.78c-1.76,3.16-4,6.23-2.09,6a44.91,44.91,0,0,1,13.79,0c1.89.28.29-2.8-1.48-6,0,0,3.85,1.42,6.31-3.86,2.69-5.74,16.29,2.78,26.54-1.13,11.61-4.43,23-16,28.58-23,6.24-7.85.3-11.9-6.81-14.72C61.86-4.54,52.55,5.86,48,5.64Z",

        // "M26.67.4C14.22-.13,12.73,31.05,3.57,38.83c-8.49,7.21,1.95,25,9.21,31.35,6.84,6,3,13.09,9.44,18.59h0L40.7,104.3c-2.34,4.34-2.71,8.51-.21,8.2,7-.88,7-1.09,14,0,2.5.38,2.12-3.82-.23-8.19,0,0,6.58-11,22.81-21,8.51-5.27,9.57-20.43,9.19-34.06C85.82,33.6,75.51,26.61,74.73,15.59,74,4.82,53.94,1.58,26.67.4Z",
    ];


    const animationProps = useSpring({
        body: bodies[activeIndex]
    });


    return (
        <div className="someballoon w-[100px] mx-auto mt-20">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.88 133.57">
            <g id="bodies">
                <animated.path className="cls-1 bodies" d="M49.94.42c-12.48,0-23.88,5.4-32.59,14.33C7,25.39.42,41,.42,58.45c0,20.8,10.34,37.8,23.37,49.28v0l19.12,16.6c-2.42,4.65-2.81,9.11-.22,8.78,7.23-.94,7.24-1.16,14.48,0,2.59.41,2.19-4.09-.24-8.77L76,107.78h0c13.06-11.49,23.43-28.5,23.43-49.32A64.29,64.29,0,0,0,89,22.7C79.89,9.13,65.78.42,49.94.42Z" />
                <ellipse className="cls-2" cx="49.94" cy="124.1" rx="7.98" ry="1.99" />
            </g>
</svg>
<div className="buttons">
    {["normal", "sad"].map((text, index) => (
        <button 
        type="button"
        key={index}
        onClick={() => {
            setActiveIndex(index);
        }}
        style={{
            background: activeIndex === index ? "purple" : "white",
            color: activeIndex === index ? "white" : "black",
        }}
        >
            {text}
            </button>
    ))}
    </div>
        </div>

    );
}


function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    

    return (
        <Og_balloon/>
    )
}

export default Home;