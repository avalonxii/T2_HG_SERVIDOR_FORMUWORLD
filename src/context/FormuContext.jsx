import React, { createContext, useState } from "react";

export const FormuContext = createContext();

const formu = {
  titulo: "",
  descripcion: "",
  seccion: null
};



export function FormualrioContextProvider(props) {

  const [guardar, setGuardar] = useState(false)

  return (
    <FormuContext.Provider value={{ formu, guardar, setGuardar }}>
      {props.children}
    </FormuContext.Provider>
  );
}