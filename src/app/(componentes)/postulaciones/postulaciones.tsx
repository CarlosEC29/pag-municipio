'use client';
import Image from 'next/image'

interface TarjetaProps {
    titulo: string;
    descripcion: string;
    imagen: string;
  }
  
  function Tarjeta({ titulo, descripcion, imagen }: TarjetaProps) {

    
    const mostrarMensaje = () => {
      alert('CV Cargado, muchas gracias!');
    };
  
    return (
      <div className="tarjeta">
        <h2>{titulo}</h2>
        <Image   
        loader={()=>imagen}
        unoptimized={true}
          src={imagen} alt={''} width='200' height='200'
        />
        <p>{descripcion}</p>
        <button onClick={mostrarMensaje}>Cargar CV</button>
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
          <Tarjeta key={index} titulo={tarjeta.titulo} descripcion={tarjeta.descripcion} imagen={tarjeta.imagen} />
        ))}
      </div>
    );
  }
  
  function App() {
    const tarjetas: TarjetaProps[] = [
      { titulo: 'Creador de pociones', descripcion: 'Empleador: Escuela de Hogwarts<br>Carga Horaria: 8:00hs a 12:00hs<br>', imagen: '/imagen1.png' },
      { titulo: 'Jardinero de mandragoras', descripcion: 'Esta es la segunda tarjeta.', imagen: '/imagen2.jpg' },
      { titulo: 'Cazador de dementores', descripcion: 'Esta es la tercera tarjeta.', imagen: '/imagen3.jpg' },
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