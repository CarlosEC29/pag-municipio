import Image from 'next/image'
import '../app/layout'
import { Titulo } from './componentes_home/header'
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

