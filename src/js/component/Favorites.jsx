import React from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
    return(
        <div className="btn-group">
            <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
                {/* index+1 del array */}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                {/* MAP del array de favoritos */}
                <li><a className="dropdown-item" href="#">Menu item <i class="fa-solid fa-trash-can"></i></a></li>
                <li><a className="dropdown-item" href="#">Menu item <i class="fa-solid fa-trash-can"></i></a></li>
                <li><a className="dropdown-item" href="#">Menu item <i class="fa-solid fa-trash-can"></i></a></li>
            </ul>
        </div>
    );
};

export default Favorites