"use client";
import { useState } from "react";
//componente card
export function CardCandidatos(props: any) {
  //destructuracion de props
  const {
    srcImagen,
    cardName,
    cardApellido,
    cardEdad,
    cardMovilidad,
    cardDisponibilidad,
    cardSkill
  } = props;
  //estado : contrato. utilizado para contratar o despedir candidato
  const [contrato, setContrato] = useState<String>("Contratar");
  const contratar = () => {
    if (contrato == "Contratar") {
      setContrato("Rechazar");
    } else {
      setContrato("Contratar");
    }
  };
  const disponibilidad: string = cardDisponibilidad ? "full Time" : "Part Time";

  const movilidad: string = cardMovilidad ? "si" : "no";
  return (
  <div>
      <img src={srcImagen} alt="Imagen del candidato" />
      <h2>{cardName} {cardApellido}</h2>
      <p>Edad: {cardEdad}</p>
      <p>Movilidad: {movilidad}</p>
      <p>Disponibilidad: {disponibilidad}</p>
      <p>Habilidades: {cardSkill}</p>
      <button onClick={contratar}>{contrato}</button>
    </div>
 )
}