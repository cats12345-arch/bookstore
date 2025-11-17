import "./../css/HotBooks.css";
import BookLess from "./../componets/BookLess"
import { useEffect, useState } from "react";
import axios from "axios";

const BookListLess = (props) => {
    const [books, setBooks] = useState([]);

   useEffect(()=>{
        const loadBooks = async() => {
            const response = await axios.get("https://server-bookstore-28pn.onrender.com/api/books");
            setBooks(response.data.splice(0,props.num));
        };

        loadBooks();
   },[]);

    const displayPopular = (book) => {
        if(book.popularBook || book.popularBook === "true") {
            return (
                <BookLess key={book.id}
                id={book.id}
                name={book.name}
                author={book.author}
                price={book.price}
                releaseDate={book.releaseDate}
                imagePath={book.imagePath}
                description={book.description}/>
            )
        }
        return null;
    }

    const displayNew = (book) => {
        if(book.newBook || book.popularBook === "true") {
            return (
                <BookLess key={book.id}
                id={book.id}
                name={book.name}
                author={book.author}
                price={book.price}
                releaseDate={book.releaseDate}
                imagePath={book.imagePath}
                description={book.description}/>
            )
        }
        
        return null;
    }

    return (
        <div>
            <h1 className="hot-books-header">Popular Books</h1>
            <div id="hot-books">
                {books.map((book)=>(
                    displayPopular(book)
                ))}
            </div>
            <h1 className="hot-books-header">New Books</h1>
            <div id="hot-books">
                {books.map((book)=>(
                    displayNew(book)
                ))}
            </div>
        </div>
    );
};

export default BookListLess;