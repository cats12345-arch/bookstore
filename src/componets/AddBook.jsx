import "../css/AddBook.css";
import React, {useState} from "react";

const AddBook = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const [popularbook, setPopularBook] = useState(false);
    const [newBook, setNewBook] = useState(false);

    const changePopoularBook = () => {
        setPopularBook(!popularbook);
    }

    const changeNewBook = () => {
        setNewBook(!newBook);
    }

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    }

    const addtoServer = async(event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch("https://server-bookstore-28pn.onrender.com/api/books", {
            "method":"POST",
            "body":formData
        })

        if(response.status == 200) {
            setResult("Book added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateBooks(await response.json());
        } else {
            setResult("Error adding book");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addtoServer}>
                        <h3>Create New Book</h3>

                        <div className="cols">
                            <p className="left">
                                <label htmlFor="name">Book Name:</label>
                                <label htmlFor="author">Author:</label>
                                <label htmlFor="price">Price:</label>
                                <label htmlFor="releaseDate">Release Date:</label>
                                <label htmlFor="description">Description:</label>
                                <label htmlFor="newBook">Is this a new book?</label>
                                <label htmlFor="popularBook">Is this a popular book?</label>
                            </p>

                            <p className="right">
                                <input type="text" id="name" name="name" required min="1"></input>
                                <input type="text" id="author" name="author" min="1" required></input>
                                <input type="number" step="0.01" id="price" name="price" min="0" required></input>
                                <input type="text" id="releaseDate" name="releaseDate" min="1" required></input>
                                <input type="text" id="description" name="description" min="1" required></input>
                                <input type="hidden" id="newBook" name="newBook" value={newBook}></input>
                                <input type="checkbox" id="newBook" onChange={changeNewBook}></input>
                                <input type="hidden" name="popularBook" value={popularbook}></input>
                                <input type="checkbox" id="popularBook" onChange={changePopoularBook}></input>
                            </p>
                        </div>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBook;