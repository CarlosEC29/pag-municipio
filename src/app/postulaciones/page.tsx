import Image from 'next/image'
import { Postulaciones } from '../componentes_postulaciones/postulaciones';
import { Header } from '../componentes_generales/header';
import { Footer } from '../componentes_generales/footer';
import '../globals.css';

export default function Home() {
  return (
    <main>
      <Header/>
	  <Postulaciones/>
    <Footer/>
    </main>
  )
}