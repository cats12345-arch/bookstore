import "./../css/BookExtra.css";
import rings from "../images/Thelord.jpg";

const BookExtra = (props) => {
    return (
        <div id="book-extra">
            <div>
                <img src={rings} alt="Lord of the rings" />
            </div>
            <h1>{props.bookName}</h1>
            <h1>{props.bookAuthor}</h1>
            <p>Price: {props.price}</p>
            <p>Release: {props.date}</p>
        </div>
    );
};

export default BookExtra