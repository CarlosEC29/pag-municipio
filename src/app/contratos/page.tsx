import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '../(componentes)/generales/header';
import { Titulo } from '../(componentes)/empleos/header';
import { Body } from '../(componentes)/empleos/empleos';
import { Footer } from '../(componentes)/generales/footer';
//import '../globals.css';

export default function Home() {
  return (
    <main>
	  <Header/>
    <Titulo/>
    <Body/>
    <Footer/>
    </main>
    
  )
}