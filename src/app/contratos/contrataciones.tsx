import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './componentes_contratos/header'
import { Body } from './componentes_contratos/body'
import { Footer } from './componentes_contratos/footer'


export default function Home() {
  return (
    <main>
      <Header />
      <Body />
      <Footer />
    </main>

  )
}