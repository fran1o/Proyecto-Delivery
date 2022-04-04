import React from 'react'
import Table from 'react-bootstrap/Table'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import {useState } from 'react'

const ItemDetail = ({repartidores}) => {

  const db = getFirestore()
  const [pedidosParaFiltrar, setPedidosParaFiltrar] = useState([])

  const queryCollection = collection(db,'pedidos')
    
      getDocs(queryCollection)
      .then((respuesta) => 
              setPedidosParaFiltrar(
                respuesta.docs.map((order) => ({id: order.id, ...order.data() } ))
              ))
      .catch((err) => console.log(err))

  const pedidosFiltrados = pedidosParaFiltrar.filter(pedido => pedido.idRep === repartidores.id);

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
                            <th>{pedido.pedido}</th>
                            <th>${pedido.precio}</th>
                            <th>{pedido.destino}</th>
                          </tr>
                        </tbody>)
                      }
              
                      </Table>
                      
                         <h3>{`El total ralizado por ${repartidores.nombre} es: $ ${totalSumary()}`} </h3>
  </>
}

export default ItemDetail