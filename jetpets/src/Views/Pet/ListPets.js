import React,{useState,useEffect} from 'react';
import PetCard from '../../Components/PetCard';
import '../../Styles/Pet/ListPets.css';
import NavBar from '../../Components/NavBar';

function ListPets() {
  const [pets, setPets] = useState([]);
  //const [page, setPage] = useState(1);
  //const itemsPerPage = 8; // Quantidade de itens por página

  const getPets = () => {
    //const minId = (page - 1) * itemsPerPage + 1;
    //const maxId = minId + itemsPerPage - 1;
    
    fetch(`http://127.0.0.1:8000/api/pets`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then(response => response.json())
      .then(pets => setPets(pets))
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    getPets();
    // eslint-disable-next-line
  }, []);

  return (<>
    <NavBar/>
    <div className="row bg-transparent container-pet-list">
      {Array.isArray(pets) && pets.length > 0 ? (
          pets.map((pet, index) => (
            <PetCard key={index} nome={pet.nome} id={pet.id} />
          ))
        ) : (
          <p>Nenhum animal encontrado.</p>
      )}
    </div>
    </>);
}

export default ListPets;
