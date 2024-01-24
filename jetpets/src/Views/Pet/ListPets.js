import React,{useState,useEffect} from 'react';
import PetCard from '../../Components/PetCard';
import '../../Styles/Pet/ListPets.css';
import NavBar from '../../Components/NavBar';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import FilterSideBar from '../../Components/FilterSideBar';

function ListPets() {
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPets = async (page = 1) => {
    setLoading(true);

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/pets?page=${page}`);
      const data = await response.json();

      setPets(data.data);
      setLastPage(data.last_page);
      setCurrentPage(page);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPets();
    // eslint-disable-next-line
  }, []);

  const handlePageChange = (event,page) => {
    getPets(page);
  };

  const nomes = [
    { label: 'Tobias' },
    { label: 'Boris' },
  ];

  const filterBarWidth = 250; 
  console.log(pets);
  return (<>
    <NavBar/>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {loading && <CircularProgress />}
    </Box>
    <FilterSideBar nomes={nomes} width={filterBarWidth}/>
    <div className="row bg-transparent container-pet-list">
      {Array.isArray(pets) && pets.length > 0 ? (
          pets.map((pet, index) => (
            <PetCard key={index} nome={pet.name} id={pet.pet_id} image={pet.images[0]} />
          ))
        ) : (
          <p>Nenhum animal encontrado.</p>
      )}
      
    </div>
    <div className='pagination-container'>
        <Pagination
            count={lastPage}
            page={currentPage}
            onChange={handlePageChange}
        />
    </div>
    </>);
}

export default ListPets;
