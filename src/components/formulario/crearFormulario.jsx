import React, { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

export default function CrearFormulario() {
  const [preguntas, setPreguntas] = useState([{ pregunta: "", respuestas: [] }]);

  const handleAddQuestion = () => {
    setPreguntas([...preguntas, { pregunta: "", respuestas: [] }]);
  };

  const handleAddAnswer = (index) => {
    let newPreguntas = [...preguntas];
    newPreguntas[index].respuestas.push({ respuesta: "", correcta: false });
    setPreguntas(newPreguntas);
  };

  const handleSelectAnswer = (indexQuestion, indexAnswer) => {
    let newPreguntas = [...preguntas];
    newPreguntas[indexQuestion].respuestas.forEach((respuesta, i) => {
      respuesta.correcta = indexAnswer === i;
    });
    setPreguntas(newPreguntas);
  };

  return (
    <form onSubmit={handleSubmit}>
      {preguntas.map((pregunta, index) => (
        <div key={index}>
          <MDBInput label={`Pregunta ${index + 1}`} id={`form4Example${index + 1}`}  value={pregunta.pregunta}/>
          {pregunta.respuestas.map((respuesta, i) => (
            <div key={i}>
              <MDBInput label={`Respuesta ${i + 1}`} id={`form4Example${i + 1}`}  value={respuesta.respuesta}/>
              <MDBCheckbox label="Respuesta correcta" onClick={() => handleSelectAnswer(index, i)} checked={respuesta.correcta} />
            </div>
          ))}
          <MDBBtn type='button' onClick={() => handleAddAnswer(index)}>
            Agregar Respuesta
          </MDBBtn>
        </div>
      ))}
      <MDBBtn type='button' onClick={handleAddQuestion}>
        Agregar Pregunta
      </MDBBtn>
      <MDBBtn type='submit' className='mb-4' block>
        Crear Formulario
      </MDBBtn>
    </form>
  );
}
