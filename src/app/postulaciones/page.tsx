import Image from 'next/image'
import { Postulaciones } from '../(componentes)/postulaciones/postulaciones';
import { Header } from '../(componentes)/generales/header';
import { Footer } from '../(componentes)/generales/footer';
//import '../globals.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Postulaciones />
      <Footer />
    </main>
  )
}