'use client';
import Image from 'next/image'
import {Postulantes} from '../../../../public/postulantes/postulantes'

interface TarjetaProps {
  nombre: string;
  edad: string;
  link: string;
  skills: string;
  fulltime: string;
  movilidad: string;
  imagen: string;
}

function Tarjeta({ nombre, edad, link, skills, fulltime, movilidad, imagen }: TarjetaProps) {

  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <Image
        loader={() => imagen}
        unoptimized={true}
        src={imagen} alt={''} width='200' height='200'
      />
      <div className='descripcion-tarjeta'>
        <p>Edad:{edad}</p>
        <p>Link al CV:{link}</p>
        <p>Skills:{skills}</p>
        <p>Busca fulltime:{fulltime}</p>
        <p>Movilidad:{movilidad}</p>
      </div>
    </div>
  );
}

interface ListaDeTarjetasProps {
  datosTarjetas: TarjetaProps[];
}

function ListaDeTarjetas({ datosTarjetas }: ListaDeTarjetasProps) {
  return (
    <div id="listadoTarjetas" className="lista-de-tarjetas">
      {datosTarjetas.map((tarjeta, index) => (
        <Tarjeta key={index} nombre={tarjeta.nombre} edad={tarjeta.edad} link={tarjeta.link} skills={tarjeta.skills}
          fulltime={tarjeta.fulltime} movilidad={tarjeta.movilidad} imagen={tarjeta.imagen} />
      ))}
    </div>
  );
}

function agregarTarjeta() {
  //divListadoTarjetas = document.getElementById('listadoTarjetas');
  
}

function App() {
  const tarjetas: TarjetaProps[] = [
    { nombre: 'Rubeus Hagrid', edad: '62', link: '', skills: 'Fuerza fisica, Resistencia magica', fulltime: '', movilidad: '', imagen: '/postulantes/hagrid.jpg' },
    { nombre: 'Ron Weasley', edad: '16', link: '', skills: 'Bueno en el ajedrez, Mente estrategica', fulltime: '', movilidad: '', imagen: '/postulantes/ron.jpg' },
    { nombre: 'Severus Snape', edad: '54', link: '', skills: 'Maestro de pociones, Defensa contra artes oscuras, director de Hogwarts', fulltime: '', movilidad: '', imagen: '/postulantes/snape.jpg' },
  ];//nombre, edad, link a CV, Fulltime, Movilidad
/*w */
  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      alert('Agregaste una tarjeta');
      agregarTarjeta();
      event.preventDefault();
    }
  }

  return (
    <div className="App cuerpo">
      <ListaDeTarjetas datosTarjetas={tarjetas} />

      <button onClick={clickHandler()}>Agregar Postulacion</button>
    </div>
  );
}

export const Postulaciones = () => {
  return (
    App()
  )
}