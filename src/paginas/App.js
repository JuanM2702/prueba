import './App.css';
import { useEffect, useState } from 'react';

import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import Tabla from "../Tabla"
import Carrito from "../Carrito"

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [estadoPeticion, setEstadoPeticion] = useState("inactiva")

  const peticionGet = async() => {
    setEstadoPeticion("cargando")
    axios.get("https://eock031zmoorept.m.pipedream.net/v1/products")
      .then(Response => {
        setUsuarios(Response.data);
        setTablaUsuarios(Response.data);
        setEstadoPeticion("listo")

      })
      .catch(error => {
        console.log(error);
        setEstadoPeticion("error")

      })

     
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div className="App">
      <h1> Estos son nuestros productos </h1>
      <div className='tabla responsive'>
        <Tabla usuarios={usuarios} estadoPeticion={estadoPeticion} />

        <Carrito />
      </div>
    </div>
    
  );
              
}

export default App;
