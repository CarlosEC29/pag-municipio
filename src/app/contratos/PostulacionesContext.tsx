import Postulacion from "../model/Postulacion";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { Defensas } from "../(componentes)/empleos/empleoDefensa";
import { Mascotas } from "../(componentes)/empleos/empleoMascotas";
import { Moggles } from "../(componentes)/empleos/empleosMoggles";
import { Runas } from "../(componentes)/empleos/empleoRunas";

const postInformation = {
  postulaciones: [],
  postulacionesCompletas: [],
  postulacion: () => { }
};

const Empleos = [
  { id: 1, titulo: "Defensas", trabajos: Defensas },
  { id: 2, titulo: "Mascotas", trabajos: Mascotas },
  { id: 3, titulo: "Moggles", trabajos: Moggles },
  { id: 4, titulo: "Runas", trabajos: Runas },
];

export const PostulacionesContext = createContext<{
  postulaciones: Postulacion[],
  postulacionesCompletas: Postulacion[],
  postulacion: Function,
}>(postInformation);

export const PostulacionesContextProvider = (props: any) => {
  const { children }: { children: React.ReactNode } = props;

  const [postulaciones, setPostulaciones] = useState<Postulacion[]>([]);
  const [postulacionesCompletas, setPostulacionesCompletas] = useState<Postulacion[]>([]);

  useEffect(() => {
    const misJobs: Postulacion[] = Empleos.map((componente) => ({
      id: componente.id,
      nombre: componente.titulo,
      trabajos: componente.trabajos,
      cantidadPostulantes: 0,
      maximoPostulantes: 5, // o cualquier otro valor que desees
    }));
    setPostulaciones(misJobs);
  }, []);

  const postulacion: Function = (post: Postulacion) => {
    post.cantidadPostulantes += 1;
    if (post.cantidadPostulantes == post.maximoPostulantes) {
      const newPostulaciones = postulaciones.filter((pos) => pos.nombre != post.nombre);
      setPostulaciones(newPostulaciones);
      setPostulacionesCompletas([...postulacionesCompletas, post]);
    } else {
      setPostulaciones([...postulaciones]);
    }
  }

  const valueMemo: {
    postulaciones: Postulacion[], postulacionesCompletas: Postulacion[], postulacion: Function,
  } = useMemo(() => ({
    postulaciones,
    postulacionesCompletas,
    postulacion,
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [postulaciones, postulacionesCompletas]);

  return (
    <PostulacionesContext.Provider value={valueMemo}>
      {children}
    </PostulacionesContext.Provider>
  )
}
