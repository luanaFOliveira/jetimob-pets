import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import '../../Styles/Pet/PetInfo.css';
import InfoItem from '../../Components/InfoItem';
import CarousselImages from '../../Components/CarousselImages';
import { Button} from 'react-bootstrap';
import SubmitButton from '../../Components/SubmitButton';

//styled components
//sass ou scss
const onDelete = async (id) => {
  if (!window.confirm("Deseja realmente excluir este pet?")) return;

  try {
    await fetch(`http://127.0.0.1:8000/api/pets/${id}`, {
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

function PetInfo() {
  const params = useParams();
  const id = params.id;

  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPet = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/pets/${id}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        });

        if (response.ok) {
          const petData = await response.json();
          setPet(petData);
        } else {
          console.error(`Erro ao buscar dados: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getPet();
  }, [id]);

  if (loading) {
    return <p>Carregando</p>;
  }

  const images = [
    'https://via.placeholder.com/300x300',
    'https://via.placeholder.com/300x300',
    'https://via.placeholder.com/300x300',
  ];

  return (
    <>
      <div>
        <NavBar />
        <div className='container-info-pets'>
          <h1>{pet.nome}</h1>
          <div className='carrousel-images'>
            <CarousselImages images={pet.images} />
          </div>
          <div className='container-cards-info'>
            <InfoItem pet={pet} />            
          </div>
          <div>
            <div class="card-info">
              <h7 class="card-title">Descricao</h7>
              <div class="card-body">
                <h5 class="card-text">{pet.descricao}</h5>
              </div>
            </div>
          </div>
          <div className='footer-pet-page'>
            <SubmitButton texto="Editar" path={`/edit_pet/${id}`} />
            <SubmitButton texto="Excluir" path={`/`} onClick={() => onDelete(id)} />
          </div> 
        </div>
      </div>
    </>
  );
}

/*
<InfoItem campo1="Cuidados Veterinarios" valor1={pet.cuidados_veterinarios} campo2="Temperamento" valor2={pet.temperamento} />
            <InfoItem campo1="Vive bem em" valor1={pet.vive_bem_em} campo2="Sociavel com" valor2={pet.sociavel_com} />
            //            <Button variant="dark" className="custom-button"><Link to={`/`} onClick={() => onDelete(id)} >Deletar</Link></Button>

<div className='pet-info-circles'>
              <InfoItem texto={pet.especie} />
              <InfoItem texto={pet.sexo} />
              <InfoItem texto={pet.porte} />
              <InfoItem texto={pet.idade} />
              <InfoItem texto={pet.cuidados_veterinarios} />
              <InfoItem texto={pet.temperamento} />
              <InfoItem texto={pet.vive_bem_em} />
              <InfoItem texto={pet.sociavel_com} />
          </div>

*/

/*
<div>
        <NavBar />
        <div className='container-info-pets'>
            <div className='pet-info-text'>
                <h1>Sou o/a {pet.nome}</h1>
                <h4>Especie: {pet.especie}</h4>
                <h4>Sexo: {pet.sexo}</h4>
                <h4>Idade: {pet.idade}</h4>
                <h4>Porte: {pet.porte}</h4>
                <h4>Cuidados Veterinarios: {pet.cuidados_veterinarios}</h4>
                <h4>Temperamento: {pet.temperamento}</h4>
                <h4>Vive bem em: {pet.vive_bem_em}</h4>
                <h4>Sociavel com: {pet.sociavel_com}</h4>
                <h4>Descricao: {pet.descricao}</h4>
            </div>
            <div className='carrousel-images'>
                <img src="https://via.placeholder.com/300x300"  alt="Card Image"  />    
            </div>
            <div className="d-flex align-items-center">
                <div className="ml-auto">
                    <Link to={`/editPet/${id}`} ><button className='btn btn-primary'>Editar</button></Link>
                    <Link to={`/`} onClick={() => onDelete(id)}><button className='btn btn-primary'>Excluir</button></Link>
                </div>
            </div>
        </div>
      </div>
*/

export default PetInfo;
