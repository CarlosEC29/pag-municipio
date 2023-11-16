"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import {BarraBusqueda} from '../barraBusqueda/BarraBusqueda'

export const Header = () => {
  const router = useRouter();

  const goContrataciones = () => {
    router.push("/contratos")
  }
  const goHome = () => {
    router.push("/")
  }
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li><a onClick={goHome}>Home</a></li>
            <li><a href="/postulaciones">Empleos</a></li>
            <li><a onClick={goContrataciones} >Candidatos</a></li>
            <li><BarraBusqueda/></li>
          </ul>
        </nav>
      </header>
      
    </section>
  )
}
