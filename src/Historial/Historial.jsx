import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../CSS/form.module.css'
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const PedidosFirebase = () => {
//loading..

  const [loading, setLoading] = useState(true)
    
    
  useEffect(() => {
    setTimeout(() =>{
        setLoading(false);
    }, 2000)
  }, [])



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

//Filtrando mis pedidos 

const misPedidos = [...orders]

//Eliminar pedido

const eliminarPedido = async (id) => {
  await deleteDoc(doc(db, 'pedidos', id))
}


      return <>
            {
              loading ? <Spinner className={styles.loading} animation="border" role="status">
                              <span></span>
                        </Spinner>
                      :                                      
                      misPedidos.map(ped => <Table key={ped.id} striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>Repartidor</th>
                          <th>Pedido</th>
                          <th>Precio</th>
                          <th>Destino</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{ped.nombre}</td>
                          <td>{ped.pedido}</td>
                          <td>${ped.precio}</td>
                          <td>{ped.destino}</td>
                        </tr>
                        <tr>
                          <td colSpan={4}> <Button variant='danger' onClick={() => eliminarPedido(ped.id)} >Eliminar pedido</Button> </td>
                        </tr>
                      </tbody>
                    </Table>)
            }
      
      </>

  }

export default PedidosFirebase