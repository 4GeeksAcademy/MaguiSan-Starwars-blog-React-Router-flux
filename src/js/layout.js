import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import AllStarWars from "./views/AllStarWars.jsx";
import SectionStarWars from "./views/SectionStarWars.jsx"
import DetailsPlanets from "./views/DetailsPlanets.jsx";
import DetailsVehicles from "./views/DetailsVehicles.jsx";
import Navbar from "./component/Navbar.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar/>
				<Routes>
					<Route path="/" element={<AllStarWars/>} />
					<Route path="/SectionStarWars/:theid" element={<SectionStarWars/>} />
					<Route path="/DetailsPlanets/:theid" element={<DetailsPlanets/>} />
					<Route path="/DetailsVehicles/:theid" element={<DetailsVehicles/>} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
