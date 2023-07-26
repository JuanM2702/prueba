import { useContext } from "react"

import CarritoContext from "./CarritoContext"

const Carrito = () => {

  const carrito = useContext(CarritoContext)

  return (
    <div className="carrito">
      <h4>Carrito</h4>
      
      {carrito.elementos.length === 0 && (
        <div>Carrito vacio</div>
      )}

      {carrito.elementos.length > 0 && (
        <div>
          <div>Elementos agregados: {carrito.elementos.length}</div>

          <table className='table table-sm table-bordered '>
          {carrito.elementos.map((usuarios) => (
            <tr>
              <td>{usuarios.name} - {usuarios.price}</td>
            </tr>
          ))}
          </table>          
          <div>Total: {carrito.elementos.reduce((acum, actual) => acum + actual.price,0)}</div>
        </div>
      )}


      
    </div>
  )
}

export default Carrito