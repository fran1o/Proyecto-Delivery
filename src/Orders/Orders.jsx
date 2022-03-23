import React from 'react'
import { useCartContext } from '../Context/CartContext'
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'

const Orders = () => {

  const {infoRepartidor} = useCartContext()
  console.log(infoRepartidor)
  

  return <>

          <div>
          <ListGroup as="ul">

            <ListGroup.Item as="li" active>
              {infoRepartidor.nombre}
            </ListGroup.Item>

            <ListGroup.Item as="li">
              Cambio inicial: ${infoRepartidor.cambio}
            </ListGroup.Item>

            <ListGroup.Item as="li">
              Fecha: {infoRepartidor.fecha}
            </ListGroup.Item>
          </ListGroup>
          <br></br>
          <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>{infoRepartidor.nombre}</th>
            <th>Pedido</th>
            <th>Precio total del pedido</th>
            <th>Destino</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
          </div>
      

  </>
  
}

export default Orders