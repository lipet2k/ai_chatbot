import './styles/Header.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navbar-container mt-5 sm:flex">
            <div className="mr-10 shrink-0">
                <Link className="nav-item" to="/">Home</Link>
            </div>
            <div className="mr-10 shrink-0">
                <Link className="nav-item" to="/about">About Our Chatbot</Link>
            </div>
            <div className="mr-10 shrink-0">
                <Link className="nav-item" to="/blog">Our Team</Link>
            </div>
            <div className="mr-10 shrink-0">
                <Link className="nav-item" to="/projects">Projects</Link>
            </div>
        </div>
    )
}

const Header = () => {

    return (

        <div className="heading-container justify-between w-full sm:flex">
            <button className="text-2xl heading-font text-grey-900 shrink-0 mx-5 mt-2 ">AI Chatbot</button>
            <NavigationBar/>

        </div>
    )
}

export default Header
