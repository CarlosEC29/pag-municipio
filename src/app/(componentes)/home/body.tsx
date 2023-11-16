"use client"
import React from 'react'
import Image from 'next/image'
// a continuacion importo las imagenes y les pongo un nombre para llamarlos
import Hogwarts from '../../../../public/hogwarts.jpg'
import Hogwarts2 from '../../../../public/hogwarts2.jpg'
import Hogwarts3 from '../../../../public/hogwarts3.jpg'
import Hogwarts4 from '../../../../public/hogwarts4.jpg'
import Carousel from 'react-bootstrap/Carousel';
//importo el css del bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export const Body = () => {
  return (
    <section className='cuerpo'>{/* le doy una clase al fondo  */}
      <Carousel data-bs-theme="dark">{/*agrego carrucel y el estilo de este */}
      <Carousel.Item>{/* agrego carrucel */}
        <Image
          className="carrucel"
          src={Hogwarts}
          alt="First slide"
        />{/*agrege la imagen  */}
        <Carousel.Caption>
          <h5>Historia</h5>
          <p className='texto'>Hogwarts es una escuela a la cual asisten jóvenes magos para desarrollar sus habilidades mágicas. El edificio, situado en las colinas de Escocia, es visto como un antiguo edificio en ruinas por las personas ajenas a poderes mágicos (más comúnmente conocidos como muggles). Tiene siete plantas, varias torres, escaleras que cambian de posición a su antojo y extensos terrenos que contienen un lago, un bosque, llamado El Bosque Prohibido, y varios invernaderos con fines botánicos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hogwarts2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Pasillo</h5>
          <p className='texto'> Además de sus numerosas aulas en las que se imparten las clases de pociones, transformaciones, Defensa contra las Artes Oscuras, Historia de la magia y demás asignaturas por asistentes calificados, el castillo posee lugares con fines diferentes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hogwarts3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Comedor</h5>
          <p>
            Hay un amplio comedor para que todos los alumnos y maestros puedan estar alli. con capasidad de 3000 personas
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
          <h5>Escudo</h5>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>

  )
}