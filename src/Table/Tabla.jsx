import React from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/esm/Button'

const Tabla = ({id, nombre, cambio, fecha}) => {

    console.log(id, nombre, cambio, fecha )

  return <>

  <Table key={id} striped bordered hover variant="dark">

        <thead>
        <tr>
            <th>Pedido</th>
            <th>Precio total del pedido</th>
            <th>Destino</th>
            <th>{nombre}</th>
        </tr>
        </thead>

        <tbody>

        <tr>
        <td><Form.Control type="text" placeholder="Ingrese el pedido" /></td>
        <td><Form.Control type="text" placeholder="Ingrese solo numeros, sin $" /></td>
        <td><Form.Control type="text" placeholder="Destino" /></td>
        <td><Button variant='warning'>Realizar pedido</Button></td>
        </tr>
                

        </tbody>

        </Table>
  
  </>
}

export default Tabla