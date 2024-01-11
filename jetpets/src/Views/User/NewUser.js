import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import UserForm from '../../Components/UserForm';
import '../../Styles/User/NewUser.css';
import { useNavigate } from 'react-router-dom';

function NewUser() {

    const initialFormState = { nome: '',email:'', password: '' };

    const [user, setUser] = useState(initialFormState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        await fetch(`http://127.0.0.1:8000/api/user`, {
        method:'POST',
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
            <h1 className='custom-title'>Cadastre-se</h1>
            <UserForm initialFormState={initialFormState} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    </>);

}

export default NewUser;