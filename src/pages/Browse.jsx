import "./../css/Browse.css";
import BookExtra from "./../componets/BookExtra";

const Browse = () => {
    return (
        <div>
            <h1 className="BrowseHeader">Browse</h1>
            <div id="browse">
                <BookExtra bookName="Lord of the Rings" bookAuthor="J.R.R Tolkien" price="15.99" date="7/29/1954" description="The Lord of the Rings by J.R.R. Tolkien is an epic fantasy trilogy that follows the journey of unlikely heroes in a struggle against overwhelming darkness. At its center is Frodo Baggins, a humble hobbit entrusted with the One Ring, a powerful artifact created by the dark lord Sauron to control all life in Middle-earth."/>
                <BookExtra bookName="Crying in H Mart" bookAuthor="Michelle Zauner" price="14.99" date="4/20/2021" description="Crying in H Mart by Michelle Zauner is a heartfelt memoir that explores identity, grief, and the powerful bond between a mother and daughter. Zauner, best known as the lead singer of Japanese Breakfast, reflects on her experiences growing up as a Korean American, the challenges of navigating cultural identity, and the profound loss of her mother to cancer."/>
                <BookExtra bookName="Charlotte's Web" bookAuthor="E.B White" price="8.99" date="3/1/1973" description="Charlotte`s Web is a classic children`s novel by E.B. White that tells the heartwarming story of friendship, loyalty, and the cycle of life. It follows Wilbur, a runt pig who fears being slaughtered, and Charlotte, a wise and caring barn spider who becomes his protector. Through her clever weaving of words into her web—like “Some Pig” and “Terrific”—Charlotte convinces humans that Wilbur is extraordinary and worth saving."/>
            </div>
        </div>
    );
};

export default Browse;