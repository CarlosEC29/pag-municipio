"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export const BarraLateral = () => {

    const router = useRouter(); {/*funcion para llamar al router */ }

    const goContrataciones = () => {//funcion contrataciones para ir a la pagina
        router.push("/contratos")
    }
    const goHome = () => {//funcion home para ir a la pagina
        router.push("/")
    }
    const goPostulaciones = () => {//funcion home para ir a la pagina
      router.push("/postulaciones")
  }

    return (
        <div className="cuerpo izquierda">{/*le agrego el css */}

            <Nav defaultActiveKey="/home" className="flex-column">
            
                <nav className='mb-3'><Button  onClick={goHome}>Home </Button> </nav>  {/*con el onClick llamo a la funcion goHome  para abrir la pagina */}
                <nav className='mb-3'><Button onClick={goContrataciones}>Empleos</Button> </nav>
                <nav className='mb-3'><Button onClick={goPostulaciones} >Candidatos</Button> </nav>
            </Nav>
        </div>

    )
}