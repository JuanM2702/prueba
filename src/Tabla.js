import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import CarritoContext from "./CarritoContext";

const Tabla = (props) => {
  const navigate = useNavigate();
  const carrito = useContext(CarritoContext);

  const [busqueda, setBusqueda] = useState("");

  return (
    <table className="table table-sm table-bordered ">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.estadoPeticion === "cargando" && (
          <tr>
            <td colSpan={6}>Cargando...</td>
          </tr>
        )}

        {props.estadoPeticion === "listo" && (
          <tr>
            <td colSpan={6}>
              <input
                type="text"
                placeholder="Buscar"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </td>
          </tr>
        )}

        {props.usuarios &&
          props.usuarios
            .filter((usuario) =>
              usuario.name.toLowerCase().includes(busqueda.toLowerCase())
            )
            .map((usuarios) => (
              <tr key={usuarios.sku}>
                <td>
                  {usuarios.name}
                  <hr />
                  sku: {usuarios.sku}
                </td>
                <td>{usuarios.CategoryName}</td>
                <td>
                  <img
                    src={usuarios.imageUrl}
                    alt={usuarios.name}
                    width={200}
                  />
                </td>
                <td>{usuarios.price}</td>
                <th>
                  <div>
                    <button
                      onClick={() => navigate(`/detalle/${usuarios.sku}`)}
                    >
                      Ver mas
                    </button>
                  </div>
                  <div>
                    <button onClick={() => carrito.agregar(usuarios)}>
                      Agregar al carrito
                    </button>
                  </div>
                </th>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default Tabla;
