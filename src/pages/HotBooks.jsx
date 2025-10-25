import "./../css/HotBooks.css";
import BookLess from "./../componets/BookLess"

const HotBooks = () => {
    return (
        <div>
            <h1 className="hot-books-header">Popular Books</h1>
            <div id="hot-books">
                <BookLess name="Crying in H Mart" description="Crying in H Mart by Michelle Zauner is a heartfelt memoir that explores identity, grief, and the powerful bond between a mother and daughter. Zauner, best known as the lead singer of Japanese Breakfast, reflects on her experiences growing up as a Korean American, the challenges of navigating cultural identity, and the profound loss of her mother to cancer."/>
                <BookLess name="Harry Potter and the Sorcer's Stone" description="Harry Potter and the Sorcerer`s Stone by J.K. Rowling is the first book in the famous fantasy series about a young boy who discovers he is a wizard. On his eleventh birthday, Harry learns of his magical heritage and attends Hogwarts School of Witchcraft and Wizardry, where he makes friends, learns spells, and begins to uncover the truth about his past." />
                <BookLess name="Intermezzo" description="Intermezzo is a literary novel about grief, family, and complicated love in modern Ireland. After the death of their father, two very different brothers—Peter, a thirty-something Dublin lawyer, and Ivan, a twenty-two-year-old former chess prodigy—find their lives diverging in unexpected ways. Peter struggles with insomnia, guilt, and tangled relations." />
            </div>
            <h1 className="hot-books-header">New Books</h1>
            <div id="hot-books">
                <BookLess name="The Hundred Years' war on Palestine" description="The Hundred Years` War on Palestine is a historical account that reframes the Israeli-Palestinian conflict as a century-long colonial struggle rather than a clash between two equal sides. Written by Palestinian-American historian Rashid Khalidi, the book blends scholarship with personal family history to trace six major turning points." />
                <BookLess name="The Lioness of Boston" description="The Lioness of Boston is a richly imagined work of historical fiction that tells the life story of Isabella Stewart Gardner, a bold and unconventional art collector who became a major influence in American art and society. Born in New York but transplanted to Boston by marriage, Isabella struggles early on to navigate high society`s rigid expectations." />
                <BookLess name="A Little Frog's Guide to Self-Care" description="The Little Frog`s Guide to Self-Care is a charming and uplifting mini-book that mixes cute artwork, positive affirmations, and gentle life lessons to help readers practice kindness toward themselves. Created by the artist Maybell Eequay, it features the “little frog”—a sweet, fashion-forward frog with a mushroom hat and fabulous footwear" />
            </div>
        </div>
    );
};

export default HotBooks;