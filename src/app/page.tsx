import Image from 'next/image'
import '../app/layout'
import { Header } from './componentes_home/header'
import { Postulaciones } from './postulaciones'
import { Footer } from './componentes_home/footer'


/*export default function Home() {
  return (
    <main>
	  <Titulo/>
    </main>
  )
}*/

export default function Home() {
  return (
    <main>
    <Header/>
	  <Postulaciones/>
    <Footer/>
    </main>
  )
}

