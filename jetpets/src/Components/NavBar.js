import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';



function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link to={`/`} className="navbar-brand"><FontAwesomeIcon icon={faPaw} style={{fontSize:'24px'}} />PetLar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={`/pets`} className="nav-item nav-link">Pets</Link>
            <Link to={`/new_pet`} className="nav-item nav-link">Novo Pet</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
