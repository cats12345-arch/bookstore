import React, { useState } from "react";
import "./../css/BookDeleteDialog.css";

const BookDeleteDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteBook = async() => {
        const response = await fetch(`https://server-bookstore-28pn.onrender.com/api/books/${props.id}`, {
            method:"DELETE"
        });

        if (response.status === 200) {
            setResult("Book has been delted");
            props.closeBookDetails();
            props.hideBook();
        } else {
            setResult("The book you tried to delete does not exist or I messed up somewhere");
        }
    }

    return (
        <div id="delete">
            <h1>Are you sure that you want to delete this book?</h1>
            <div>
                <button onClick={props.closeBookDetails}>No</button>
                <button onClick={deleteBook}>Yeah</button>
            </div>
            <span>{result}</span>
        </div>
    );
};

export default BookDeleteDialog;