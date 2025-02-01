import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className='Header-container'>
            <ul className='Header-list'>
                <li className='header-icon'>
                    <Link to="/"><i className="bi bi-house-door"></i></Link>
                </li>
                <li className='header-icon'>
                    <Link to="/HomePage"><i className="bi bi-folder"></i></Link>
                </li>
                <li className='header-icon'>
                    <Link to="/portfolio"><i className="bi bi-suitcase-lg"></i></Link>
                </li>
                <li className='header-icon'>
                    <Link to="/Tools"><i className="bi bi-wrench-adjustable"></i></Link>
                </li>
                <li className='header-icon'>
                    <Link to="/ToolDesign"><i className="bi bi-pencil-square"></i></Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
