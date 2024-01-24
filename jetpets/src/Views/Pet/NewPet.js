import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import '../../Styles/Pet/NewPet.css';
import PetForm from '../../Components/PetForm';
import { useNavigate } from 'react-router-dom';

function NewPet() {
/*
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log(token);

    useEffect(() => {
        if (token === null || token === undefined) {
          navigate('/home');
        }
    }, []);
  */  

    const initialFormState = {
        name: '',
        specie: '',
        sex: '',
        size: '',
        age_range: '',
        veterinary_care: [],
        tempers: [],
        live_well_in: [],
        sociable_with: [],
        description: '',
        images: [],
    }

    return(<>
        <NavBar />
        <div className='container-new-pet'>
            <h1>Cadastre seu pet</h1>
            <PetForm initialFormState={initialFormState} metodo="POST"/>
        </div>
    </>);
}

export default NewPet;
/*
    const handleChange = (event) => {
        const { name, value } = event.target
        setPet({ ...pet, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        await fetch(`http://127.0.0.1:8000/api/pets`, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
        });
        setPet(initialFormState);
        navigate('/');
        
    }
    */
/**
<div className='container-new-pet'>
            <form className='align-items-center'>
                <div className='row'>
                    <div className='col-12'>
                        <label className='input-label'>Nome</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div class="col-md-3">
                        <label for="inputEspecie" className='input-label'>Especie</label>
                        <select class="form-control" id="inputEspecie">
                            <option>Canino</option>
                            <option>Felino</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputSexo" className='input-label'>Sexo</label>
                        <select class="form-control" id="inputSexo">
                            <option>Macho</option>
                            <option>Femea</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputPorte" className='input-label'>Porte</label>
                        <select class="form-control" id="inputPorte">
                            <option>Pequeno</option>
                            <option>Medio</option>
                            <option>Grande</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputIdade" className='input-label'>Idade</label>
                        <select class="form-control" id="inputIdade">
                            <option>Filhote</option>
                            <option>Adulto</option>
                            <option>Idoso</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-md-3">
                        <label for="inputCuidadosVeterinarios" className='input-label'>Cuidados Veterinarios</label>
                        <select class="form-control" id="inputCuidadosVeterinarios">
                            <option>Castrado</option>
                            <option>Vacinado</option>
                            <option>Vermifugado</option>
                            <option>Precisa de cuidados especiais</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputTemperamento" className='input-label'>Temperamento</label>
                        <select class="form-control" id="inputTemperamento">
                            <option>Agressivo</option>
                            <option>Arisco</option>
                            <option>Brincalhao</option>
                            <option>Calmo</option>
                            <option>Carente</option>
                            <option>Docil</option>
                            <option>Independente</option>
                            <option>Sociavel</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputViveBemEm" className='input-label'>Vive bem em</label>
                        <select class="form-control" id="inputViveBemEm">
                            <option>Apartamento</option>
                            <option>Apartamento Telado</option>
                            <option>Casa com quintal fechado</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputSociavel" className='input-label'>Sociavel com</label>
                        <select class="form-control" id="inputSociavel">
                            <option>Cachorros</option>
                            <option>Gatos</option>
                            <option>Crianças</option>
                            <option>Pessoas desconhecidas</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div class="form-group col-md-12">
                        <label for="inputDescricao" className='input-label'>Descrição/Historico</label>
                        <textarea class="form-control" id="inputDescricao" rows="4"></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div class="form-group">
                        <label for="inputImages" className='input-label'>Adicione fotos</label>
                    </div>
                </div>
                <div className='row'>
                    <input type="file" class="form-control-file" id="inputImages"/>
                </div>
            </form>
        </div>
 */

/*
<div className='container-new-pet'>
            <form className='align-items-center'>
                <div className='row'>
                    <div className='col-12'>
                        <label className='input-label'>Nome</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div class="col-md-3">
                        <label for="inputEspecie" className='input-label'>Especie</label>
                        <select class="form-control" id="inputEspecie">
                            <option>Canino</option>
                            <option>Felino</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputSexo" className='input-label'>Sexo</label>
                        <select class="form-control" id="inputSexo">
                            <option>Macho</option>
                            <option>Femea</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputPorte" className='input-label'>Porte</label>
                        <select class="form-control" id="inputPorte">
                            <option>Pequeno</option>
                            <option>Medio</option>
                            <option>Grande</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="inputIdade" className='input-label'>Idade</label>
                        <select class="form-control" id="inputIdade">
                            <option>Filhote</option>
                            <option>Adulto</option>
                            <option>Idoso</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-md-3">
                        <label for="inputCuidados" className='input-label'>Cuidados veterinarios</label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxCastrado" value="Castrado"/>
                            <label class="form-check-label" for="boxCastrado">Castrado</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxVacinado" value="Vacinado"/>
                            <label class="form-check-label" for="boxVacinado">Vacinado</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxVermifugado" value="Vermifugado"/>
                            <label class="form-check-label" for="boxVermifugado">Vermifugado</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxCuidadosEspeciais" value="CuidadosEspeciais"/>
                            <label class="form-check-label" for="boxCuidadosEspeciais">Precisa de cuidados especiais</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="inputTemperamento" className='input-label'>Temperamento</label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxAgressivo" value="Agressivo"/>
                            <label class="form-check-label" for="boxAgressivo">Agressivo</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxArisco" value="Arisco"/>
                            <label class="form-check-label" for="boxArisco">Arisco</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxBrincalhao" value="Brincalhao"/>
                            <label class="form-check-label" for="boxBrincalhao">Brincalhao</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxCalmo" value="Calmo"/>
                            <label class="form-check-label" for="boxCalmo">Calmo</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxCarente" value="Carente"/>
                            <label class="form-check-label" for="boxCarente">Carente</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxDocil" value="Docil"/>
                            <label class="form-check-label" for="boxDocil">Docil</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxIndependente" value="Independente"/>
                            <label class="form-check-label" for="boxIndependente">Independente</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxSociavel" value="Sociavel"/>
                            <label class="form-check-label" for="boxSociavel">Sociavel</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="inputCuidados" className='input-label'>Vive bem em</label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxApartamento" value="Apartamento"/>
                            <label class="form-check-label" for="boxApartamento">Apartamento</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxApartamentoTelado" value="ApartamentoTelado"/>
                            <label class="form-check-label" for="boxApartamentoTelado">Apartamento telado</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxCasa" value="CasaComQuintalFechado"/>
                            <label class="form-check-label" for="boxCasa">Casa com quintal fechado</label>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="inputCuidados" className='input-label'>Sociavel com</label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxCachorros" value="Cachorros"/>
                            <label class="form-check-label" for="boxCachorros">Cachorros</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxGatos" value="Gatos"/>
                            <label class="form-check-label" for="boxGatos">Gatos</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxCriancas" value="Criancas"/>
                            <label class="form-check-label" for="boxCriancas">Crianças</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="boxPessoasDesconhecidas" value="PessoasDesconhecidas"/>
                            <label class="form-check-label" for="boxPessoasDesconhecidas">Pessoas desconhecidas</label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div class="form-group col-md-12">
                        <label for="inputDescricao" className='input-label'>Descrição/Historico</label>
                        <textarea class="form-control" id="inputDescricao" rows="4"></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div class="form-group">
                        <label for="inputImages" className='input-label'>Adicione fotos</label>
                    </div>
                </div>
                <div className='row'>
                    <input type="file" class="form-control-file" id="inputImages"/>
                </div>
            </form>
        </div>
*/