import "./../css/SearchForm.css";

const SearchForm = () => {
    return (
        <div id="searchForm">
            <p>Book name or ISBN</p>
            <p>
                <label for="txt">Please Enter:</label>
                <input type="text" id="txt" />
            </p>
            <p>Author name</p>
            <p>
                <label for="txt">Please Enter:</label>
                <input type="text" id="txt" />
            </p>
            <p>Genre</p>
            <p>
                <label for="txt">Please Enter:</label>
                <input type="text" id="txt" />
            </p>
            <p>Date published</p>
            <p>
                <label for="txt">Please Enter:</label>
                <input type="text" id="txt" />
            </p>
        </div>
    );
};

export default SearchForm;