import "./../css/BookLess.css";
import crying from "../images/crying.jpg";
import {Link} from "react-router-dom";

const BookLess = (props) => {
    return (
        <div id="book-less">
            <Link to="/book">
                <div>
                    <img src={crying} alt="crying in Hmart" />
                </div>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </Link>
        </div>
    );
};

export default BookLess;