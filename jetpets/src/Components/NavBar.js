import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link to={`/`} className="navbar-brand">PetLar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={`/animais`} className="nav-item nav-link">Pets</Link>
            <Link to={`/novo_animal`} className="nav-item nav-link">Novo Pet</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
