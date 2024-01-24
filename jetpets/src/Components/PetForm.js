import React, { useState, useEffect } from 'react';
import { Form, Button, Container, FormGroup, FormControl, Dropdown,DropdownButton,FormControlGroup,Radio,RadioGroup } from 'react-bootstrap';
import SubmitButton from './SubmitButton';
import '../Styles/Pet/PetForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PetForm({initialFormState,metodo}){
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [specie, setSpecie] = useState('');
    const [sex, setSex] = useState('');
    const [size, setSize] = useState('');
    const [age_range, setAgeRange] = useState('');
    const [veterinary_care, setVeterinaryCare] = useState([]);
    const [tempers, setTempers] = useState([]);
    const [live_well_in, setLiveWellIn] = useState([]);
    const [sociable_with, setSociableWith] = useState([]);
    const [images, setImages] = useState([]);

    const formData = new FormData();
    
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        const csrfToken = decodeURI(document.querySelector('meta[name="csrf-token"]').content);
        setCsrfToken(csrfToken);
        console.log(csrfToken);
    }, []);
    
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('specie', specie);
        formData.append('sex', sex);
        formData.append('size', size);
        formData.append('age_range', age_range);
        for (const cuidado of veterinary_care) {
            formData.append('veterinary_care', cuidado);
        }
          
        for (const temperamento of tempers) {
            formData.append('tempers', temperamento);
        }
          
        for (const lugar of live_well_in) {
            formData.append('live_well_in', lugar);
        }
          
        for (const animal of sociable_with) {
            formData.append('sociable_with', animal);
        }
          
        for (const image of images) {
            formData.append('images', image);
        }
       
       
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/pets`, {
                method:metodo,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
      
          if (!response.ok) {
            throw new Error('API request failed');
          }
      
          navigate('/');
        } catch (error) {
          console.error('Error submitting pet data:', error);
        }
        
    };


    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => {
            const uniqueFiles = files.filter((file) =>
                !prevImages.some((prevImage) => prevImage.name === file.name)
            );
            return [...prevImages, ...uniqueFiles];
        });
    };

    const handleChangeCheckBox = (event,checkboxId) => {
        const { value, checked } = event.target;

        if (checkboxId === 'veterinary_care') {
            const updatedOptions = checked
              ? [...veterinary_care, value]
              : veterinary_care.filter((option) => option !== value);
      
              setVeterinaryCare(updatedOptions);
          } else if (checkboxId === 'tempers') {
            const updatedOptions = checked
              ? [...tempers, value]
              : tempers.filter((option) => option !== value);
      
              setTempers(updatedOptions);
          }
          else if (checkboxId === 'live_well_in') {
            const updatedOptions = checked
              ? [...live_well_in, value]
              : live_well_in.filter((option) => option !== value);
      
              setLiveWellIn(updatedOptions);
          }
          else if (checkboxId === 'sociable_with') {
            const updatedOptions = checked
              ? [...sociable_with, value]
              : sociable_with.filter((option) => option !== value);
      
              setSociableWith(updatedOptions);
          }
    };



    return(<>
        <Container>
            <Form onSubmit={(e) => handleSubmit(e, formData)}>
                <div className='row'>
                    <div className='col-4'>
                        <input type="hidden" name="_token" value={csrfToken} />
                        <FormGroup controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={setName}
                                placeholder={initialFormState.name ? initialFormState.name : 'Informe o nome do pet'}
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicSpecie">
                            <Form.Label>Especie</Form.Label>
                            <Dropdown onSelect={setSpecie}>
                                <DropdownButton title={specie ? specie : (  initialFormState.specie ? initialFormState.specie : 'Selecione')} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Canino">Canino</Dropdown.Item>
                                    <Dropdown.Item eventKey="Felino">Felino</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicSex">
                            <Form.Label>Sexo</Form.Label>
                            <Dropdown onSelect={setSex}>
                                <DropdownButton title={sex ? sex : (  initialFormState.sex ? initialFormState.sex : 'Selecione')} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Macho">Macho</Dropdown.Item>
                                    <Dropdown.Item eventKey="Fêmea">Fêmea</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicSize">
                            <Form.Label>Tamanho</Form.Label>
                            <Dropdown onSelect={setSize}>
                                <DropdownButton title={size ? size : (  initialFormState.size ? initialFormState.size : 'Selecione')} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Pequeno">Pequeno</Dropdown.Item>
                                    <Dropdown.Item eventKey="Medio">Medio</Dropdown.Item>
                                    <Dropdown.Item eventKey="Grande">Grande</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicAgeRange">
                            <Form.Label>Idade</Form.Label>
                            <Dropdown onSelect={setAgeRange}>
                                <DropdownButton title={age_range ? age_range : (  initialFormState.age_range ? initialFormState.age_range : 'Selecione')} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Filhote">Filhote</Dropdown.Item>
                                    <Dropdown.Item eventKey="Adulto">Adulto</Dropdown.Item>
                                    <Dropdown.Item eventKey="Idoso">Idoso</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                    <div className='col-4'>
                        <FormGroup controlId="formBasicCuidadosVeterinarios">
                            <Form.Label>Cuidados Veterinarios</Form.Label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Castrado"
                                    checked={veterinary_care.includes("Castrado")}
                                    onChange={(e) => handleChangeCheckBox(e, 'veterinary_care')}
                                />
                                <label className="form-check-label" >Castrado</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Vacinado"
                                    checked={veterinary_care.includes('Vacinado')}
                                    onChange={(e) => handleChangeCheckBox(e, 'veterinary_care')}
                                />
                                <label className="form-check-label" >Vacinado</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Vermifugado"
                                    checked={veterinary_care.includes('Vermifugado')}
                                    onChange={(e) => handleChangeCheckBox(e, 'veterinary_care')}
                                />
                                <label className="form-check-label" >Vermifugado</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Cuidados Especiais"
                                    checked={veterinary_care.includes('Cuidados Especiais')}
                                    onChange={(e) => handleChangeCheckBox(e, 'veterinary_care')}
                                />
                                <label className="form-check-label" >Precisa de cuidados especiais</label>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="formBasicTempers">
                            <Form.Label>Temperamentos</Form.Label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Agressivo"
                                    checked={tempers.includes('Agressivo')}
                                    onChange={(e) => handleChangeCheckBox(e, 'tempers')}
                                />
                                <label className="form-check-label" >Agressivo</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Arisco"
                                    checked={tempers.includes('Arisco')}
                                    onChange={(e) => handleChangeCheckBox(e, 'tempers')}
                                />
                                <label className="form-check-label" >Arisco</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Brincalhao"
                                    checked={tempers.includes('Brincalhao')}
                                    onChange={(e) => handleChangeCheckBox(e, 'tempers')}
                                />
                                <label className="form-check-label" >Brincalhao</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Calmo"
                                    checked={tempers.includes('Calmo')}
                                    onChange={(e) => handleChangeCheckBox(e, 'tempers')}
                                />
                                <label className="form-check-label" >Calmo</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Carente"
                                    checked={tempers.includes('Carente')}
                                    onChange={(e) => handleChangeCheckBox(e, 'tempers')}
                                />
                                <label className="form-check-label" >Carente</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Docil"
                                    checked={tempers.includes('Docil')}
                                    onChange={(e) => handleChangeCheckBox(e, 'tempers')}
                                />
                                <label className="form-check-label" >Docil</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Independente"
                                    checked={tempers.includes('Independente')}
                                    onChange={(e) => handleChangeCheckBox(e, 'tempers')}
                                />
                                <label className="form-check-label" >Independente</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Sociavel"
                                    checked={tempers.includes('Sociavel')}
                                    onChange={(e) => handleChangeCheckBox(e, 'tempers')}
                                />
                                <label className="form-check-label" >Sociavel</label>
                            </div>
                        </FormGroup>
                    </div>
                    <div className='col-4'>
                        <FormGroup controlId="formBasicViveBemEm">
                            <Form.Label>Vive bem em</Form.Label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Apartamento"
                                    checked={live_well_in.includes('Apartamento')}
                                    onChange={(e) => handleChangeCheckBox(e, 'live_well_in')}
                                />
                                <label className="form-check-label" >Apartamento</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Apartamento Telado"
                                    checked={live_well_in.includes('Apartamento Telado')}
                                    onChange={(e) => handleChangeCheckBox(e, 'live_well_in')}
                                />
                                <label className="form-check-label" >Apartamento telado</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Casa Com Quintal Fechado"
                                    checked={live_well_in.includes('Casa Com Quintal Fechado')}
                                    onChange={(e) => handleChangeCheckBox(e, 'live_well_in')}
                                />
                                <label className="form-check-label" >Casa com quintal fechado</label>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="formBasicSociavelCom">
                            <Form.Label>Sociavel com</Form.Label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Cachorros"
                                    checked={sociable_with.includes('Cachorros')}
                                    onChange={(e) => handleChangeCheckBox(e, 'sociable_with')}
                                />
                                <label className="form-check-label" >Cachorros</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Gatos"
                                    checked={sociable_with.includes('Gatos')}
                                    onChange={(e) => handleChangeCheckBox(e, 'sociable_with')}
                                />
                                <label className="form-check-label" >Gatos</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Criancas"
                                    checked={sociable_with.includes('Criancas')}
                                    onChange={(e) => handleChangeCheckBox(e, 'sociable_with')}
                                />
                                <label className="form-check-label" >Crianças</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Pessoas Desconhecidas"
                                    checked={sociable_with.includes('Pessoas Desconhecidas')}
                                    onChange={(e) => handleChangeCheckBox(e, 'sociable_with')}
                                />
                                <label className="form-check-label" >Pessoas desconhecidas</label>
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <div className='row'>
                    <Form.Group controlId="formImages" className="mb-3">
                        <Form.Label>Adicione fotos</Form.Label>
                        <Form.Control
                            type="file"
                            multiple
                            onChange={handleFileChange}
                        />
                    </Form.Group>
                    <FormGroup controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <FormControl
                            as="textarea"
                            onChange={setDescription} 
                            placeholder={initialFormState.description ? initialFormState.description : 'Informe uma descriçao/historico do pet'}
                            rows={4}
                        />                   
                    </FormGroup>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </Form>
        </Container>
    </>);
    
}
//                    <SubmitButton texto="Enviar" path='/'/>        

export default PetForm;

/*
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
                        placeholder={initialFormState.nome ? initialFormState.nome : 'Informe o nome do pet'}
                    />
                </FormGroup>
                <div className='row'>
                    <div className='col'>
                        <FormGroup controlId="formBasicEspecie">
                            <Form.Label>Especie</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <DropdownButton title={initialFormState.especie ? initialFormState.especie : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Canino">Canino</Dropdown.Item>
                                    <Dropdown.Item eventKey="Felino">Felino</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                    <div className='col'>
                        <FormGroup controlId="formBasicSexo">
                            <Form.Label>Sexo</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <DropdownButton title={initialFormState.sexo ? initialFormState.sexo : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Macho">Macho</Dropdown.Item>
                                    <Dropdown.Item eventKey="Fêmea">Fêmea</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                    <div className='col'>
                        <FormGroup controlId="formBasicPorte">
                            <Form.Label>Porte</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <DropdownButton title={initialFormState.porte ? initialFormState.porte : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Pequeno">Pequeno</Dropdown.Item>
                                    <Dropdown.Item eventKey="Medio">Medio</Dropdown.Item>
                                    <Dropdown.Item eventKey="Grande">Grande</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                    <div className='col'>
                        <FormGroup controlId="formBasicIdade">
                            <Form.Label>Idade</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <DropdownButton title={initialFormState.idade ? initialFormState.idade : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Filhote">Filhote</Dropdown.Item>
                                    <Dropdown.Item eventKey="Adulto">Adulto</Dropdown.Item>
                                    <Dropdown.Item eventKey="Idoso">Idoso</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <FormGroup controlId="formBasicCuidadosVeterinarios">
                        <Form.Label>Cuidados Veterinarios</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <DropdownButton title={initialFormState.cuidados_veterinarios ? initialFormState.cuidados_veterinarios : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Castrado">Castrado</Dropdown.Item>
                                    <Dropdown.Item eventKey="Vacinado">Vacinado</Dropdown.Item>
                                    <Dropdown.Item eventKey="Vermifugado">Vermifugado</Dropdown.Item>
                                    <Dropdown.Item eventKey="PrecisaDeCuidadosEspeciais">Precisa de cuidados veterinarios</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                    <div className='col'>
                        <FormGroup controlId="formBasicTemperamento">
                            <Form.Label>Temperamento</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <DropdownButton title={initialFormState.temperamento ? initialFormState.temperamento : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Agressivo">Agressivo</Dropdown.Item>
                                    <Dropdown.Item eventKey="Arisco">Arisco</Dropdown.Item>
                                    <Dropdown.Item eventKey="Calmo">Calmo</Dropdown.Item>
                                    <Dropdown.Item eventKey="Dócil">Dócil</Dropdown.Item>
                                    <Dropdown.Item eventKey="Brincalhao">Brincalhao</Dropdown.Item>
                                    <Dropdown.Item eventKey="Carente">Carente</Dropdown.Item>
                                    <Dropdown.Item eventKey="Independente">Independente</Dropdown.Item>
                                    <Dropdown.Item eventKey="Sociavel">Sociavel</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                    <div className='col'>
                        <FormGroup controlId="formBasicViveBemEm">
                            <Form.Label>Vive bem em</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <DropdownButton title={initialFormState.live_well_in ? initialFormState.live_well_in : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Apartamento">Apartamento</Dropdown.Item>
                                    <Dropdown.Item eventKey="ApartamentoTelado">Apartamento telado</Dropdown.Item>
                                    <Dropdown.Item eventKey="CasaComQuintalFechado">Casa com quintal fechado</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                    <div className='col'>
                        <FormGroup controlId="formBasicSociavelCom">
                            <Form.Label>Sociavel com</Form.Label>
                            <Dropdown onSelect={handleDropdownChange}>
                                <DropdownButton title={initialFormState.sociavel_com ? initialFormState.sociavel_com : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Cachorros">Cachorros</Dropdown.Item>
                                    <Dropdown.Item eventKey="Gatos">Gatos</Dropdown.Item>
                                    <Dropdown.Item eventKey="Criancas">Crianças</Dropdown.Item>
                                    <Dropdown.Item eventKey="PessoasDesconhecidas">Pessoas desconhecidas</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                    </div>
                    
                </div>
                <Form.Group controlId="formImages" className="mb-3">
                    <Form.Label>Adicione fotos</Form.Label>
                    <Form.Control
                        type="file"
                        multiple
                        onChange={handleFileChange}
                    />
                </Form.Group>
                <FormGroup controlId="formBasicDescricao">
                    <Form.Label>Descricao</Form.Label>
                    <FormControl as="textarea" placeholder={initialFormState.descricao ? initialFormState.descricao : 'Informe uma descriçao/historico do pet'} rows={4} />
                </FormGroup>
                <SubmitButton texto="Enviar" path='/'/>                
            </Form>
        </Container>
    </>);
*/