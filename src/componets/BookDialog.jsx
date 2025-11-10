import "./../css/BookDialog.css";

const BookDialog = (props) => {
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeBookDetails}
                    >
                        &times;
                    </span>
                    <div class="columns">
                        <img src={"http://localhost:3001/images/"+props.imagePath} alt="book" />
                        <div id="dialog-content">
                            <h3>{props.name}</h3>
                            <p>By: {props.author}</p>
                            <p>{props.price}$</p>
                            <p>Released: {props.releaseDate}</p>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDialog;