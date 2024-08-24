import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import style from "./styles/Planets.module.css"

const Planets = () => {
    const {store, actions} = useContext(Context);
    // console.log(store.planetsList);

    useEffect(()=>{
        actions.getPlanetsList()
        actions.getPlanetsCard()
    },[])
	return (
		<div className="d-flex flex-row overflow-auto">
            {
                store.planetsList.map((item, index) => (
                    <div key={index} className="card my-2 me-2" style={{ minWidth: "400px"}}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className={`card-img-top ${style.img}`} alt="..."/>
                        <div className="card-body text-start">
                            <h5 className="card-title text-center fw-bold fs-4">{item.name}</h5>
                            <p className="card-text"><b>Population:</b> {store.planetsCard[index]?.population}</p>
                            <p className="card-text"><b>Terrain:</b> {store.planetsCard[index]?.terrain}</p>
                            <p className="card-text"><b>Gravity:</b> {store.planetsCard[index]?.gravity}</p>
                            <div className="d-flex justify-content-between">
                                <Link to={`/DetailsPlanets/${item.uid}`}>
                                    <a href="#" className="btn btn-outline-dark fw-bold">Learn more!</a>
                                </Link>
                                <a href="#" className="btn btn-outline-warning" onClick={()=>actions.addFavorites(item.name)}><i className="fa-solid fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                ))
            }
		</div>
	);
};

export default Planets;