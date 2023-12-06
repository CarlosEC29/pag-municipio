"use client"
import React from 'react'
import Image from 'next/image'
import Facebook from '../../../../../public/facebook.png'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export const BarraLateral = () => {
  return (
    <div className=" izquierda">{/*le agrego el css */}

      <Nav defaultActiveKey="/home" className="flex-column"> {/* */}
        <nav className='mb-3  boton1'><a className='page-link boton2' href=''> Twitter</a></nav>
        <nav className='mb-3 boton1'><a className='page-link boton2' href='Whatsapp'>Whatsapp</a> </nav>
        <nav className='mb-3 boton1'><a className='page-link boton2' href='Facebook' >Facebook</a> </nav>
        <nav className='boton1'><a className='page-link boton2' type="button" href="https://play.howstuffworks.com/quiz/a-qu-casa-de-hogwarts-perteneces" >A que casa perteneces</a></nav>
      </Nav>
    </div>

  )
}