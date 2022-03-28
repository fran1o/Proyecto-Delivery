import React from 'react'
import styles from '../CSS/form.module.css'
import { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { addDoc, collection, getFirestore } from 'firebase/firestore'


const Tabla = ({id, nombre, cambio, fecha}) => {

  const db = getFirestore()

  const infoInicialPedido = {
    pedido:'',
    precio:'',
    destino:''
  }

  const [infoPedido, setInfoPedido] = useState(infoInicialPedido)

  const capturarPedido = (event) =>{
    setInfoPedido({
      ...infoPedido,
      [event.target.name] : event.target.value
    })

  }

  const realizarPedido = async (e) => {
    e.preventDefault();
    //console.log(infoPedido)

    try {
      await addDoc(collection(db,'pedidos'),{
        ...infoPedido, nombre, cambio, fecha
      })
      
    } catch (error) {
      console.log(error)
    
    }

    setInfoPedido({...infoInicialPedido})
  }

    
  return <>

  { <div>
      <ListGroup key={id} as="ul">
          <ListGroup.Item as="li" active>
            {nombre}
          </ListGroup.Item>
        <ListGroup.Item as="li">Cambio inicial: ${cambio}</ListGroup.Item>
        <ListGroup.Item as="li">
          {fecha}
        </ListGroup.Item>
      </ListGroup>

      <br></br>

      <div className={styles.divFormPedido}>
      <form onSubmit={realizarPedido}>
            <div className='card card-body'>
              <div className='form-group' >
  
              <input type='text' name='pedido' className='form-control mb-3' placeholder='Pedido' onChange={capturarPedido} value={infoPedido.pedido} /> 
              <input type='text' name='precio' className='form-control mb-3' placeholder='Ingrese solo numeros, sin $' onChange={capturarPedido} value={infoPedido.precio}/>
              <input type='text' name='destino' className='form-control mb-3' placeholder='Destino' onChange={capturarPedido} value={infoPedido.destino} />
  
              </div>
  
              <button className='btn btn-danger'>Realizar pedido</button>
  
            </div>
          </form>
  
    </div>

  </div>
  


  }
  
  </>
}

export default Tabla