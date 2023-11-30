"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import EstudiosImage from '../../../../public/estudios.jpg'
import MascotaImage from '../../../../public/mascota.png'
import RunasImage from '../../../../public/runas.png'
import DefensasImage from '../../../../public/defensa oscura.png'
import { useRouter } from 'next/navigation'
import Accordion from 'react-bootstrap/Accordion';

export const Body = () => {
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

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={DefensasImage.src} />
          <Card.Body>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Defensas de las artes oscuras</Accordion.Header>
                <Accordion.Body>
                  En esta clase, los estudiantes estudian y aprenden cómo defenderse de todos los aspectos de las Artes Oscuras, incluidas las criaturas oscuras.
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