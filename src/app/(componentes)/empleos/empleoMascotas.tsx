"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import MascotaImage from '../../../../public/empleos/mascota.png'
import { useRouter } from 'next/router'; 
import Accordion from 'react-bootstrap/Accordion';

export const Mascotas = () => {
  const router = useRouter(); {/*funcion para llamar al router */ }

  const goFormulario = () => {//funcion contrataciones para ir a la pagina
    router.push("/curriculum")
  }
  return (
    <section className='cuerpo'>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={MascotaImage.src} />
          <Card.Body>
            <Accordion defaultActiveKey="0" flush >
              <Accordion.Item eventKey="1">
                <Accordion.Header>Cuidado de Criaturas Magicas</Accordion.Header>
                <Accordion.Body>
                  Cuidado de Criaturas Mágicas es un curso electivo del Colegio Hogwarts de Magia y Hechicería, que puede ser elegido por los estudiantes en su tercer año. A los estudiantes se les enseña acerca de la alimentación, mantenimiento, la cría y el tratamiento adecuado de estas criaturas y muchas más
                  <small className="text-muted">cargado hace 3 semanas<Button onClick={goFormulario} variant="success" size="sm">Cargar CV</Button></small>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  )
}