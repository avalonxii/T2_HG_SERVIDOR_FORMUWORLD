import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './components/Footer';
import CrearFormulario from './components/crearFormulario';

import './index.css';
import DiseñoCrearFormulario from './components/DiseñoCrearFormulario';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
