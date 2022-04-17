import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={balloon} className="App-balloon" alt="balloon" width="200px" height="400px"/>
//       </header>
//     </div>

    
//   );
// }




function App() {
  return (
    <Router>

      <div className="App bg-sky-100">
        <Header/>
        <Routes>
          {/* <Route path="/blog" element={<Blog/>}/> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About/>} /> */}
        </Routes>
      </div>

    </Router>
  );
}
export default App;
