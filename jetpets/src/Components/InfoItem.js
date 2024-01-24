import React from 'react';
import '../Styles/Pet/InfoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw,faHourglass,faMarsAndVenus,faBone,faStethoscope,faHouse,faDog,faShareNodes } from '@fortawesome/free-solid-svg-icons'; 

function InfoItem({pet}) {
//ver sobre colocar o display grid
    return(<>
      <div class="card-grid-container">
        <div class="card-info" >
          <FontAwesomeIcon icon={faPaw} size="3x" color='white' />
          <h7 class="card-title">Especie</h7>
          <div class="card-body">
            <h5 class="card-text">{pet.specie.name}</h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faHourglass} size="3x" color='white' />
          <h7 class="card-title">Idade</h7>
          <div class="card-body">
            <h5 class="card-text">{pet.age_range.name}</h5>
          </div>
        </div>
        <div class="card-info" >
          <FontAwesomeIcon icon={faMarsAndVenus} size="3x" color='white' />
          <h7 class="card-title">Sexo</h7>
          <div class="card-body">
            <h5 class="card-text">{pet.sex.name}</h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faDog} size="3x" color='white' />
          <h7 class="card-title">Porte</h7>
          <div class="card-body">
            <h5 class="card-text">{pet.size.name}</h5>
          </div>
        </div>
        <div class="card-info" >
          <FontAwesomeIcon icon={faStethoscope} size="3x" color='white' />
          <h7 class="card-title">Cuidados Veterinarios</h7>
          <div class="card-body">
          <h5 class="card-text">
              {pet.veterinary_care.map((veterinary_care) => veterinary_care.name).join(', ')}
            </h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faBone} size="3x" color='white' />
          <h7 class="card-title">Temperamentos</h7>
          <div class="card-body">
            <h5 class="card-text">
              {pet.tempers.map((temper) => temper.name).join(', ')}
            </h5>
          </div>
        </div>
        <div class="card-info" >
          <FontAwesomeIcon icon={faHouse} size="3x" color='white' />
          <h7 class="card-title">Vive bem em</h7>
          <div class="card-body">
          <h5 class="card-text">
              {pet.live_well_in.map((live_well_in) => live_well_in.name).join(', ')}
            </h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faShareNodes} size="3x" color='white' />
          <h7 class="card-title">Sociavel com</h7>
          <div class="card-body">
          <h5 class="card-text">
              {pet.sociable_with.map((sociable_with) => sociable_with.name).join(', ')}
            </h5>
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
