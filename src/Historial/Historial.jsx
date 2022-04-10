import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../CSS/form.module.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useCartContext } from '../Context/cartContext'

const PedidosFirebase = () => {

  const {orders, eliminarPedido} = useCartContext()
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
                      orders.map(ped => <Table key={ped.id} striped bordered hover variant="dark">
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