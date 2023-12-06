import Image from 'next/image'
import { Postulaciones } from '../(componentes)/postulaciones/postulaciones';
import { Header } from '../(componentes)/generales/header';
import { Footer } from '../(componentes)/generales/footer';
import { Titulo } from '../(componentes)/postulaciones/header';
import './layout'

export default function Home() {
  return (
    <main>
    <Header/>
    <Titulo/>
	  <Postulaciones/>
    <Footer/>
    </main>
  )
}