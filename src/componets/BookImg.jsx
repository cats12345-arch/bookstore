import "./../css/BookImg.css";
import bookImg from "./../images/courtAndThorn.jpg";

const BookImg = () => {
    return (
        <div id="book-img">
            <img src={bookImg} alt="Court and Thorn the book" />
        </div>
    );
};

export default BookImg;