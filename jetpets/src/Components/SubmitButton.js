import React from 'react';
import { Form, Button, Container, FormGroup, FormControl, Dropdown,DropdownButton } from 'react-bootstrap';
import '../Styles/User/UserForm.css';
import { Link } from 'react-router-dom';


function SubmitButton({texto,path,onClick}){
    return(<>
        <div className='container-button'>
            <Button className='submit-button' type="submit"><Link className='link-button' to={path} onClick={onClick} >{texto}</Link></Button>
        </div>
    </>);

}

export default SubmitButton;