import React, { useEffect, useState } from 'react'
import TablaRealizarPedidoxRepartidor from './TablaRealizarPedidoxRepartidor'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../CSS/form.module.css'


const TablaPedido = () => {

//Variables de estado

  const [listRepartidores, setListRepartidores] = useState([])

 //Traigo la info del pedido de mi base de datos 

 useEffect(() => {
  const db = getFirestore()

  const getRepartidores = async () =>{

    try {
      const querySnapshot = await getDocs(collection(db,'repartidores'))
      const repartidores = []

      querySnapshot.forEach((doc) => {
        repartidores.push({ ...doc.data(), id: doc.id })
      })
      setListRepartidores(repartidores)
      
    } catch (error) {
      console.log(error)
    }
  }
  getRepartidores()

},[listRepartidores])

//loading..

  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    setTimeout(() =>{
        setLoading(false);
    }, 2000)
  }, [])


  return <>

      {loading ? <Spinner className={styles.loading} animation="border" role="status">
                    <span></span>
                </Spinner> 
                :
                listRepartidores.map(repartidor => 
                <TablaRealizarPedidoxRepartidor key={repartidor.id}
                      id={repartidor.id}
                      nombre={repartidor.nombre}
                      cambio={repartidor.cambio}
                      fecha={repartidor.fecha} 
                />)
              }           
  
  </>
}

export default TablaPedido
