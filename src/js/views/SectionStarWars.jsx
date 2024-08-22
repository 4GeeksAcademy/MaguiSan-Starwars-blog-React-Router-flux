import React from "react";

const Planets = () => {

	return (
        <div className="py-3 px-5 w-100">
            <div className="card p-3" style={{maxwidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="img-fluid rounded" alt="..."/>
                    </div>
                    <div className="col-md-8 ps-5 pe-4">
                        <div className="card-body p-0">
                            <h5 className="card-title display-1">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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