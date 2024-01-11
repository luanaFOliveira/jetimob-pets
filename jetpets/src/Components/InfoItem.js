import React from 'react';
import '../Styles/Pet/InfoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons'; 

function InfoItem({campo1,valor1,campo2,valor2}) {

    return(<>
      <div class="card-deck">
        <div class="card-info" >
          <FontAwesomeIcon icon={faPaw} size="3x" color='white' />
          <div class="card-body">
            <h7 class="card-title">{campo1}</h7>
            <h5 class="card-text">{valor1}</h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faPaw} size="3x" color='white' />
          <div class="card-body">
            <h7 class="card-title">{campo2}</h7>
            <h5 class="card-text">{valor2}</h5>
          </div>
        </div>
      </div>
      
    </>);

}
/*
<div className="circle-icon">
        <FontAwesomeIcon icon={faPaw} size="3x" />
        <p>{texto}</p>
      </div>
*/

export default InfoItem;
