import "./../css/Browse.css";
import BookListExtra from "./../componets/BookListExtra"
const Browse = () => {
    return (
        <div>
            <h1 className="BrowseHeader">Browse</h1>
            <div id="browse">
                <BookListExtra num="15"/>
            </div>
        </div>
    );
};

export default Browse;