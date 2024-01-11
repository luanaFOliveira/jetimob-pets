import React from 'react';
import { Form, Button, Container, FormGroup, FormControl, Dropdown,DropdownButton } from 'react-bootstrap';

function PetForm({handleChange,handleSubmit,initialFormState}){

    const [formData, setFormData] = React.useState(initialFormState);

    const handleDropdownChange = (selectedOption) => {
        setFormData({ ...formData, selectedOption });
    };
    const [selectedFiles, setSelectedFiles] = React.useState([]);

    const handleFileChange = (e) => {
        setSelectedFiles([...e.target.files]);
    };

    const handleUpload = () => {
        console.log('Arquivos selecionados:', selectedFiles);
    };

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
                
                <Button variant="dark" type="submit">Enviar</Button>
            </Form>
        </Container>
    </>);
}

export default PetForm;