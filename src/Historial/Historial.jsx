import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../CSS/form.module.css'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Table from 'react-bootstrap/Table'

const PedidosFirebase = () => {

  const [orders, setOrders] = useState([])
  
//Funciones para mostrar los pedidos

  const db = getFirestore()

  const queryCollection = collection(db, 'pedidos')

//Traigo la info del repartidor de mi base de datos y la guardo en setListRepartidores

  getDocs(queryCollection)
  .then((respuesta) => 
          setOrders(
            respuesta.docs.map((order) => ({id: order.id, ...order.data() } ))
          ))
  .catch((err) => console.log(err))

//loading..

  const [loading, setLoading] = useState(true)
    
    
  useEffect(() => {
    setTimeout(() =>{
        setLoading(false);
    }, 2000)
  }, [])

  
  return <>
        {
          loading ? <Spinner className={styles.loading} animation="border" role="status">
                          <span></span>
                    </Spinner>
                  :
                  orders.map(ped =>
                    <Table key={ped.id} striped bordered hover>
                    <thead>
                      <tr>
                        <th>{ped.nombre}</th>
                        <th>Pedido</th>
                        <th>Precio</th>
                        <th>Destino</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>{ped.pedido}</td>
                        <td>{ped.precio}</td>
                        <td>{ped.destino}</td>
                      </tr>
                    </tbody>
                  </Table>
                  )
        }

  </>
}

export default PedidosFirebase