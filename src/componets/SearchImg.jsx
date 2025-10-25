import "./../css/SearchImg.css";
import bookStore from "./../images/bookStore.webp";

const SearchImg = () => {
    return (
        <div id="search-img">
            <img src={bookStore} alt="Book store image" />
        </div>
    );
};

export default SearchImg;