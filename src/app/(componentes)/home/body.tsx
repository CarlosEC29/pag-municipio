"use client"
import React from 'react'
import Image from 'next/image'
import Hogwarts from '../../../../public/hogwarts.jpg'
import Hogwarts2 from '../../../../public/hogwarts2.jpg'
import Hogwarts3 from '../../../../public/hogwarts3.jpg'
import Hogwarts4 from '../../../../public/hogwarts4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Body = () => {
  return (
    <section className='cuerpo'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hogwarts}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Historia</h5>
          <p>Hogwarts es una escuela a la cual asisten jóvenes magos para desarrollar sus habilidades mágicas. El edificio, situado en las colinas de Escocia, es visto como un antiguo edificio en ruinas por las personas ajenas a poderes mágicos (más comúnmente conocidos como muggles). Tiene siete plantas, varias torres, escaleras que cambian de posición a su antojo y extensos terrenos que contienen un lago, un bosque, llamado El Bosque Prohibido, y varios invernaderos con fines botánicos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hogwarts2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Precentacion 2</h5>
          <p> Además de sus numerosas aulas en las que se imparten las clases de pociones, transformaciones, Defensa contra las Artes Oscuras, Historia de la magia y demás asignaturas por asistentes calificados, el castillo posee lugares con fines diferentes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hogwarts3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Precentacion 3</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hogwarts4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Precentacion 4</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>

  )
}