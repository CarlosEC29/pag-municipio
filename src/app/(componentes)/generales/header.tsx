"use client"
import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Icono} from './icono'
=======
import { useRouter } from 'next/navigation'
import {BarraBusqueda} from '../barraBusqueda/barraBusqueda'
>>>>>>> origin/page-gonzalo

export const Header = () => {
  const router = useRouter();

  const goContrataciones = () => {
    router.push("/contratos")
  }
  const goHome = () => {
    router.push("/")
  }
  return (
    <section>
      <header>
<<<<<<< HEAD
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
=======
        <nav>
          <ul>
            <li><a onClick={goHome}>Home</a></li>
            <li><a href="/postulaciones">Empleos</a></li>
            <li><a onClick={goContrataciones} >Candidatos</a></li>
            <li><BarraBusqueda/></li>
>>>>>>> origin/page-gonzalo
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
