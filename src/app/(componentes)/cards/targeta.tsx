"use client";
import React, { useState } from "react";

export const Targeta = (props: any) => {
  const { titulo, postulacionClicked, postulado, trabajos: Trabajos } = props;
  const [btnPostulacion, setBtnPostulacion] = useState<string>(
    postulado ? "despostular" : "postular"
  );

  return (
    <div className="cart-job">
      <h2>{titulo}</h2>
      <hr />
      <button
        className="btn btn-info"
        key={titulo}
        onClick={() => postulacionClicked(titulo)}
      >
        {btnPostulacion}
      </button>
      <div><Trabajos /></div>
    </div>
  );
};
