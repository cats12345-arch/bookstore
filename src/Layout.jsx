import {Outlet, Link} from "react-router-dom";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import "./css/Layout.css";

const Layout = () => {
    return (
        <div id="content">
            <div id="header">
                <Header />
                <Navigation />
            </div>

            <Outlet />
        </div>
    );
};

export default Layout