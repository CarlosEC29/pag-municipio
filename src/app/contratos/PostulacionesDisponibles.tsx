import React, { useContext } from 'react';
import { PostulacionesContext } from './PostulacionesContext';
import Postulacion from '../model/Postulacion';
import { Targeta } from '../(componentes)/cards/targeta';

export const PostulacionesDisponibles = () => {

  const { postulaciones, postulacion }: { postulaciones: Postulacion[], postulacion: Function } = useContext(PostulacionesContext);

  return (
    <>
      <div className="d-flex flex-row justify-content-evenly">
        {postulaciones.map((job: Postulacion) => (
          <React.Fragment key={`jobItem${job.nombre}`}>
            <Targeta
              titulo={job.nombre}
              key={`jobItem${job.nombre}`}
              postulacionClicked={() => postulacion(job)}
            />
            <div>
              Quedan {job.maximoPostulantes - job.cantidadPostulantes} de {job.maximoPostulantes}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}