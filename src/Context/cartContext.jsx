import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from "react";
import { useContext } from "react";
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}

function CartContextProvider({children}){

  const [orders, setOrders] = useState([])
  const db = getFirestore()

  useEffect(() => {
    const db = getFirestore()
  
  //Traigo la info del pedido de mi base de datos y la guardo en setOrders
  
      const queryCollection = collection(db,'pedidos')

  
        getDocs(queryCollection)
        .then((respuesta) => 
                setOrders(
                  respuesta.docs.map((order) => ({id: order.id, ...order.data() } ))
                ))
        .catch((err) => console.log(err))

  },[])
  

//Eliminar pedido

const eliminarPedido = async (id) => {
    await deleteDoc(doc(db, 'pedidos', id))
  }



    return <cartContext.Provider value={{ orders, eliminarPedido }} >
                {children}
            </cartContext.Provider>

}

export default CartContextProvider