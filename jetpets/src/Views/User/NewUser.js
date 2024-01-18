import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import UserForm from '../../Components/UserForm';
import '../../Styles/User/NewUser.css';
import { useNavigate } from 'react-router-dom';

function NewUser() {

    const initialFormState = { name: '',email:'', password: '' };

    return(<>
        <NavBar />
        <div className='container-new-user'>
            <h1 className='custom-title'>Cadastre-se</h1>
            <UserForm initialFormState={initialFormState} metodo="POST" />
        </div>
    </>);

}

export default NewUser;