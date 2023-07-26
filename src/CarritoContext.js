import React, { useState } from "react"

const CarritoContext = React.createContext([]);

export const CarritoProvider = (props) => {

  const [elementos, setElementos] = useState([])

  const agregar = (elemento) => {
    setElementos([...elementos, elemento])
  }

  return (
    <CarritoContext.Provider value={{ elementos, agregar }}>
      {props.children}
    </CarritoContext.Provider>
  )
}

export default CarritoContext
