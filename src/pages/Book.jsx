import "./../css/Book.css";
import BookImg from "./../componets/BookImg";
import BookTxt from "../componets/BookTxt";

const Book = () => {
    return (
        <div id="book">
            <BookImg />
            <BookTxt />
        </div>
    );
};

export default Book;