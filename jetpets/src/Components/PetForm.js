import React from 'react';
import { Form, Button, Container, FormGroup, FormControl, Dropdown,DropdownButton,FormControlGroup,Radio,RadioGroup } from 'react-bootstrap';
import SubmitButton from './SubmitButton';
import '../Styles/Pet/PetForm.css';

function PetForm({handleChange,handleSubmit,initialFormState}){

    const [formData, setFormData] = React.useState(initialFormState);

    
    return(<>
        <Container>
            <Form onSubmit={(e) => handleSubmit(e, formData)}>
                <div className='row'>
                    <div className='col-4'>
                        <FormGroup controlId="formBasicNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder={initialFormState.nome ? initialFormState.nome : 'Informe o nome do pet'}
                            />
                        </FormGroup>
                        <FormGroup controlId="formBasicEspecie">
                            <Form.Label>Especie</Form.Label>
                            <Dropdown onSelect={(eventKey) => handleChange({ name: 'especie', value: eventKey })}>
                                <DropdownButton title={initialFormState.especie ? initialFormState.especie : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Canino">Canino</Dropdown.Item>
                                    <Dropdown.Item eventKey="Felino">Felino</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicSexo">
                            <Form.Label>Sexo</Form.Label>
                            <Dropdown onSelect={(eventKey) => handleChange({ name: 'sexo', value: eventKey })}>
                                <DropdownButton title={initialFormState.sexo ? initialFormState.sexo : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Macho">Macho</Dropdown.Item>
                                    <Dropdown.Item eventKey="Fêmea">Fêmea</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicPorte">
                            <Form.Label>Porte</Form.Label>
                            <Dropdown onSelect={(eventKey) => handleChange({ name: 'porte', value: eventKey })}>
                                <DropdownButton title={initialFormState.porte ? initialFormState.porte : 'Selecione'} id="dropdown-basic" variant="dark">
                                    <Dropdown.Item eventKey="Pequeno">Pequeno</Dropdown.Item>
                                    <Dropdown.Item eventKey="Medio">Medio</Dropdown.Item>
                                    <Dropdown.Item eventKey="Grande">Grande</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup controlId="formBasicIdade">
                            <Form.Label>Idade</Form.Label>
                            <Dropdown onSelect={(eventKey) => handleChange({ name: 'idade', value: eventKey })}>
                                <DropdownButton title={initialFormState.idade ? initialFormState.idade : 'Selecione'} id="dropdown-basic" variant="dark">
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
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxCastrado"
                                    value="Castrado"
                                    name="cuidados_veterinarios[]"
                                    checked={formData.cuidados_veterinarios?.includes('Castrado')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxCastrado">Castrado</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxVacinado"
                                    value="Vacinado"
                                    name="cuidados_veterinarios[]"
                                    checked={formData.cuidados_veterinarios?.includes('Vacinado')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxVacinado">Vacinado</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxVermifugado"
                                    value="Vermifugado"
                                    name="cuidados_veterinarios[]"
                                    checked={formData.cuidados_veterinarios?.includes('Vermifugado')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxVermifugado">Vermifugado</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxCuidadosEspeciais"
                                    value="CuidadosEspeciais"
                                    name="cuidados_veterinarios[]"
                                    checked={formData.cuidados_veterinarios?.includes('CuidadosEspeciais')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxCuidadosEspeciais">Precisa de cuidados especiais</label>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="formBasicTemperamentos">
                            <Form.Label>Temperamentos</Form.Label>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxAgressivo"
                                    value="Agressivo"
                                    name="temperamentos[]"
                                    checked={formData.temperamentos?.includes('Agressivo')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxAgressivo">Agressivo</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxArisco"
                                    value="Arisco"
                                    name="temperamentos[]"
                                    checked={formData.temperamentos?.includes('Arisco')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxArisco">Arisco</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxBrincalhao"
                                    value="Brincalhao"
                                    name="temperamentos[]"
                                    checked={formData.temperamentos?.includes('Brincalhao')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxBrincalhao">Brincalhao</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxCalmo"
                                    value="Calmo"
                                    name="temperamentos[]"
                                    checked={formData.temperamentos?.includes('Calmo')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxCalmo">Calmo</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxCarente"
                                    value="Carente"
                                    name="temperamentos[]"
                                    checked={formData.temperamentos?.includes('Carente')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxCarente">Carente</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxDocil"
                                    value="Docil"
                                    name="temperamentos[]"
                                    checked={formData.temperamentos?.includes('Docil')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxDocil">Docil</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxIndependente"
                                    value="Independente"
                                    name="temperamentos[]"
                                    checked={formData.temperamentos?.includes('Independente')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxIndependente">Independente</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxSociavel"
                                    value="Sociavel"
                                    name="temperamentos[]"
                                    checked={formData.temperamentos?.includes('Sociavel')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxSociavel">Sociavel</label>
                            </div>
                        </FormGroup>
                    </div>
                    <div className='col-4'>
                        <FormGroup controlId="formBasicViveBemEm">
                            <Form.Label>Vive bem em</Form.Label>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxApartamento"
                                    value="Apartamento"
                                    name="vive_bem_em[]"
                                    checked={formData.vive_bem_em?.includes('Apartamento')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxApartamento">Apartamento</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxApartamentoTelado"
                                    value="ApartamentoTelado"
                                    name="vive_bem_em[]"
                                    checked={formData.vive_bem_em?.includes('ApartamentoTelado')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxApartamentoTelado">Apartamento telado</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxCasa"
                                    value="CasaComQuintalFechado"
                                    name="vive_bem_em[]"
                                    checked={formData.vive_bem_em?.includes('CasaComQuintalFechado')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxCasa">Casa com quintal fechado</label>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="formBasicSociavelCom">
                            <Form.Label>Sociavel com</Form.Label>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxCachorros"
                                    value="Cachorros"
                                    name="sociavel_com[]"
                                    checked={formData.sociavel_com?.includes('Cachorros')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxCachorros">Cachorros</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxGatos"
                                    value="Gatos"
                                    name="sociavel_com[]"
                                    checked={formData.sociavel_com?.includes('Gatos')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxGatos">Gatos</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxCriancas"
                                    value="Criancas"
                                    name="sociavel_com[]"
                                    checked={formData.sociavel_com?.includes('Criancas')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxCriancas">Crianças</label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="boxPessoasDesconhecidas"
                                    value="PessoasDesconhecidas"
                                    name="sociavel_com[]"
                                    checked={formData.sociavel_com?.includes('PessoasDesconhecidas')}
                                    onChange={handleChange}
                                />
                                <label class="form-check-label" for="boxPessoasDesconhecidas">Pessoas desconhecidas</label>
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
                            value={formData.images}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <FormGroup controlId="formBasicDescricao">
                        <Form.Label>Descricao</Form.Label>
                        <FormControl
                            as="textarea"
                            value={formData.descricao} 
                            onChange={handleChange} 
                            placeholder={initialFormState.descricao ? initialFormState.descricao : 'Informe uma descriçao/historico do pet'}
                            rows={4}
                        />                   
                    </FormGroup>
                    <SubmitButton texto="Enviar" path='/'/>        
                </div>
                
            </Form>
        </Container>
    </>);
    
}

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