import React from "react";
import { Link } from "react-router-dom";
import People from "../component/People.jsx"
import Planets from "../component/Planets.jsx"
import Vehicles from "../component/Vehicles.jsx"

const AllStarWars = () => {
    return(
        <div className="text-center w-100 py-3 px-5">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                <h4 id="Characters">Characters</h4>
                <div className="overflow-x-auto">
                    <People/>
                </div>
                <h4 id="Planets">Planets</h4>
                <div className="overflow-x-auto">
                    <Planets/>
                </div>
                <h4 id="Vehicles">Vehicles</h4>
                <div className="overflow-x-auto">
                    <Vehicles/>
                </div>
            </div>

            {/* <div className="row">
                <div className="col text-start">
                    <img className="w-25 rounded-3" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg" alt="" />
                </div>
                <div className="col text-end pb-3">
                    <Favorites/>
                </div>
            </div>
            Overflow
            <label>Characters</label>
            <div className="overflow-x-auto">
                
            </div>
            <label>Planets</label>
            <div className="overflow-x-auto">
                
            </div>
            <label>Vehicles</label>
            <div className="overflow-x-auto">
                
            </div>*/}
        </div> 
    );
};

export default AllStarWars