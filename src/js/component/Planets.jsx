import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
    // const {store, actions} = useContext(Context);

    // console.log(store.planetsList)

	return (
		<div>
            <Link to="/sectionStarWars">
                {/* info del vehiculo especifico en un boton */}
            </Link>

		</div>
	);
};

export default Planets;