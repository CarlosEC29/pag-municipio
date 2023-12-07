import React, { useContext } from 'react';
import { PostulacionesContext } from './PostulacionesContext';
import Postulacion from '../model/Postulacion';
import { Targeta } from '../(componentes)/cards/targeta';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export const PostulacionesCompletas = () => {

  const { postulacionesCompletas, postulacion, }: { postulacionesCompletas: Postulacion[], postulacion: Function } = useContext(PostulacionesContext);

  return (
    <>
      <h3>Postulaciones Completas</h3>
      <div className="d-flex flex-row justify-content-evenly">
        {postulacionesCompletas.map((job: Postulacion) => (
          <React.Fragment key={`jobItem${job.nombre}`}>
            <div>
              <Card>
              <Targeta
                titulo={job.nombre}
                postulacionClicked={() => postulacion(job)}

              />
              
                Se completaro las {job.maximoPostulantes} vacantes.
              </Card>
            </div>

          </React.Fragment>
        ))}
      </div>
    </>
  );
}