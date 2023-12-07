"use client";
import { useEffect, useState, useContext } from "react";
import { Targeta } from "../(componentes)/cards/targeta";
import { CardContainer } from "../(componentes)/cardContainer/cardContainer";
import { PostulacionesContextProvider } from "./PostulacionesContext";
import { PostulacionesDisponibles } from "./PostulacionesDisponibles";
import { PostulacionesCompletas } from "./PostulacionesCompletas";

export const PostulacionesEctx = () => {
  return (
    <>
        <main>
          <PostulacionesContextProvider>
            <div className="d-flex flex-row">
              <div>
                <CardContainer>
                  <PostulacionesDisponibles />
                </CardContainer>
                <CardContainer>
                  <PostulacionesCompletas />
                </CardContainer>
              </div>
            </div>
          </PostulacionesContextProvider>
      </main>
    </>
  );
}