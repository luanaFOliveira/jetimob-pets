import React from 'react';
import { Form, Button, Container, FormGroup, FormControl, Dropdown,DropdownButton } from 'react-bootstrap';
import '../Styles/User/UserForm.css';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';

function UserForm({initialFormState}){

    const [formData, setFormData] = React.useState(initialFormState);
    

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
       
        await fetch(`http://127.0.0.1:8000/api/register`, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        });
        setFormData(initialFormState);
        navigate('/');
        
    }

    
    return(<>
        <Container>
            <Form onSubmit={(e) => handleSubmit(e, formData)}>
                <FormGroup controlId="formBasicNome">
                    <Form.Label style={{ color: 'white' }}>Nome</Form.Label>
                    <Form.Control
                        style={{ borderColor: 'black'}}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder='Informe o seu nome'
                    />
                </FormGroup>
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
                
                <SubmitButton texto="Enviar" path='/'/>
            </Form>
        </Container>
    
    </>);

}

export default UserForm;