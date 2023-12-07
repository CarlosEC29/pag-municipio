import { Header } from '../(componentes)/generales/header';
import { Titulo } from '../(componentes)/empleos/header';
import { Footer } from '../(componentes)/generales/footer';
import {PostulacionesEctx} from './PostulacionesEctx'

export default function Home() {
  return (
    <main>
      <Header />
      <Titulo />
      <PostulacionesEctx/>

      <Footer />
    </main>

  )
}