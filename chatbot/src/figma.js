// import "./App.css";
// import { animated, useSpring, animationProps } from "react-spring";
// import { useState } from "react";

// const bodies = [

//     "M55.5 10.5L28.5 1L1 20V43.5L13 67L35.5 78L55.5 67L62.5 37.5L55.5 10.5Z",

//     "M57.5 25.5L53 15.5L47.5 0.5H5.5L17.5 18L19.5 40.5L8 55L30.5 66L50.5 55L57.5 25.5Z",

//     "M57.5 25.5L53 15.5L47.5 0.5H5.5L17.5 18L19.5 40.5L8 55L30.5 66L50.5 55L57.5 25.5Z"
// ]

// function Home() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     <div className="Figma">
//         <svg
//             width="764"
//             height="873"
//             viewBox="0 0 764 873"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <animated.path
//                 d={animationProps.body} stroke="black" />
//         </svg>
//     <div>
//         {["original", "deflated", ].map((text, index) => (
//             <button
//             type="button"
//             key={index}
//             onClick={() => {
//                 setActiveIndex(index);
//             }}
//             style={{
//                 background: activeIndex === index ? "purple" : "white",
//                 color: activeIndex === index ? "white" : "black",
//             }}
//             >
//                 {text}
//             </button>
//         ))}
//     </div>
//     </div>
// }

// export default Home;