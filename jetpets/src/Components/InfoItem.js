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
            <h5 class="card-text">{pet.especie}</h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faHourglass} size="3x" color='white' />
          <h7 class="card-title">Idade</h7>
          <div class="card-body">
            <h5 class="card-text">{pet.idade}</h5>
          </div>
        </div>
        <div class="card-info" >
          <FontAwesomeIcon icon={faMarsAndVenus} size="3x" color='white' />
          <h7 class="card-title">Sexo</h7>
          <div class="card-body">
            <h5 class="card-text">{pet.sexo}</h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faDog} size="3x" color='white' />
          <h7 class="card-title">Porte</h7>
          <div class="card-body">
            <h5 class="card-text">{pet.porte}</h5>
          </div>
        </div>
        <div class="card-info" >
          <FontAwesomeIcon icon={faStethoscope} size="3x" color='white' />
          <h7 class="card-title">Cuidados Veterinarios</h7>
          <div class="card-body">
          <h5 class="card-text">
              {pet.cuidados_veterinarios.map((cuidados_veterinarios) => cuidados_veterinarios.nome).join(', ')}
            </h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faBone} size="3x" color='white' />
          <h7 class="card-title">Temperamentos</h7>
          <div class="card-body">
            <h5 class="card-text">
              {pet.temperamentos.map((temperamento) => temperamento.nome).join(', ')}
            </h5>
          </div>
        </div>
        <div class="card-info" >
          <FontAwesomeIcon icon={faHouse} size="3x" color='white' />
          <h7 class="card-title">Vive bem em</h7>
          <div class="card-body">
          <h5 class="card-text">
              {pet.vive_bem_em.map((vive_bem_em) => vive_bem_em.nome).join(', ')}
            </h5>
          </div>
        </div>
        <div class="card-info">
          <FontAwesomeIcon icon={faShareNodes} size="3x" color='white' />
          <h7 class="card-title">Sociavel com</h7>
          <div class="card-body">
          <h5 class="card-text">
              {pet.sociavel_com.map((sociavel_com) => sociavel_com.nome).join(', ')}
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
