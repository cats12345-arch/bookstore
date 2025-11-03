import "./../css/Home.css";
import HomePicture from "./../componets/HomePicture";
import HomeInStore from "../componets/HomeInStore";
import HomeInfo from "../componets/Homeinfo";
import WeeklyBookclub from "../componets/WeeklyBookclub";
import SlideShow from "../componets/SlideShow";

const Home = () => {
    return (
        <div id="home">
            <HomePicture />
            <HomeInStore />
            <HomeInfo />
            <h1 id="home-h">Top books of 2025</h1>
            <SlideShow />
            <WeeklyBookclub />
        </div>
    );
};

export default Home;