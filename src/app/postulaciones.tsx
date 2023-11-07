import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './componentes_postulaciones/header'
import { Body } from './componentes_postulaciones/body'
import { Footer } from './componentes_postulaciones/footer'

export default function Home() {
  return (
    <main>
	  <Header/>
    <Body/>
    <Footer/>
    </main>
    
  )
}