"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import {BarraBusqueda} from '../barraBusqueda/BarraBusqueda'

export const Header = () => {
  const router = useRouter();{/*funcion para llamar al router */}

  const goContrataciones = () => {//funcion contrataciones para ir a la pagina
    router.push("/contratos")
  }
  const goHome = () => {//funcion home para ir a la pagina
    router.push("/")
  }
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li><a onClick={goHome}>Home</a></li>{/*con el onClick llamo a la funcion goHome  para habrir la pagina */}
            <li><a href="/postulaciones">Empleos</a></li>{ /* con un href llamo a la carpeta para habrirlo al ocar el boton */ }
            <li><a onClick={goContrataciones} >Candidatos</a></li>
            <li><BarraBusqueda/></li>{/*llamo a la funcion barra de busqueda para mostrarla en pantalla */}
          </ul>
        </nav>
      </header>
      
    </section>
  )
}
