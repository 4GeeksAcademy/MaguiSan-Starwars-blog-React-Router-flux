import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import style from "./styles/People.module.css"

const People = () => {
    const { store, actions } = useContext(Context);
    // console.log(store.peopleList)

    useEffect(() => {
        actions.getPeopleList();
        actions.getPeopleCard()
    }, [])
    return (
        <div className="d-flex flex-row overflow-auto">
            {
                store.peopleList.map((item, index) => (
                    <div key={index} className="card my-2 me-2" style={{ minWidth: "400px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className={`card-img-top ${style.img}`} alt="..." />
                        <div className="card-body text-start">
                            <h5 className="card-title text-center fw-bold fs-4">{item.name}</h5>
                            <p className="card-text"><b>Gender:</b> {store.peopleCard[index]?.gender}</p>
                            <p className="card-text"><b>Hair color:</b> {store.peopleCard[index]?.hair_color}</p>
                            <p className="card-text"><b>Eye color:</b> {store.peopleCard[index]?.eye_color}</p>
                            <div className="d-flex justify-content-between">
                                <Link to={`/DetailsCharacters/${item.uid}`}>
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

export default People;