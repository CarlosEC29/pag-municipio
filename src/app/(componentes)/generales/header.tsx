"use client"
import React from 'react'
import { Link } from 'react-router-dom'
//import {Icono} from './icono'

export const Header = () => {
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Postulaciones</a></li>
            <li><a href="#">Contrataciones</a></li>
            <li><a href="#">Buscador</a></li>
          </ul>
        </nav>
      </header>
      
    </section>
  )
}
