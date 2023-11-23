'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BarraBusqueda = () => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container">
        <button className="navbar-toggler" type="button">
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="Buscar">
            <input className="form-control me-2" type="Buscar" placeholder="Buscar"/>
            <button className="btn" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
