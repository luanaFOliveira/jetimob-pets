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
          <div className='col-6'>
            <h1 className='pet-name'>{pet.nome}</h1>
            <div className='carrousel-images'>
              <CarousselImages images={pet.images} />
            </div>
            <div className='footer-pet-page'>
              <SubmitButton texto="Editar" path={`/edit_pet/${id}`} />
              <SubmitButton texto="Excluir" path={`/`} onClick={() => onDelete(id)} />
            </div> 
          </div>
          <div className='col-6'>
            <div className='container-cards-info'>
              <InfoItem pet={pet} />            
            </div>
            <div className='descricao-container'>
              <div class="card-info">
                <h7 class="card-title">Descricao</h7>
                <div class="card-body">
                  <h5 class="card-text">{pet.descricao}</h5>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
/*

<div>
        <NavBar />
        <div className='container-info-pets'>
          <h1 className='pet-name'>{pet.nome}</h1>
          <div className='carrousel-images'>
            <CarousselImages images={pet.images} />
          </div>
          <div className='container-cards-info'>
            <InfoItem pet={pet} />            
          </div>
          <div className='descricao-container'>
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
*/

export default PetInfo;
