import React from 'react'
import Table from 'react-bootstrap/Table'
import styles from '../CSS/form.module.css'
import { useCartContext } from '../Context/cartContext'

const ItemDetail = ({repartidores}) => {

  const {orders} = useCartContext()

  const pedidosFiltrados = orders.filter(pedido => pedido.idRep === repartidores.id);

  const totalSumary = () => {

    return pedidosFiltrados.reduce((acum, ped) => ped.precio = (Number(ped.precio) + acum), 0)
}


  return <>
                <Table key={repartidores.id} striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>{repartidores.nombre}</th>
                          <th>Pedido</th>
                          <th>Precio</th>
                          <th>Destino</th>
                        </tr>
                      </thead>
                      {
                        pedidosFiltrados.map(pedido => <tbody key={pedido.id}>
                          <tr>
                            <th></th>
                            <th className={styles.pedidoDestino}>{pedido.pedido}</th>
                            <th>${pedido.precio}</th>
                            <th className={styles.pedidoDestino}>{pedido.destino}</th>
                          </tr>
                        </tbody>)
                      }
                      </Table>
                      
                         <h3 className={styles.total} >El total ralizado por {repartidores.nombre} es: ${totalSumary()} </h3>
  </>
}

export default ItemDetail