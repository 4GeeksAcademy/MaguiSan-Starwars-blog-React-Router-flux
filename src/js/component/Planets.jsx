import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
    const imgStyle = {
        width: '400px',
        height: '200px',
        objectFit: 'cover',
    };
    const {store, actions} = useContext(Context);
    // console.log(store.planetsList);

    useEffect(()=>{
        actions.getPlanetsList()
    },[])

	return (
		<div className="d-flex flex-row overflow-auto">
            {
                store.planetsList.map((item, index) => (
                    <div key={index} className="card my-2 me-2" style={{ minWidth: "400px"}}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." style={imgStyle}/>
                        <div className="card-body text-start">
                            <h5 className="card-title text-center fw-bold fs-4">{item.name}</h5>
                            {/* <p className="card-text"><b>Gender:</b> {item.gender}</p>
                            <p className="card-text"><b>Hair color:</b> {item.hair_color}</p>
                            <p className="card-text"><b>Eye color:</b> {item.eye_color}</p> */}
                            <div className="d-flex justify-content-between">
                                <Link to={`/DetailsPlanets/${item.uid}`}>
                                    <a href="#" className="btn btn-outline-dark fw-bold">Learn more!</a>
                                </Link>
                                <a href="#" className="btn btn-outline-warning"><i className="fa-solid fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                ))
            }
		</div>
	);
};

export default Planets;