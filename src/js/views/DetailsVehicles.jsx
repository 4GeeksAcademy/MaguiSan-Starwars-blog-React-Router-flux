import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DetailsVehicles = () => {
    const{store, actions} = useContext(Context)
    console.log("Soy un nuevo vehiculo", store.vehicleId);
    const params = useParams();
    // console.log(params);
    
    useEffect(()=>{
        actions.getVehicleId(params.theid)
    },[])
	return (
        <div className="py-3 px-5 w-100">
            <div className="card p-3" style={{maxwidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} className="img-fluid rounded" alt="..."/>
                    </div>
                    <div className="col-md-8 ps-5 pe-4">
                        <div className="card-body p-0">
                            <h5 className="card-title display-1">{store.vehicleId.properties?.name}</h5>
                            {/* <p className="card-text">{store.vehicleId.description}</p> */}
                            <p>Consectetur adipisicing elit. Aliquam quae, distinctio molestiae nam iusto inventore ad maxime corrupti consequatur quos cum pariatur facere, nemo doloribus. Soluta saepe eveniet eaque facere amet dolore, inventore ipsam. Est labore veritatis laborum deleniti rerum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, qui eum! Quasi quo exercitationem natus tenetur perspiciatis temporibus quam amet excepturi nesciunt doloribus porro soluta, eius tempore aperiam? Error eaque nostrum quibusdam quisquam, atque animi ullam quo vel at doloribus sit sed quaerat doloremque quidem, repellat sint explicabo qui in.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="row pt-2 border-top border-2 border-danger mt-3 text-center">
                    <div className="col">
                        <p><b>Name</b></p>
                        <p>{store.vehicleId.properties?.name}</p>
                    </div>
                    <div className="col">
                        <p><b>Model</b></p>
                        <p>{store.vehicleId.properties?.model}</p>
                    </div>
                    <div className="col">
                        <p><b>Length</b></p>
                        <p>{store.vehicleId.properties?.length}</p>
                    </div>
                    <div className="col">
                        <p><b>Cargo Capacity</b></p>
                        <p>{store.vehicleId.properties?.cargo_capacity}</p>
                    </div>
                    <div className="col">
                        <p><b>Vehicle Class</b></p>
                        <p>{store.vehicleId.properties?.vehicle_class}</p>
                    </div>
                    <div className="col">
                        <p><b>Max Atmosphering Speed</b></p>
                        <p>{store.vehicleId.properties?.max_atmosphering_speed}</p>
                    </div>
                    <div className="col">
                        <p><b>Crew</b></p>
                        <p>{store.vehicleId.properties?.crew}</p>
                    </div>
                    <div className="col">
                        <p><b>Passengers</b></p>
                        <p>{store.vehicleId.properties?.passengers}</p>
                    </div>
                </div> */}
            </div>
		</div>
	);
};

export default DetailsVehicles;