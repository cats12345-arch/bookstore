import "./../css/Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    
    return (
        <div id="main-nav">
            <ul id="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/hotBooks">Hot Books</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;