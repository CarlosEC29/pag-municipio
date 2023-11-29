"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation'

export const Aplicar = () => {
  const router = useRouter(); {/*funcion para llamar al router */ }

  const goEmpleos = () => {//funcion contrataciones para ir a la pagina
    router.push("/contratos")
  }
  return (
    <div className='cuerpo'>
      <div className="d-grid gap-2">
        <Button onClick={goEmpleos} variant="primary" size="lg">
          Buscar Empleos Disponibles
        </Button>
      </div>
    </div>

  )
}