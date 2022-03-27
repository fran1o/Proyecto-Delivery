//import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}

function CartContextProvider ({children}) {


  /*const handleChange = (event) => {

    setInfoRepartidor({
      ...infoRepartidor,
      [event.target.name] : event.target.value
    })
  }*/


  /*function agregarRepartidor(persona){
    const index = cartOrdersList.findIndex(repartidor => repartidor.persona.id === persona.id)

    if(index === -1 ){

      setCartOrdersList([{...setCartOrdersList, persona}])

    }else{

      const newCartOrderList = [...cartOrdersList]
      setCartOrdersList(newCartOrderList)


    }*/
    

      return <cartContext.Provider>
          {children}
      </cartContext.Provider>

}

export default CartContextProvider

