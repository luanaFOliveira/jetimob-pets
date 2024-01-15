import  { Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import PetInfo from './Views/Pet/PetInfo';
import PetList from './Views/Pet/ListPets';
import NewPet from './Views/Pet/NewPet';
import EditPet from './Views/Pet/EditPet';
import NewUser from './Views/User/NewUser';
import EditUser from './Views/User/EditUser';

function App() {

  return (
    <Routes>
      <Route path="/" element={<PetList />} />
      <Route path="/pets" element={<PetList />} />
      <Route path="/pet/:id" element={<PetInfo />} />
      <Route path="/new_pet" element={<NewPet />} />
      <Route path="/edit_pet/:id" element={<EditPet />} />
      <Route path="/new_user" element={<NewUser />} />
      <Route path="/edit_user/:id" element={<EditUser />} />
    </Routes>
  );
}

export default App;
