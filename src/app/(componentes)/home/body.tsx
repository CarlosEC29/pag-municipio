"use client"
import React from 'react'
import Image from 'next/image'
// a continuacion importo las imagenes y les pongo un nombre para llamarlos
import Hogwarts from '../../../../public/carrucel/hogwarts.jpg'
import Hogwarts2 from '../../../../public/carrucel/hogwarts2.jpg'
import Hogwarts3 from '../../../../public/carrucel/hogwarts3.jpg'
import Hogwarts4 from '../../../../public/carrucel/hogwarts4.jpg'
import Carousel from 'react-bootstrap/Carousel';
//importo el css del bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export const Body = () => {
  return (
    <section className='cuerpo'>{/* le doy una clase al fondo  */}
    <div className='cuerpoHome'>
      <Carousel data-bs-theme="dark">{/*agrego carrucel y el estilo de este */}
        <Carousel.Item className='alineacion'>{/* agrego carrucel */}
          <Image
            className="carrucel"
            src={Hogwarts}
            alt="First slide"
          />{/*agrege la imagen  */}
          <Carousel.Caption>
            <h5>Territorio</h5>
            <p className='texto text-center'>Es una escuela a la cual asisten jóvenes magos. El edificio, situado en las colinas de Escocia, es visto como un antiguo edificio en ruinas por las personas ajenas a poderes mágicos. Tiene siete plantas, varias torres, escaleras que cambian de posición y extensos terrenos que contienen un lago, un bosque y, varios invernaderos con fines botánicos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='alineacion'>
          <Image
            className="carrucel"
            src={Hogwarts2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Pasillo</h5>
            <p className='texto text-center'> Además de sus numerosas aulas en las que se imparten las clases de pociones, transformaciones, defensa contra las Artes Oscuras, historia de la magia y demás asignaturas por asistentes calificados. El castillo posee lugares con fines diferentes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='alineacion'>
          <Image
            className="carrucel"
            src={Hogwarts3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Comedor</h5>
            <p className='texto text-center'>
            Hay un amplio comedor para que todos los alumnos y maestros puedan estar allí, con capacidad de 3000 personas.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='alineacion'>
          <Image
            className="carrucel"
            src={Hogwarts4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Casas de hogwarts</h5>
            <p className=' texto text-center'>
            Las casas se llaman Gryffindor, Hufflepuff, Ravenclaw y Slytherin. Mientras estéis en Hogwarts, vuestros triunfos conseguirán que las casas ganen puntos, mientras que cualquier infracción de las reglas hará que los pierdan. Al finalizar el año, la casa que obtenga más puntos será premiada con la copa de la casa, un gran honor.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </section>

  )
}