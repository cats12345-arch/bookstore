import "./../css/WeeklyBookclub.css";
import couchPeople from "./../images/bookClub.jpg";

const WeeklyBookclub = () => {
    return (
        <div id="weekly-bookclub">
            <div id="weekly-bookclub-img">
                <img src={couchPeople} alt="two people sitting on a couch" />
            </div>
            <div>
                <h2>Weekly Book Club</h2>
                <p>Join us every week for our friendly and engaging Book Club, where readers come together to explore a new book, share ideas, and enjoy great conversation. Whether you`re a lifelong book lover or just getting into reading, our group welcomes all levels of readers and all kinds of perspectives.</p>
                <p>Each week, we read and discuss a selected title from a range of genres—fiction, non-fiction, mystery, memoir, and more. Meetings are casual and relaxed, with a focus on thoughtful discussion and building community through a shared love of books.</p>
                <p>Come for the books, stay for the conversation. We look forward to reading with you!</p>
            </div>
        </div>
    )
}

export default WeeklyBookclub;