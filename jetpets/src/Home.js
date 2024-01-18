import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Home.css';
import LoginForm from './Components/LoginForm';

function Home() {
  
  return (<>
    <div className='container-new-user'>
        <LoginForm/>
    </div>
  </>);
}

export default Home;
