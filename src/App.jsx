
import Footer from "./components/Footer"

import Header from "./components/header/Header";
import Formulario from "./components/formulario/Fomulario";
import DiseñoCrearFormulario from './components/DiseñoCrearFormulario';



import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Header />
      <DiseñoCrearFormulario/>
      <Footer/>

    </div>
  );
}

export default App;
