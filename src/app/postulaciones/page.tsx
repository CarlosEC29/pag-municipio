import Image from 'next/image'
import { Postulaciones } from '../componentes_postulaciones/postulaciones';
//import { Titulo } from '../componentes_home/header';
import '../globals.css';

export default function Home() {
  return (
    <main>
	  <Postulaciones/>
    </main>
  )
}