import React, { createContext, useState } from "react";

export const FormuContext = createContext();

const formu = {
  titulo: "",
  descripcion: "",
  seccion: null
}

export function FormualrioContextProvider(props) {


  return (
    <FormuContext.Provider value={{ formu }}>
      {props.children}
    </FormuContext.Provider>
  );
}