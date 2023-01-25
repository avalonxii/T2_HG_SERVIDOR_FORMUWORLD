
import Header from './components/header/Header'

import "bootstrap/dist/css/bootstrap.min.css";
import CabeceraFormu from './components/formulario/CabeceraFormu';
import Preguntas from './components/formulario/Preguntas';


function App() {
  return (
    <div className="App">
      <Header />
      <CabeceraFormu />
      <Preguntas />
    </div>
  );
}

export default App;
