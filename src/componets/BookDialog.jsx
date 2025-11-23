import "./../css/BookDialog.css";
import React, { useState } from "react";
import BookDeleteDialog from "./BookDeleteDialog";
import BookDetailsDialog from "./BookDetailsDialog";
import BookEditDialog from "./BookEditDialog";

const BookDialog = (props) => {

    const[showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    }

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    }

    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeHouseDialog}
                    >
                        &times;
                    </span>
                    <div id="house-dialog-content">
                        {showContent === "details" ? (
                            <BookDetailsDialog
                                showEdit={showEdit}
                                showDelete={showDelete}
                                name={props.name}
                                author={props.author}
                                price={props.price}
                                releaseDate={props.releaseDate}
                                imagePath={props.imagePath}
                                description={props.description} />
                        ) : showContent === "edit" ? (
                            <BookEditDialog
                                id={props.id}
                                name={props.name}
                                author={props.author}
                                price={props.price}
                                releaseDate={props.releaseDate}
                                imagePath={props.imagePath}
                                description={props.description} 
                                closeBookDetails = {props.closeBookDetails} />
                        ):(
                            <BookDeleteDialog 
                                id={props._id}
                                name={props.name}
                                closeBookDetails = {props.closeBookDetails}
                                hideHouse={props.hideHouse} />
                            )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDialog;