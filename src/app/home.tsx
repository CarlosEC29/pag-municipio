import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './componentes_home/header'
import { Body } from './componentes_home/body'
import { Footer } from './componentes_home/footer'
export default function Home() {
  return (
    <main>
	  <Header/>
    <Body/>
    <Footer/>
    </main>
  )
}
