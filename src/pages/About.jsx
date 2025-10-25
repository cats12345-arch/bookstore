import "./../css/About.css";
import AboutImg from "../componets/AboutImg";
import AboutDescription from "../componets/AboutDescription";

const About = () => {
    return (
        <div id="about">
            <h1 className="about-header">About the Owners</h1>
            <div id="about-gallery">
                <AboutImg name="Maya Lin" description="The creative heart of the team, Maya loves curating eclectic and rare books. She has a background in literature and often hosts author events and reading clubs. Always carrying a notebook, she`s passionate about fostering a welcoming space for readers of all ages." />
                <AboutImg name="Ethan Carter" description="The business-savvy co-owner, Ethan manages the store`s operations, finances, and marketing. With a knack for spotting trends in book sales, he ensures the store remains profitable while supporting local authors and community initiatives." />
                <AboutImg name="Leila Ortiz" description="The community connector, Leila organizes workshops, book clubs, and storytelling sessions for children. She has a background in education and a deep love for literature that inspires people to engage with reading in creative ways." />
            </div>
            <AboutDescription />
        </div>
    );
};

export default About;