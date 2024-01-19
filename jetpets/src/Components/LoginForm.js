import React from 'react';
import { Form, Button, Container, FormGroup, FormControl, Dropdown,DropdownButton } from 'react-bootstrap';
import '../Styles/User/UserForm.css';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function LoginForm(){

    const [formData, setFormData] = React.useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'X-CSRF-TOKEN': csrfToken,
                },
                withCredentials: true,
            });  
            const cookies = response.headers['set-cookie'];
            if (cookies) {
                cookies.forEach((cookie) => {
                    Cookies.set(cookie.split(';')[0], cookie);
                });
            }
            navigate('/');
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    //<SubmitButton texto="Entrar" path=''/>
    return(<>
        <Container>
            <h1 className='title-text'>Bem vinde ao PetLar</h1>

            <Form onSubmit={(e) => handleSubmit(e, formData)}>
                <FormGroup controlId="formBasicEmail">
                    <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                    <Form.Control
                        style={{ borderColor: 'black'}}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder='Informe o seu email'
                    />
                </FormGroup>
                <FormGroup controlId="formBasicPassword">
                    <Form.Label style={{ color: 'white' }}>Senha</Form.Label>
                    <Form.Control
                        style={{ borderColor: 'black'}}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder='Informe a sua senha'
                    />
                </FormGroup>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </Container>
    
    </>);

}

export default LoginForm;