"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Nav from 'react-bootstrap/Nav';

export const BarraLateral = () => {

    const router = useRouter(); {/*funcion para llamar al router */ }

    const goContrataciones = () => {//funcion contrataciones para ir a la pagina
        router.push("/contratos")
    }
    const goHome = () => {//funcion home para ir a la pagina
        router.push("/")
    }

    return (
        <div className="cuerpo izquierda">{/*le agrego el css */}

            <Nav defaultActiveKey="/home" className="flex-column">

                <nav><a onClick={goHome}>Home</a> </nav>  {/*con el onClick llamo a la funcion goHome  para abrir la pagina */}
                <nav><a onClick={goContrataciones}>Empleos</a> </nav>
                <nav><a href="/postulaciones" >Candidatos</a> </nav> { /* con un href llamo a la carpeta para habrirlo al ocar el boton */}
            </Nav>
        </div>

    )
}