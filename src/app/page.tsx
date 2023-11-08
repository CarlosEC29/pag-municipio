import Image from 'next/image'
import '../app/layout'
import { Header } from './componentes_generales/header'
import { Titulo } from './componentes_home/header'
import { Body } from './componentes_home/body'
import { Footer } from './componentes_generales/footer'

export default function Home() {
  return (
    <section>
	  <Header/>
    <Titulo/>
    <Body/>
    <Footer/>
    </section>
  )
}

