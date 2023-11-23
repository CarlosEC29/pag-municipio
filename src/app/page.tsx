import Image from 'next/image'
import './layout'
import { Header } from './(componentes)/generales/header'
import { Titulo } from './(componentes)/home/header'
import { Body } from './(componentes)/home/body'
import { Footer } from './(componentes)/generales/footer'
import { Aplicar } from './(componentes)/home/footer'
import { BarraLateral } from './(componentes)/generales/barraMenuLateral/barraLateral'


export default function Home() {
  return (
    <div>
	  <Header/>
    <Titulo/>
    <BarraLateral/>
    <Body/>
    <Aplicar/>
    <Footer/>
    </div>
  )
}

