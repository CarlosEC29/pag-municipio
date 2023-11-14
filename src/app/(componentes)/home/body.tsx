"use client"
import React from 'react'
import Image from 'next/image'
import Hodwarts from './hodwarts.jpg'
import Hodwarts2 from './hodwarts2.jpg'
import Hodwarts3 from './hodwarts3.jpg'
import Hodwarts4 from './hodwarts4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Body = () => {
  return (
    <section className='cuerpo'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hodwarts}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Historia</h5>
          <p>Hogwarts es una escuela a la cual asisten jóvenes magos para desarrollar sus habilidades mágicas. 
            El edificio, situado en las colinas de Escocia, es visto como un antiguo edificio en ruinas por las personas ajenas a poderes mágicos (más comúnmente conocidos como muggles). 
            Tiene siete plantas, varias torres, escaleras que cambian de posición a su antojo y extensos terrenos que contienen un lago, un bosque, llamado El Bosque Prohibido, y varios invernaderos con fines botánicos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hodwarts2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Presentacion 2</h5>
          <p> Además de sus numerosas aulas en las que se imparten las clases de pociones, transformaciones, Defensa contra las Artes Oscuras, Historia de la magia y demás asignaturas por asistentes calificados, el castillo posee lugares con fines diferentes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hodwarts3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Presentacion 3</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hodwarts4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Presentacion 4</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>

  )
}