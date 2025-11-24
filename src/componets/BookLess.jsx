import "./../css/BookLess.css";
import { useState } from "react";
import BookDialog from "./BookDialog";

const BookLess = (props) => {
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
                id={props.id}
                name={props.name}
                imagePath = {props.imagePath}
                author = {props.author}
                price = {props.price}
                releaseDate = {props.releaseDate}
                description = {props.description}/>
            ):("")}
            {showBook?(
                <div id="book-less" onClick={showBookDetails}>
                    <div>
                        <img src={"https://server-bookstore-28pn.onrender.com/images/"+props.imagePath} alt="book" />
                    </div>
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                </div>
            ):("")}
            
        </>
    );
};

export default BookLess;