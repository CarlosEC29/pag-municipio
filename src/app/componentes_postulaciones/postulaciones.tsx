'use client';

interface TarjetaProps {
    titulo: string;
    descripcion: string;
    imagen: string;
  }
  
  function Tarjeta({ titulo, descripcion }: TarjetaProps) {

    
    const mostrarMensaje = () => {
      alert('CV Cargado, muchas gracias!');
    };
    const baseUrlImagenes = '../images/';
    const dirImagen = baseUrlImagenes  ;
  
    return (
      <div className="tarjeta">
        <h2>{titulo}</h2>
        <img alt="" />
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
      { titulo: 'Trabajo 1', descripcion: 'Esta es la primera tarjeta.', imagen: 'imagen1.jpg' },
      { titulo: 'Trabajo 2', descripcion: 'Esta es la segunda tarjeta.', imagen: 'imagen2.jpg' },
      { titulo: 'Trabajo 3', descripcion: 'Esta es la tercera tarjeta.', imagen: 'imagen3.png' },
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