import "./../css/BookExtra.css";
import {useState} from "react";
import BookDialog from "./BookDialog";

const BookExtra = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const [book, setBook] = useState(props);
    const [showBook, setShowBook] = useState(true);

    const showBookDetails = () => {
        setShowDialog(true);
    }

    const closeBookDetails = () => {
        setShowDialog(false);
    }

    const updateBook = (book) => {
        setBook(book);
    }

    const hideBook = () => {
        setShowBook(false);
    }

    return (
        <>
            {showDialog?(
                <BookDialog closeBookDetails={closeBookDetails}
                hideBook = {hideBook}
                updateBook = {updateBook}
                id={book.id}
                name={book.name}
                imagePath = {book.imagePath}
                author = {book.author}
                price = {book.price}
                releaseDate = {book.releaseDate}
                description = {book.description}/>
            ):("")}
            {showBook?(
                <div id="book-extra" onClick={showBookDetails}>
                    <div>
                        <img src={"https://server-bookstore-28pn.onrender.com/images/"+book.imagePath} alt="book" />
                    </div>
                    <h1>{book.name}</h1>
                    <h1>{book.author}</h1>
                    <p>Price: {book.price}</p>
                    <p>Release: {book.releaseDate}</p>
                    <p>{book.description}</p>
                </div>
            ):("")}
        </>
    );
};

export default BookExtra