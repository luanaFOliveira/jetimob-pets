import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import UserForm from '../../Components/UserForm';
import '../../Styles/User/NewUser.css';
import { useNavigate } from 'react-router-dom';

function EditUser() {

    const params = useParams();
    const id = params.id;

    const [user_temp,setUserTemp] = useState([]);

    const getUserTemp = async () =>{

        await fetch(`http://127.0.0.1:8000/api/user/${id}`, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            mode: 'cors' 
        })
            .then(response => response.json())
            .then(user_temp => setUserTemp(user_temp))
            .catch(error => {
            console.error(error);
            });
    }
    getUserTemp();

    const initialFormState = {
        nome: user_temp.nome,
        email: user_temp.email,
        password: user_temp.password,
    };

    const [user, setUser] = useState(initialFormState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        await fetch(`http://127.0.0.1:8000/api/user`, {
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        });
        setUser(initialFormState);
        navigate('/');
        
    }

    return(<>
        <NavBar />
        <div className='container-new-user'>
            <h1 className='custom-title'>Editar usuario</h1>
            <UserForm initialFormState={initialFormState} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    </>);

}

export default EditUser;