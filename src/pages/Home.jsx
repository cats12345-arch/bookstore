import "./../css/Home.css";
import HomePicture from "./../componets/HomePicture";
import HomeInStore from "../componets/HomeInStore";
import HomeInfo from "../componets/Homeinfo";
import WeeklyBookclub from "../componets/WeeklyBookclub";

const Home = () => {
    return (
        <div id="home">
            <HomePicture />
            <HomeInStore />
            <HomeInfo />
            <WeeklyBookclub />
        </div>
    );
};

export default Home;