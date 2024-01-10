import './App.css';
import  { Route,Routes } from "react-router-dom";
import Home from './Home';
import PetInfo from './Views/PetInfo';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pet/:id" element={<PetInfo />} />
    </Routes>
  );
}

export default App;
