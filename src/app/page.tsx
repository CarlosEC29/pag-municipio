import Image from 'next/image'
import './layout'
import { Header } from './(componentes)/generales/header'
import { Titulo } from './(componentes)/home/header'
import { Body } from './(componentes)/home/body'
import { Footer } from './(componentes)/generales/footer'
import { Aplicar } from './(componentes)/home/footer'
import { barraLateral } from './(componentes)/generales/barraMenuLateral/barraLateral'


export default function Home() {
  return (
    <section>
	  <Header/>
    <Titulo/>
    <barraLateral/>
    <Body/>
    <Aplicar/>
    <Footer/>
    </section>
  )
}

