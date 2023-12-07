"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import EstudiosImage from '../../../../public/empleos/estudios.jpg'
import { useRouter } from 'next/router'; 
import Accordion from 'react-bootstrap/Accordion';

export const Moggles = () => {
  const router = useRouter(); {/*funcion para llamar al router */ }

  const goFormulario = () => {//funcion contrataciones para ir a la pagina
    router.push("/curriculum")
  }
  return (
    <section className='cuerpo'>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={EstudiosImage.src} />
          <Card.Body>
            <Accordion defaultActiveKey="0" flush >
              <Accordion.Item eventKey="1">
                <Accordion.Header>Estudios Muggles</Accordion.Header>
                <Accordion.Body>
                  Estudios Muggles (tambien llamada Ciencias Muggles) es una asignatura opcional y parte del plan de estudios no mágicos en el Colegio Hogwarts de Magia y Hechicería. Consiste en el estudio de la historia y la vida cotidiana de los muggles, y cómo podían vivir sin magia, sino con electricidad, tecnología y ciencia
                  <small className="text-muted">cargado hace 2 horas<Button onClick={goFormulario} variant="success" size="sm">Cargar CV</Button></small>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  )
}