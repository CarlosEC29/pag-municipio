"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import RunasImage from '../../../../public/empleos/runas.png'
import { useRouter } from 'next/router'; 
import Accordion from 'react-bootstrap/Accordion';

export const Runas = () => {
  const router = useRouter(); {/*funcion para llamar al router */ }

  const goFormulario = () => {//funcion contrataciones para ir a la pagina
    router.push("/curriculum")
  }
  return (
    <section className='cuerpo'>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={RunasImage.src} />
          <Card.Body>
            <Accordion defaultActiveKey="0" flush >
              <Accordion.Item eventKey="1">
                <Accordion.Header>Estudios de Runas Antiguas</Accordion.Header>
                <Accordion.Body>
                  El Estudio de Runas Antiguas (comúnmente abreviado Runas Antiguas) es un curso electivo en el Colegio Hogwarts de Magia y Hechicería y presumiblemente el Colegio Ilvermorny de Magia y Hechicería, que pueden ser tomadas por los estudiantes de tercer año en adelante.
                  <small className="text-muted">cargado hace 2 dias<Button onClick={goFormulario} variant="success" size="sm">Cargar CV</Button></small>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  )
}