import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const onDelete = (id) => {
    if (!window.confirm("Deseja realmente excluir este pet?")) return;
      
    try {
        fetch(`http://127.0.0.1:8000/api/pets/${id}`, {
            method: 'DELETE',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            mode: 'cors' 
        });
        
        alert("Pet excluído com sucesso");
        } catch (error) {
        console.log(error);
        alert("Não foi possível excluir o pet.");
    }

}

function PetInfo(){
    const params = useParams();
    const id = params.id;

    const [pet,setPet] = useState([]);

    const getPet = async () =>{

        await fetch(`http://127.0.0.1:8000/api/pets/${id}`, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            mode: 'cors' 
        })
            .then(response => response.json())
            .then(pet => setPet(pet))
            .catch(error => {
            console.error(error);
            });
    }
  
    getPet();


    return(<div>
        <NavBar />
        <div className='card text-center'>
            <div>
                <h2>Sou o {pet.nome}</h2>
                <h4>Especie: {pet.especie}</h4>
                <h4>Sexo: {pet.sexo}</h4>
                <h4>Porte: {pet.porte}</h4>
                <h4>Idade: {pet.idade}</h4>
                <h4>Cuidados: {pet.cuidados_veterinarios}</h4>
                <h4>Temperamento: {pet.temperamento}</h4>
                <h4>Vivo bem em: {pet.vivo_bem_em}</h4>
                <h4>Sou sociavel com: {pet.sociavel_com}</h4>
                <h4>Descricao: {pet.descricao}</h4>
            </div>
            <div className="d-flex align-items-center">
                <div className="ml-auto card-links">
                    <Link to={`/editPet/${id}`} className="card-link">Editar</Link>
                    <Link to={`/`} className="card-link" onClick={() => onDelete(id)}>Excluir</Link>
                </div>
            </div>
        </div>
    </div>);

}


export default PetInfo;
