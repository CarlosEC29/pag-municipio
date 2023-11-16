import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '../(componentes)/generales/header';
import { Body } from '../(componentes)/home/body';
import { Footer } from '../(componentes)/generales/footer';
//import '../globals.css';

export default function Home() {
  return (
    <main>
	  <Header/>
    <Body/>
    <Footer/>
    </main>
    
  )
}