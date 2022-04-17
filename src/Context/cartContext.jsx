import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from "react";
import { useContext } from "react";
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}

function CartContextProvider({children}){

  const [mostrarPedidos, setMostrarPedidos] = useState(true)
  
  const [orders, setOrders] = useState([])
  const db = getFirestore()

  useEffect(() => {
    

    const db = getFirestore()
  
    const getPedidos = async () =>{
  
      try {
        const querySnapshot = await getDocs(collection(db,'pedidos'))
        const pedidos = []
  
        querySnapshot.forEach((doc) => {
          pedidos.push({ ...doc.data(), id: doc.id })
        })
        setOrders(pedidos)
        
      } catch (error) {
        console.log(error)
      }
    }
    getPedidos()
  
  }, [mostrarPedidos]);





//Eliminar pedido

  const eliminarPedido = async (id) => {
    await deleteDoc(doc(db, 'pedidos', id))

    setMostrarPedidos(!mostrarPedidos)
  }


//Actualizar historial

  const actualizarHistorial = () => {

    setMostrarPedidos(!mostrarPedidos)
    
  }



    return <cartContext.Provider value={{ orders, eliminarPedido, actualizarHistorial}} >
                {children}
            </cartContext.Provider>

}

export default CartContextProvider