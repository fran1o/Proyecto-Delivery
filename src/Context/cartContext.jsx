import React from 'react'
import { useState } from 'react';
import { createContext } from "react";
import { useContext } from "react";
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}

function CartContextProvider({children}){

//Variables de estado de los pedidos

const db = getFirestore()
  
const [orders, setOrders] = useState([])
  
//Traigo la info del pedido de mi base de datos y la guardo en setOrders
    
    const queryCollection = collection(db,'pedidos')
    
      getDocs(queryCollection)
      .then((respuesta) => 
              setOrders(
                respuesta.docs.map((order) => ({id: order.id, ...order.data() } ))
              ))
      .catch((err) => console.log(err))

//Eliminar pedido

const eliminarPedido = async (id) => {
    await deleteDoc(doc(db, 'pedidos', id))
  }


    return <cartContext.Provider value={{ orders, eliminarPedido }} >
                {children}
            </cartContext.Provider>

}

export default CartContextProvider