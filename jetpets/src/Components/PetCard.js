import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Pet/PetCard.css";

function PetCard({nome,id,image}){
   
    if(image == null){
        var file_path = "https://via.placeholder.com/100x100"
    }else{
        var file_path = `http://localhost:8000/storage/${image.file_path}`;
    }

    return (
    <div className='card-container'>
        <div className="card-content">
            <Link to={`/pet/${id}`} className='link-card'>
            <div className="card text-center">
                <img src={file_path} className="card-img-top mx-auto" alt="Card Image"  />
                <div className="card-body">
                    <h3 className="card-title">{nome}</h3>
                </div>
            </div>
            </Link>
        </div>
    </div>
        
    );
}


export default PetCard;
