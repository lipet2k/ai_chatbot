import one_body from './deflate/balloon_1/Body.svg';
import one_highlights from './deflate/balloon_1/Highlights.svg';
import one_string from './deflate/balloon_1/String.svg';

import two_body from "./deflate/balloon_2/body.svg";
import two_highlights from "./deflate/balloon_2/highlights.svg";
import two_string from "./deflate/balloon_2/string.svg";

import three_body from "./deflate/balloon_3/body.svg";
import three_highlights from "./deflate/balloon_3/highlights.svg";
import three_string from "./deflate/balloon_3/string.svg";

import four_body from "./deflate/balloon_4/body.svg";
import four_highlights from "./deflate/balloon_4/highlights.svg";
import four_string from "./deflate/balloon_4/string.svg";

import five_body from "./deflate/balloon_5/body.svg";
import five_highlights from "./deflate/balloon_5/highlights.svg";
import five_string from "./deflate/balloon_5/string.svg";

import six_body from "./deflate/balloon_6/body.svg";
import six_highlights from "./deflate/balloon_6/highlights.svg";
import six_string from "./deflate/balloon_6/string.svg";

import seven_body from "./deflate/balloon_7/body.svg";
import seven_highlights from "./deflate/balloon_7/highlights.svg";
import seven_string from "./deflate/balloon_7/string.svg";

import balloon from "./balloon.svg";
import second from "./second_balloon.svg"

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
        "M44.3,2.65c-8.51,2.81-14.84.65-20.82-.42-9.77-1.75-11.14,8-17.11,14.34C.19,23.15,7.52,38.11,2.43,48.21c-5,9.94-.09,17.48,7.16,23.8,6.85,6,3,13.09,9.44,18.59h0L37.5,106.11c-2.34,4.34-2.71,8.52-.21,8.2,7-.87,7-1.08,14,0,2.5.39,2.12-3.81-.23-8.19,0,0,15.26-14.4,19.49-18.66h0C90.85,76.69,89,61.78,90.29,38c.84-15.07-8.44-13.32-14.48-23C66.32-.17,58.48-2,44.3,2.65Z",

        "M400.92,141.14c-44.22,0-80.07,39.63-80.07,88.51,0,31.73,15.1,59.56,37.79,75.18l0,0,30.91,25.32c-3.92,7.09-4.54,13.9-.35,13.39,11.68-1.43,11.7-1.77,23.4,0,4.19.63,3.55-6.23-.38-13.37L443.1,304.9h0C465.85,289.28,481,261.42,481,229.65,481,180.77,445.14,141.14,400.92,141.14Z",

    ];


    const animationProps = useSpring({
        body: bodies[activeIndex]
    });

    gsap.to("#first_morph", {duration: 1, morphSVG:"#second_morph"});


    return (
        <div className="someballoon w-[100px] mx-auto mt-20">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.74 217.53">
        <g id="Layer_1" data-name="Layer 1">
            <path className="cls-1" id="first_morph" d="M44.3,2.65c-8.51,2.81-14.84.65-20.82-.42-9.77-1.75-11.14,8-17.11,14.34C.19,23.15,7.52,38.11,2.43,48.21c-5,9.94-.09,17.48,7.16,23.8,6.85,6,3,13.09,9.44,18.59h0L37.5,106.11c-2.34,4.34-2.71,8.52-.21,8.2,7-.87,7-1.08,14,0,2.5.39,2.12-3.81-.23-8.19,0,0,15.26-14.4,19.49-18.66h0C90.85,76.69,89,61.78,90.29,38c.84-15.07-8.44-13.32-14.48-23C66.32-.17,58.48-2,44.3,2.65Z" />
            <path className="cls-1" id="second_morph" d="M400.92,141.14c-44.22,0-80.07,39.63-80.07,88.51,0,31.73,15.1,59.56,37.79,75.18l0,0,30.91,25.32c-3.92,7.09-4.54,13.9-.35,13.39,11.68-1.43,11.7-1.77,23.4,0,4.19.63,3.55-6.23-.38-13.37L443.1,304.9h0C465.85,289.28,481,261.42,481,229.65,481,180.77,445.14,141.14,400.92,141.14Z" />
            <ellipse className="cls-2" cx="40.61" cy="105.89" rx="7.71" ry="1.86" />
            <path className="cls-3" d="M51.72,108.46C52,103.61,35,107.15,35.54,107c3-1.17,14.19.48,16.18,1.51,2.32,1.2,8.35,49.8-11.52,66.34C24.66,187.73,22.13,193,35.31,217.29" />
            <path className="cls-4" d="M23.78,18.75c4-1.77,3.54-5.75,1.5-7.35s-5.48-.49-7.7,2.46-2.39,6.64-.33,8.24S20.32,20.3,23.78,18.75Z" />
            <path className="cls-4" d="M10.53,26.86a2.57,2.57,0,0,0,.55,3.26c1.16.94,2.14.77,2.31-1.54.1-1.45.34-1.29-.07-2.24C12.12,23.53,11.19,25.57,10.53,26.86Z" />
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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {one: <Balloon_One/>, two:<Balloon_Two/>, three:<Balloon_Three/>, four:<Balloon_Four/>, five:<Balloon_Five/>, six:<Balloon_Six/>, seven:<Balloon_Seven/>};
    }
    
    render() {
    gsap.ticker.add(onTick);

    function onTick(time, deltaTime, frame) {
        console.log(time);
        console.log(deltaTime);
    }

    gsap.ticker.remove(onTick);

    
    return (
        <div className="App">
            <div className="Home h-screen">
                <div className="balloon-container ">
                <Og_balloon/>
                </div>

                <div className="form-container mt-[250px]">
                    <Form />
                </div>

            </div>
        </div>
    );
    }
}

const Balloon_One = () => {
    const balloonRef = useRef();

    useEffect(() => {
        gsap.to(balloonRef.current, {
            translateY: "+=20",
            repeat: -1,
            yoyo: true
        })
    });
    return (
        <div className="balloon-container static w-max h-min mx-auto mt-20" ref={balloonRef}>
            <img src={one_body} className="balloon-body" alt="balloon" width="150px" height="300px" />

            <img src={one_string} className="balloon-string absolute -bottom-[120px] left-[52px]" alt="balloon" width="40px" height="100px" />

            <img src={one_highlights} className="balloon-highlights absolute bottom-[130px] left-[17px]" width="30px" height="50px" />
        </div>
    )
}

const Balloon_Two = () => {
    const balloonRef = useRef();

    useEffect(() => {
        gsap.to(balloonRef.current, {
            translateY: "+=15",
            repeat: -1,
            yoyo: true
        })
    });
    return (
        <div className="balloon-container static w-max h-min mx-auto mt-20" ref={balloonRef}>
            <img src={two_body} className="balloon-body" alt="balloon" width="130px" height="300px" />

            <img src={two_string} className="balloon-string absolute -bottom-[142px] left-[42px]" alt="balloon" width="40px" height="100px" />

            <img src={two_highlights} className="balloon-highlights absolute bottom-[130px] left-[25px]" width="30px" height="50px" />
        </div>
    )
}

const Balloon_Three = () => {
    const balloonRef = useRef();

    useEffect(() => {
        gsap.to(balloonRef.current, {
            translateY: "+=7",
            repeat: -1,
            yoyo: true
        })
    });
    return (
        <div className="balloon-container static w-max h-min mx-auto mt-20" ref={balloonRef}>
            <img src={three_body} className="balloon-body" alt="balloon" width="120px" height="300px" />

            <img src={three_string} className="balloon-string absolute -bottom-[142px] left-[36px]" alt="balloon" width="40px" height="100px" />

            <img src={three_highlights} className="balloon-highlights absolute bottom-[105px] left-[14px]" width="30px" height="50px" />
        </div>
    )
}

const Balloon_Four = () => {
    const balloonRef = useRef();

    useEffect(() => {
        gsap.to(balloonRef.current, {
            translateY: "+=3",
            repeat: -1,
            yoyo: true
        })
    });
    return (
        <div className="balloon-container static w-max h-min mx-auto mt-20" ref={balloonRef}>
            <img src={four_body} className="balloon-body" alt="balloon" width="90px" height="20px" />

            <img src={four_string} className="balloon-string absolute -bottom-[155px] left-[29px]" alt="balloon" width="30px" height="100px" />

            <img src={four_highlights} className="balloon-highlights absolute bottom-[100px] left-[14px]" width="30px" height="50px" />
        </div>
    )
}

const Balloon_Five = () => {
    const balloonRef = useRef();

    useEffect(() => {
        gsap.to(balloonRef.current, {
            translateY: "+=3",
            repeat: -1,
            yoyo: true
        })
    });
    return (
        <div className="balloon-container static w-max h-min mx-auto mt-20" ref={balloonRef}>
            <img src={five_body} className="balloon-body" alt="balloon" width="110px" height="20px" />

            <img src={five_string} className="balloon-string absolute -bottom-[160px] left-[9px]" alt="balloon" width="30px" height="100px" />

            <img src={five_highlights} className="balloon-highlights absolute bottom-[45px] left-[50px]" width="40px" height="50px" />
        </div>
    )
}

const Balloon_Six = () => {
    const balloonRef = useRef();

    useEffect(() => {
        gsap.to(balloonRef.current, {
            translateY: "+=3",
            repeat: -1,
            yoyo: true
        })
    });
    return (
        <div className="balloon-container static w-max h-min mx-auto mt-20" ref={balloonRef}>
            <img src={six_body} className="balloon-body" alt="balloon" width="110px" height="20px" />

            <img src={six_string} className="balloon-string absolute -bottom-[140px] -left-[7px]" alt="balloon" width="30px" height="100px" />

            <img src={six_highlights} className="balloon-highlights absolute bottom-[20px] left-[65px]" width="30px" height="50px" />
        </div>
    )
}

const Balloon_Seven = () => {
    const balloonRef = useRef();

    useEffect(() => {
        gsap.to(balloonRef.current, {
            translateY: "+=2",
            repeat: -1,
            yoyo: true
        })
    });
    return (
        <div className="balloon-container static w-max h-min mx-auto mt-20" ref={balloonRef}>
            <img src={seven_body} className="balloon-body" alt="balloon" width="90px" height="20px" />

            <img src={seven_string} className="balloon-string absolute -bottom-[55px] -left-[9px]" alt="balloon" width="32px" height="100px" />

            <img src={seven_highlights} className="balloon-highlights absolute bottom-[20px] left-[60px]" width="15px" height="50px" />
        </div>
    )
}

export default Home;