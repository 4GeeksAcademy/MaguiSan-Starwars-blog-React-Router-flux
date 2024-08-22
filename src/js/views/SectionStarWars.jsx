import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Planets = () => {
    const{store, actions} = useContext(Context)

    console.log("Soy un nuevo personaje", store.peopleId);
    
    const params = useParams();
    // console.log(params);
    
    useEffect(()=>{
        //si le doy un valor aqui ejm.4...este ejecutara la funcion fetch concatenada con el id=4
        actions.getPeopleId(params.theid)
    },[])
	return (
        <div className="py-3 px-5 w-100">
            <div className="card p-3" style={{maxwidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="img-fluid rounded" alt="..."/>
                    </div>
                    <div className="col-md-8 ps-5 pe-4">
                        <div className="card-body p-0">
                        {/* {store.demo[params.theid].title} */}
                            <h5 className="card-title display-1">{store.peopleId[params.theid].name}</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, mollitia.</p>
                        </div>
                    </div>
                    <div className="col-12 pt-3">
                        {/* map con las propiedades del personaje */}
                        <div className="col border-top border-2 border-danger m-3">
                            <p><b>Name</b></p>
                            <p>Luke skywalker</p>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Planets;