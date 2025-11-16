import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/BookListExtra.css";
import BookExtra from "../componets/BookExtra";
import AddBook from "./AddBook";

const BookList = (props) => {
   const [books, setBooks] = useState([]);

   const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    const updateBooks = (book) => {
        setBooks((books)=>[...books, book]);
    }

   useEffect(()=>{
        const loadBooks = async() => {
            const response = await axios.get("https://server-bookstore-28pn.onrender.com/api/books");
            setBooks(response.data.splice(0,props.num));
        };

        loadBooks();
   },[]);

    return (
        <>
            <button id="add-book" onClick={openAddDialog}>+</button>

            {showAddDialog?(<AddBook closeAddDialog={closeAddDialog}
                            updateBooks={updateBooks} /> ): ("")}
        
            <div id="bookListExtra">
                {books.map((book)=>(
                    <BookExtra key={book.id}
                    id={book.id}
                    name={book.name}
                    author={book.author}
                    price={book.price}
                    releaseDate={book.releaseDate}
                    imagePath={book.imagePath}
                    description={book.description}/>
                ))}
            </div>
        </>
    )
};

export default BookList;