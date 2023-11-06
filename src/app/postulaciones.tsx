import Image from 'next/image'
import { Titulo } from './componentes_home/header'

interface TarjetaProps {
  titulo: string;
  descripcion: string;
}

function Tarjeta({ titulo, descripcion }: TarjetaProps) {
  return (

    <div className="tarjeta">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <button>Cargar CV</button>
    </div>
  );
}

interface ListaDeTarjetasProps {
  datosTarjetas: TarjetaProps[];
}

function ListaDeTarjetas({ datosTarjetas }: ListaDeTarjetasProps) {
  return (
    <div className="lista-de-tarjetas">
      {datosTarjetas.map((tarjeta, index) => (
        <Tarjeta key={index} titulo={tarjeta.titulo} descripcion={tarjeta.descripcion} />
      ))}
    </div>
  );
}

function App() {
  const alertaCV = (event: React.MouseEvent<HTMLElement>) => {
    alert("CV CARGADO!");
  };
  
  const tarjetas: TarjetaProps[] = [
    { titulo: 'Trabajo 1', descripcion: 'Esta es la primera tarjeta.' },
    { titulo: 'Trabajo 2', descripcion: 'Esta es la segunda tarjeta.' },
    { titulo: 'Trabajo 3', descripcion: 'Esta es la tercera tarjeta.' },
  ];

  return (
    <div className="App">
      <h1>Lista de trabajos</h1>
      <ListaDeTarjetas datosTarjetas={tarjetas} />
    </div>
  );
}
export const Postulaciones = () => {
  return (
    App()
  )
}