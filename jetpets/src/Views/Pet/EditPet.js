import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import PetForm from '../../Components/PetForm';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function EditPet() {

    const params = useParams();
    const id = params.id;

    const [pet_temp,setPetTemp] = useState({});
    const [loading, setLoading] = useState(true);

    const getPetTemp = async () =>{
        setLoading(true);

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
        })
        .finally(() => setLoading(false));
    }
    useEffect(() => {
        getPetTemp();
        // eslint-disable-next-line
    }, []);

    console.log(pet_temp);
    const initialFormState = {
        name: pet_temp.name,
        specie: pet_temp.specie.name,
        sex: pet_temp.sex.name,
        size: pet_temp.size.name,
        age_range: pet_temp.age_range.name,
        veterinary_care: pet_temp.veterinary_care,
        tempers: pet_temp.tempers,
        live_well_in: pet_temp.live_well_in,
        sociable_with: pet_temp.sociable_with,
        description: pet_temp.description,
    }

    return(<>
        <NavBar />
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        {loading && <CircularProgress />}
        </Box>
        <div className='container-new-pet'>
            <h1>Editar Pet</h1>
            <PetForm initialFormState={initialFormState} metodo="PUT"/>
        </div>
    </>);
}

export default EditPet;
