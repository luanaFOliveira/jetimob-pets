import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPets from './Views/Pet/ListPets';

function Home() {
  
  return (
    <div>
        <ListPets/>
    </div>
  );
}

export default Home;
