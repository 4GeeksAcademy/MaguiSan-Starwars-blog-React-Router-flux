import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import style from "./styles/Vehicles.module.css"

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    // console.log(store.vehiclesList);

    useEffect(() => {
        actions.getVehiclesList()
        actions.getVehiclesCard()
    }, [])
    return (
        <div className="d-flex flex-row overflow-auto">
            {
                store.vehiclesList.map((item, index) => (
                    <div key={index} className="card my-2 me-2" style={{ minWidth: "400px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className={`card-img-top ${style.img}`} alt="..."/>
                        <div className="card-body text-start">
                            <h5 className="card-title text-center fw-bold fs-4">{item.name}</h5>
                            <p className="card-text"><b>Vehicle Class:</b> {store.vehiclesCard[index]?.vehicle_class}</p>
                            <p className="card-text"><b>Manufacturer:</b> {store.vehiclesCard[index]?.manufacturer}</p>
                            <p className="card-text"><b>Cost in Credits:</b> {store.vehiclesCard[index]?.cost_in_credits}</p>
                            <div className="d-flex justify-content-between">
                                <Link to={`/DetailsVehicles/${item.uid}`}>
                                    <a href="#" className="btn btn-outline-dark fw-bold">Learn more!</a>
                                </Link>
                                <a href="#" className="btn btn-outline-warning" onClick={() => actions.addFavorites(item.name)}><i className="fa-solid fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Vehicles;