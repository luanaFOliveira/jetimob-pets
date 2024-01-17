import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import PetForm from '../../Components/PetForm';
import { useNavigate } from 'react-router-dom';

function EditPet() {

    const params = useParams();
    const id = params.id;

    const [pet_temp,setPetTemp] = useState([]);

    const getPetTemp = async () =>{

        await fetch(`http://127.0.0.1:8000/api/pets/${id}`, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            mode: 'cors' 
        })
            .then(response => response.json())
            .then(pet_temp => setPetTemp(pet_temp))
            .catch(error => {
            console.error(error);
            });
    }
    getPetTemp();

    const initialFormState = {
        nome: pet_temp.nome,
        especie: pet_temp.especie,
        sexo: pet_temp.sexo,
        porte: pet_temp.porte,
        idade: pet_temp.idade,
        cuidados_veterinarios: pet_temp.cuidados_veterinarios,
        temperamento: pet_temp.temperamento,
        vive_bem_em: pet_temp.vive_bem_em,
        sociavel_com: pet_temp.sociavel_com,
        descricao: pet_temp.descricao,
    }

    return(<>
        <NavBar />
        <div className='container-new-pet'>
            <h1>Editar Pet</h1>
            <PetForm initialFormState={initialFormState} metodo="PUT"/>
        </div>
    </>);
}

export default EditPet;
