import React from 'react'
import { useCartContext } from '../Context/cartContext'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import styles from '../CSS/form.module.css'

const ItemHistorial = () => {

    const {orders, eliminarPedido} = useCartContext()

  return <>

  {orders.length !== 0 ? <div>
    {orders.map(ped => <Table key={ped.id} striped bordered hover variant="dark">
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
</Table>)}
  </div>
  
    :
    <h1 className={styles.noPedidos}>No hay pedidos</h1>
    }
  
  
  </>
}

export default ItemHistorial