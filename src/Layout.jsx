import {Outlet, Link} from "react-router-dom";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";
import Toggle from "./componets/Toggle"
import { useState } from "react";
import "./css/Layout.css";

const Layout = () => {

    const [toggleShow, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        console.log("clicked");
        setMenuOpen(!toggleShow);
    };

    return (
        <div id="content">
            <div id="header">
                <Header />
                <a onClick={toggleMenu} href="#">
                    <Toggle onclick={toggleMenu} />
                </a>
                <div id="layoutCenter" className={toggleShow?"":"hidden"}>
                    <Navigation />
                </div>
            </div>

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout