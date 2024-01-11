import './App.css';
import  { Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import PetInfo from './Views/PetInfo';
import PetList from './Views/ListPets';
import NewPet from './Views/NewPet';
import EditPet from './Views/EditPet';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<PetList />} />
      <Route path="/pet/:id" element={<PetInfo />} />
      <Route path="/new_pet" element={<NewPet />} />
      <Route path="/edit_pet/:id" element={<EditPet />} />
    </Routes>
  );
}

export default App;
