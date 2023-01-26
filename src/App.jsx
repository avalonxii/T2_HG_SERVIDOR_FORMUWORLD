import BarraNavegacion from './components/Navegacion';
import CardB from "./components/formulario/Card";
import NavScrollExample from './components/Navegacion';
import Formulario from './components/Fomulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header'

import "bootstrap/dist/css/bootstrap.min.css";
import CabeceraFormu from './components/formulario/CabeceraFormu';
import Preguntas from './components/formulario/Preguntas';


function App() {
  return (
    <div className="App">

      <BarraNavegacion />
      <CardB />
      <NavScrollExample />

      <Formulario />

      <Header />
      <CabeceraFormu />
      <Preguntas />
    </div>
  );
}

export default App;
