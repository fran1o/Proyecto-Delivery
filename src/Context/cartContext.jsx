import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from "react";
import { useContext } from "react";
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}

function CartContextProvider({children}){

  const db = getFirestore()
  
//Variables de estado de los pedidos
  
const [orders, setOrders] = useState([])
  
//Traigo la info del pedido de mi base de datos 

  useEffect(() => {
    const db = getFirestore()

    const getOrders = async () =>{

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
    getOrders()

  },[orders])

//Eliminar pedido

const eliminarPedido = async (id) => {
    await deleteDoc(doc(db, 'pedidos', id))
  }



    return <cartContext.Provider value={{ orders, eliminarPedido }} >
                {children}
            </cartContext.Provider>

}

export default CartContextProvider