import React, { useEffect, useState, createContext } from "react";
import { ejemploFormus as data } from "../data/borrar";

export const FormularioContext = createContext();

//base del formulaio
const initialFormu = {
  title: "",
  descripcion: "",
  segmentos: [],
};

//base de los segmentos -> contendran las rpeguntas , las opciones y las respuestas correctas
const initialSegmentos = {
  pregunta: "",
  opciones: [],
  correcta: [],
};

export function FormularioContextProvider(props) {
  //array de Formularios
  const [formularios, setFormularios] = useState([]);

  //un Formualrio
  const [formu, setFormu] = useState(initialFormu);

  //los segmentos del formularios
  const [segmentos, setSegmentos] = useState(initialSegmentos);

  //Manejar 'formularios'
  //Post a la API
  function createFormulario(formulario) {
    setFormularios(...formularios, formulario);
  }

  //Delete formulario de la API
  function deleteFormulario(formularioId) {
    setFormularios(
      formularios.filter((formulario) => formulario.id !== formularioId)
    );
  }

  //Manejar 'formu'

  // Manejar 'segmentos'

  //se cargan los formualrios de la API
  useEffect(() => {
    setFormularios(data);
  }, []);

  return (
    <FormularioContext.Provider
      value={{
        formularios,
        createFormulario,
        deleteFormulario,
        initialSegmentos,
        setSegmentos,
        segmentos
      }}
    >
      {props.children}
    </FormularioContext.Provider>
  );
}
