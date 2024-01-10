import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import PetCard from './Components/PetCard';
import ListPets from './Views/ListPets';

function Home() {
  
  return (
    <div>
        <NavBar/>
        <ListPets/>
    </div>
  );
}

export default Home;
