import Image from 'next/image'
import '../app/layout'
import { Header } from './componentes_home/header'
import { Postulaciones } from './postulaciones'

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
	  <Postulaciones/>
    </main>
  )
}

