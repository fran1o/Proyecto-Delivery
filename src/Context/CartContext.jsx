import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}

function CartContextProvider ({children}) {

  const [infoRepartidor, setInfoRepartidor] = useState({
    
    nombre:'',
    cambio:'',
    fecha:'',

  })

  const handleChange = (event) => {

    setInfoRepartidor({
      ...infoRepartidor,
      [event.target.name] : event.target.value
    })
  }

  const guardarDatos = (e) =>{
    e.preventDefault()
    console.log(infoRepartidor)
    setButtonForm(false)
  }

  const [buttonForm, setButtonForm] = useState(true)


    

      return <cartContext.Provider value={ {guardarDatos, handleChange, infoRepartidor, buttonForm } }>
          {children}
      </cartContext.Provider>

}

export default CartContextProvider

