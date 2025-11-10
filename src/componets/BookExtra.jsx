import "./../css/BookExtra.css";
import {useState} from "react";
import BookDialog from "./BookDialog";

const BookExtra = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showBookDetails = () => {
        setShowDialog(true);
    }

    const closeBookDetails = () => {
        setShowDialog(false);
    }

    return (
        <>
            {showDialog?(
                <BookDialog closeBookDetails={closeBookDetails}
                name={props.name}
                imagePath = {props.imagePath}
                author = {props.author}
                price = {props.price}
                releaseDate = {props.releaseDate}
                description = {props.description}/>
            ):("")}
            <div id="book-extra" onClick={showBookDetails}>
                <div>
                    <img src={"https://server-bookstore-28pn.onrender.com/images/"+props.imagePath} alt="book" />
                </div>
                <h1>{props.name}</h1>
                <h1>{props.author}</h1>
                <p>Price: {props.price}</p>
                <p>Release: {props.releaseDate}</p>
                <p>{props.description}</p>
            </div>
        </>
    );
};

export default BookExtra