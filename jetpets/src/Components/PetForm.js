import React, { useState, useEffect } from 'react';
import { Form, Button, Container, FormGroup, FormControl, Dropdown,DropdownButton,FormControlGroup,Radio,RadioGroup } from 'react-bootstrap';
import SubmitButton from './SubmitButton';
import '../Styles/Pet/PetForm.css';
import { useNavigate } from 'react-router-dom';

function PetForm({initialFormState,metodo}){
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [especie, setEspecie] = useState('');
    const [sexo, setSexo] = useState('');
    const [porte, setPorte] = useState('');
    const [idade, setIdade] = useState('');
    const [cuidados_veterinarios, setSelectedCuidados] = useState([]);
    const [temperamentos, setTemperamentos] = useState([]);
    const [vive_bem_em, setViveBemEm] = useState([]);
    const [sociavel_com, setSociavelCom] = useState([]);
    const [images, setImages] = useState([]);

    const formData = new FormData();
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    
//'Authorization': `Bearer ${token}`,
    const handleSubmit = async (event) => {
        event.preventDefault();
        formData.append('nome', nome);
        formData.append('descricao', descricao);
        formData.append('especie', especie);
        formData.append('sexo', sexo);
        formData.append('porte', porte);
        formData.append('idade', idade);
        for (const cuidado of cuidados_veterinarios) {
            formData.append('cuidados_veterinarios', cuidado);
        }
          
        for (const temperamento of temperamentos) {
            formData.append('temperamentos', temperamento);
        }
          
        for (const lugar of vive_bem_em) {
            formData.append('vive_bem_em', lugar);
        }
          
        for (const animal of sociavel_com) {
            formData.append('sociavel_com', animal);
        }
          
        for (const image of images) {
            formData.append('images', image);
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/pets`, {
                method: metodo,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify(formData),
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

        if (checkboxId === 'cuidados') {
            const updatedOptions = checked
              ? [...cuidados_veterinarios, value]
              : cuidados_veterinarios.filter((option) => option !== value);
      
              setSelectedCuidados(updatedOptions);
          } else if (checkboxId === 'temperamentos') {
            const updatedOptions = checked
              ? [...temperamentos, value]
              : temperamentos.filter((option) => option !== value);
      
              setTemperamentos(updatedOptions);
          }
          else if (checkboxId === 'vive_bem_em') {
            const updatedOptions = checked
              ? [...vive_bem_em, value]
              : vive_bem_em.filter((option) => option !== value);
      
              setViveBemEm(updatedOptions);
          }
          else if (checkboxId === 'sociavel_com') {
            const updatedOptions = checked
              ? [...sociavel_com, value]
              : sociavel_com.filter((option) => option !== value);
      
              setSociavelCom(updatedOptions);
          }
    };



    return(<>
        <Container>
            <Form onSubmit={(e) => handleSubmit(e, formData)}>
                <div className='row'>
                    <div className='col-4'>
                        <input type="hidden" name="_token" value={csrfToken} />
                        <FormGroup controlId="formBasicNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={setNome}
                                placeholder={initialFormState.nome ? initialFormState.nome : 'Informe o nome do pet'}
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicEspecie">
                            <Form.Label>Especie</Form.Label>
                            <Dropdown onSelect={setEspecie}>
                                <DropdownButton title={especie ? especie : (  initialFormState.especie ? initialFormState.especie : 'Selecione')} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Canino">Canino</Dropdown.Item>
                                    <Dropdown.Item eventKey="Felino">Felino</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicSexo">
                            <Form.Label>Sexo</Form.Label>
                            <Dropdown onSelect={setSexo}>
                                <DropdownButton title={sexo ? sexo : (  initialFormState.sexo ? initialFormState.sexo : 'Selecione')} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Macho">Macho</Dropdown.Item>
                                    <Dropdown.Item eventKey="Fêmea">Fêmea</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicPorte">
                            <Form.Label>Porte</Form.Label>
                            <Dropdown onSelect={setPorte}>
                                <DropdownButton title={porte ? porte : (  initialFormState.porte ? initialFormState.porte : 'Selecione')} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Pequeno">Pequeno</Dropdown.Item>
                                    <Dropdown.Item eventKey="Medio">Medio</Dropdown.Item>
                                    <Dropdown.Item eventKey="Grande">Grande</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicIdade">
                            <Form.Label>Idade</Form.Label>
                            <Dropdown onSelect={setIdade}>
                                <DropdownButton title={idade ? idade : (  initialFormState.idade ? initialFormState.idade : 'Selecione')} id="dropdown-basic" variant="dark">
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
                                    checked={cuidados_veterinarios.includes("Castrado")}
                                    onChange={(e) => handleChangeCheckBox(e, 'cuidados')}
                                />
                                <label className="form-check-label" >Castrado</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Vacinado"
                                    checked={cuidados_veterinarios.includes('Vacinado')}
                                    onChange={(e) => handleChangeCheckBox(e, 'cuidados')}
                                />
                                <label className="form-check-label" >Vacinado</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Vermifugado"
                                    checked={cuidados_veterinarios.includes('Vermifugado')}
                                    onChange={(e) => handleChangeCheckBox(e, 'cuidados')}
                                />
                                <label className="form-check-label" >Vermifugado</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Cuidados Especiais"
                                    checked={cuidados_veterinarios.includes('Cuidados Especiais')}
                                    onChange={(e) => handleChangeCheckBox(e, 'cuidados')}
                                />
                                <label className="form-check-label" >Precisa de cuidados especiais</label>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="formBasicTemperamentos">
                            <Form.Label>Temperamentos</Form.Label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Agressivo"
                                    checked={temperamentos.includes('Agressivo')}
                                    onChange={(e) => handleChangeCheckBox(e, 'temperamentos')}
                                />
                                <label className="form-check-label" >Agressivo</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Arisco"
                                    checked={temperamentos.includes('Arisco')}
                                    onChange={(e) => handleChangeCheckBox(e, 'temperamentos')}
                                />
                                <label className="form-check-label" >Arisco</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Brincalhao"
                                    checked={temperamentos.includes('Brincalhao')}
                                    onChange={(e) => handleChangeCheckBox(e, 'temperamentos')}
                                />
                                <label className="form-check-label" >Brincalhao</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Calmo"
                                    checked={temperamentos.includes('Calmo')}
                                    onChange={(e) => handleChangeCheckBox(e, 'temperamentos')}
                                />
                                <label className="form-check-label" >Calmo</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Carente"
                                    checked={temperamentos.includes('Carente')}
                                    onChange={(e) => handleChangeCheckBox(e, 'temperamentos')}
                                />
                                <label className="form-check-label" >Carente</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Docil"
                                    checked={temperamentos.includes('Docil')}
                                    onChange={(e) => handleChangeCheckBox(e, 'temperamentos')}
                                />
                                <label className="form-check-label" >Docil</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Independente"
                                    checked={temperamentos.includes('Independente')}
                                    onChange={(e) => handleChangeCheckBox(e, 'temperamentos')}
                                />
                                <label className="form-check-label" >Independente</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Sociavel"
                                    checked={temperamentos.includes('Sociavel')}
                                    onChange={(e) => handleChangeCheckBox(e, 'temperamentos')}
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
                                    checked={vive_bem_em.includes('Apartamento')}
                                    onChange={(e) => handleChangeCheckBox(e, 'vive_bem_em')}
                                />
                                <label className="form-check-label" >Apartamento</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Apartamento Telado"
                                    checked={vive_bem_em.includes('Apartamento Telado')}
                                    onChange={(e) => handleChangeCheckBox(e, 'vive_bem_em')}
                                />
                                <label className="form-check-label" >Apartamento telado</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Casa Com Quintal Fechado"
                                    checked={vive_bem_em.includes('Casa Com Quintal Fechado')}
                                    onChange={(e) => handleChangeCheckBox(e, 'vive_bem_em')}
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
                                    checked={sociavel_com.includes('Cachorros')}
                                    onChange={(e) => handleChangeCheckBox(e, 'sociavel_com')}
                                />
                                <label className="form-check-label" >Cachorros</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Gatos"
                                    checked={sociavel_com.includes('Gatos')}
                                    onChange={(e) => handleChangeCheckBox(e, 'sociavel_com')}
                                />
                                <label className="form-check-label" >Gatos</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Criancas"
                                    checked={sociavel_com.includes('Criancas')}
                                    onChange={(e) => handleChangeCheckBox(e, 'sociavel_com')}
                                />
                                <label className="form-check-label" >Crianças</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Pessoas Desconhecidas"
                                    checked={sociavel_com.includes('Pessoas Desconhecidas')}
                                    onChange={(e) => handleChangeCheckBox(e, 'sociavel_com')}
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
                    <FormGroup controlId="formBasicDescricao">
                        <Form.Label>Descricao</Form.Label>
                        <FormControl
                            as="textarea"
                            onChange={setDescricao} 
                            placeholder={initialFormState.descricao ? initialFormState.descricao : 'Informe uma descriçao/historico do pet'}
                            rows={4}
                        />                   
                    </FormGroup>
                    <button type="submit" className="btn btn-primary">Submit</button>
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
                                <DropdownButton title={initialFormState.vive_bem_em ? initialFormState.vive_bem_em : 'Selecione'} id="dropdown-basic" variant="dark">
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