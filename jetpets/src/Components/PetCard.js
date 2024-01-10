import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./PetCard.css";

function PetCard({nome,id}){
    
    return (
        <div className="col-2">
            <Link to={`/pet/${id}`} className='link-card'>
            <div className="card text-center">
                <img src="https://via.placeholder.com/150x150" className="card-img-top mx-auto" alt="Card Image"  />
                <div className="card-body">
                    <h3 className="card-title">{nome}</h3>
                </div>
            </div>
            </Link>
        </div>
    );
}


export default PetCard;
