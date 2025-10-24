import {Outlet, Link} from "react-router-dom";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";
import "./css/Layout.css";

const Layout = () => {
    return (
        <div id="content">
            <div id="header">
                <Header />
                <Navigation />
            </div>

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout