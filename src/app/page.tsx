import Image from 'next/image'
import './layout'
import { Header } from './(componentes)/generales/header'
import { Titulo } from './(componentes)/home/header'
import { Body } from './(componentes)/home/body'
import { Footer } from './(componentes)/generales/footer'
import { Aplicar } from './(componentes)/home/footer'


export default function Home() {
  return (
    <section>
	  <Header/>
    <Titulo/>
    <Body/>
    <Aplicar/>
    <Footer/>
    </section>
  )
}

