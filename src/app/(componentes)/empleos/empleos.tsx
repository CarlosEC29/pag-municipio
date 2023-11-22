"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import EstudiosImage from '../../../../public/estudios.jpg'
import MascotaImage from '../../../../public/mascota.png'
import RunasImage from '../../../../public/runas.png'
import { useRouter } from 'next/navigation'

export const Body = () => {
    const router = useRouter();{/*funcion para llamar al router */}

const goFormulario = () => {//funcion contrataciones para ir a la pagina
    router.push("/curriculum")
}
  return (
    <section className='cuerpo'>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={EstudiosImage.src} />
        <Card.Body>
          <Card.Title>Estudios de Runas Antiguas</Card.Title>
          <Card.Text>
          El Estudio de Runas Antiguas (comúnmente abreviado Runas Antiguas) es un curso electivo en el Colegio Hogwarts de Magia y Hechicería y presumiblemente el Colegio Ilvermorny de Magia y Hechicería, que pueden ser tomadas por los estudiantes de tercer año en adelante. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">cargado hace 2 dias<Button onClick={goFormulario} variant="success" size="sm">Cargar CV</Button></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={MascotaImage.src} />
        <Card.Body>
          <Card.Title>Estudios Muggles</Card.Title>
          <Card.Text>
          Estudios Muggles (tambien llamada Ciencias Muggles) es una asignatura opcional y parte del plan de estudios no mágicos en el Colegio Hogwarts de Magia y Hechicería. Consiste en el estudio de la historia y la vida cotidiana de los muggles, y cómo podían vivir sin magia, sino con electricidad, tecnología y ciencia{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">cargado hace 2 horas<Button onClick={goFormulario} variant="success" size="sm">Cargar CV</Button></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={RunasImage.src} />
        <Card.Body>
          <Card.Title>Cuidado de Criaturas Magicas</Card.Title>
          <Card.Text>
          Cuidado de Criaturas Mágicas es un curso electivo del Colegio Hogwarts de Magia y Hechicería, que puede ser elegido por los estudiantes en su tercer año. A los estudiantes se les enseña acerca de la alimentación, mantenimiento, la cría y el tratamiento adecuado de estas criaturas y muchas más
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">cargado hace 3 semanas<Button onClick={goFormulario} variant="success" size="sm">Cargar CV</Button></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </section>

  )
}