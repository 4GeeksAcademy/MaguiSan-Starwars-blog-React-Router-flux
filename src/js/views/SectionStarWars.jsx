import React from "react";
import { Link } from "react-router-dom";

const Planets = () => {

	return (
		<div>
            <Link to="/sectionStarWars">
                <button className="btn btn-success">
                    {/* info del planeta especifico en un boton */}
                </button>
            </Link>
		</div>
	);
};

export default Planets;