"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import DefensasImage from '../../../../public/empleos/defensa oscura.png'
import { useRouter } from 'next/router'; 
import Accordion from 'react-bootstrap/Accordion';

export const Defensas = () => {
  const router = useRouter(); {/*funcion para llamar al router */ }

  const goFormulario = () => {//funcion contrataciones para ir a la pagina
    router.push("/curriculum")
  }
  return (
    <CardGroup>
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
  )
}