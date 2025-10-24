import "./../css/Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <p><Link to="/contact">Contact Us</Link></p>
            <p><Link to="/admin">Admin Tools</Link></p>
        </div>
    );
};

export default Footer;