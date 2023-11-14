"use client"
import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Icono} from './icono'

export const Header = () => {
  return (
    <section>
      <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Municipio de Hogwarts</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menú
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Home</a></li>
                <li><a className="dropdown-item" href="#">Postulaciones</a></li>
                <li><a className="dropdown-item" href="#">Contrataciones</a></li>
                <li><a className="dropdown-item" href="#">Galería de imagenes</a></li>
                <li><a className="dropdown-item" href="#">Acerca de Nosotros</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li className="nav-item">
                  <a className="dropdown-item">Contacto</a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
      </header>
      
    </section>
  )
}
