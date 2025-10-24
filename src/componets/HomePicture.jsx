import "./../css/HomePicture.css";
import logo from "../images/homeBanner.jpg";

const HomePicture = () => {
    return (
        <div id="home-picture">
            <img id="homeBanner" src={logo} alt="Home Banner" />
            <div className="absolute">
                <p className="bold">Hotest books of 2025</p>
            </div>
        </div>
    )
}

export default HomePicture;