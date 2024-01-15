import React from 'react';
import { Form, Button, Container, FormGroup, FormControl, Dropdown,DropdownButton } from 'react-bootstrap';
import '../Styles/User/UserForm.css';
import SubmitButton from './SubmitButton';

function UserForm({handleChange,handleSubmit,initialFormState}){

    const [formData, setFormData] = React.useState(initialFormState);

    
    return(<>
        <Container>
            <Form onSubmit={(e) => handleSubmit(e, formData)}>
                <FormGroup controlId="formBasicNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={(e) => handleChange(e, setFormData)}
                        placeholder={initialFormState.nome ? initialFormState.nome : 'Informe o seu nome'}
                    />
                </FormGroup>
                <FormGroup controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e, setFormData)}
                        placeholder={initialFormState.email ? initialFormState.email : 'Informe o seu email'}
                    />
                </FormGroup>
                <FormGroup controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={(e) => handleChange(e, setFormData)}
                        placeholder={initialFormState.senha ? initialFormState.senha : 'Informe a sua senha'}
                    />
                </FormGroup>
                <SubmitButton texto="Enviar" path='/'/>
            </Form>
        </Container>
    
    </>);

}

export default UserForm;