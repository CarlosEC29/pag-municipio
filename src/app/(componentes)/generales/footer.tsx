"use client"
import React from 'react'

export const Footer = () => {
  return (
    <footer className="finpagina">{/*le agrego el css */}
      <div className="container">
        <p className="float-start"> Contacto Telefonico: 0-800-Hodwarts-111-999 </p>
        <p className="float-end">Correo:<a className="link-opacity-50-hover"
          href="" target="blank">municipalidadhodward@gmail.com</a></p>{/*al correo lo hago un boton link */}
      </div>
    </footer>

  )
}