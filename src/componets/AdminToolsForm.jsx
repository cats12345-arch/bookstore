import "./../css/AdminToolsForm.css";

const AdminToolsForm = () => {
    return (
        <div id="admin-tools-form">
            <p>Add/Remove Books</p>
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
            <div>
                <p class="button">Add/Remove</p>
            </div>
        </div>
    );
};

export default AdminToolsForm;