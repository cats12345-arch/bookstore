import "./../css/AboutImg.css";
import face from "./../images/woman.jpg";

const AboutImg = (props) => {
    return (
        <div id="about-img">
            <div id="about-relative">
                <img src={face} alt="A picture of a woman" />
                <div id="about-absolute">
                    <p>{props.name}</p>
                </div>
            </div>
            <p>{props.description}</p>
        </div>
    );
};

export default AboutImg;