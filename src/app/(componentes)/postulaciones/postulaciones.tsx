"use client"
import { useState } from 'react';
import Image from 'next/image'
import { Postulantes } from '../../../../public/postulantes/postulantes';
import { useRef } from 'react';

interface TarjetaProps {
  nombre: string;
  edad: string;
  skills: string;
  fulltime: string;
  movilidad: string;
  imagen: string;
}

function Tarjeta({ nombre, edad, skills, fulltime, movilidad, imagen }: TarjetaProps) {
  const [contrato, setContrato] = useState<String>("Contratar");
  const contratar = () => {
    if (contrato == "Contratar") {
      setContrato("Rechazar");
    } else {
      setContrato("Contratar");
    }
  };
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
        <p>Skills:{skills}</p>
        <p>Busca fulltime:{fulltime}</p>
        <p>Movilidad:{movilidad}</p>
        <button onClick={contratar}>{contrato}</button>
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
        <Tarjeta key={index} nombre={tarjeta.nombre} edad={tarjeta.edad} skills={tarjeta.skills}
          fulltime={tarjeta.fulltime} movilidad={tarjeta.movilidad} imagen={tarjeta.imagen} />
      ))}
    </div>
  );
}

function App() {

  const [tarjetas, setTarjetas] = useState<TarjetaProps[]>([
    { nombre: 'Rubeus Hagrid', edad: '62', skills: 'Fuerza fisica, Resistencia magica', fulltime: '', movilidad: '', imagen: '/postulantes/hagrid.jpg' },
    { nombre: 'Ron Weasley', edad: '16', skills: 'Bueno en el ajedrez, Mente estrategica', fulltime: '', movilidad: '', imagen: '/postulantes/ron.jpg' },
    { nombre: 'Severus Snape', edad: '54', skills: 'Maestro de pociones, Defensa contra artes oscuras, director de Hogwarts', fulltime: '', movilidad: '', imagen: '/postulantes/snape.jpg' },
  ]);

  const indicePostulante = useRef(0);

    const agregarTarjeta = () => {
      if (indicePostulante.current < Postulantes.length) {
        const postulante = Postulantes[indicePostulante.current];
        const nuevaTarjeta = {
        nombre: postulante.Nombre,
        edad: postulante.Edad.toString(),
        skills: postulante.skills,
        fulltime: postulante.FullTime,
        movilidad: postulante.Movilidad,
        imagen: postulante.Imagen,
      };
      setTarjetas([...tarjetas, nuevaTarjeta]);
      indicePostulante.current++;
    }
  }

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
