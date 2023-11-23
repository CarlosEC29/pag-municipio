import Image from 'next/image'
import { Cuerpo } from '../(componentes)/formulario/body';
import { Header } from '../(componentes)/generales/header';
import { Footer } from '../(componentes)/generales/footer';
import { Titulo } from '../(componentes)/formulario/header';
//import './layout'

export default function Home() {
  return (
    <main>
      <Header />
      <Titulo />
      <Cuerpo />
      <Footer />
    </main>
  )
}