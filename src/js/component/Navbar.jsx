import React from "react";
import { Link } from "react-router-dom";
import Favorites from "../component/Favorites.jsx";

const Navbar = () => {

	return (
        <nav className="nav d-flex flex-column align-items-center flex-sm-row bg-black px-3" id="navbar-example2">
            <div className="w-25 ps-5">
                <Link to="/">
                    <img className="w-50 rounded-3" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg" alt="" />
                </Link>
            </div>
            <a className="flex-sm-fill text-sm-center nav-link text-white fs-5" href="#Characters">Characters</a>
            <a className="flex-sm-fill text-sm-center nav-link text-white fs-5" href="#Planets">Planets</a>
            <a className="flex-sm-fill text-sm-center nav-link text-white fs-5" href="#Vehicles">Vehicles</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">
                <Favorites />
            </a>
        </nav>
	);
};

export default Navbar;