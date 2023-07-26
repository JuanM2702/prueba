import { useEffect, useState, useContext } from "react";

import axios from "axios";
import { useParams } from "react-router";

import Carrito from "../Carrito";
import CarritoContext from "../CarritoContext";

const Detalle = () => {
  const carrito = useContext(CarritoContext);
  const params = useParams();

  const [detalle, setDetalle] = useState(null);
  const [estadoPeticion, setEstadoPeticion] = useState("inactiva");

  const peticionGet = async () => {
    setEstadoPeticion("cargando");
    axios
      .get("https://eock031zmoorept.m.pipedream.net/v1/products")
      .then((Response) => {
        const el = Response.data.find((e) => e.sku == params.sku);
        setDetalle(el);
        setEstadoPeticion("listo");
      })
      .catch((error) => {
        console.log(error);
        setEstadoPeticion("error");
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div>
      {detalle !== null && (
        <>
          <h1>{detalle.name}</h1>
          <td>{detalle.CategoryName}</td>
          <tr>
          <td>
                  <img
                    src={detalle.imageUrl}
                    alt={detalle.name}
                    width={500}
                    height={400}

                    
                  />
                  </td>
                  <p>{detalle.description}</p>
                  <br></br>

                  <td>{detalle.price}</td>
                  
          </tr>
<hr>

</hr>
          <button onClick={() => carrito.agregar(detalle)}>
            Agregar al carrito
          </button>
        </>
      )}

      <Carrito />
    </div>
  );
};

export default Detalle;
