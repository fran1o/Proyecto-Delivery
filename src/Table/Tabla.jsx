import React from 'react'
import styles from '../CSS/form.module.css'
import { useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const Tabla = ({id, nombre, cambio, fecha}) => {


//Conecto firebase

  const db = getFirestore()

//Formulario vacio

  const infoInicialPedido = {
    pedido:'',
    precio:'',
    destino:''
  }

//Variables de estado

  const [infoPedido, setInfoPedido] = useState(infoInicialPedido)

//Sustituyo los datos vacios del formulario con los datos del valor del input 

  const capturarPedido = (event) =>{
    setInfoPedido({
      ...infoPedido,
      [event.target.name] : event.target.value
    })

  }

//A ese valor del input lo mando con esta funcion a mi base de datos

  const realizarPedido = async (e) => {
    e.preventDefault();
    //console.log(infoPedido)

    try {
      await addDoc(collection(db,'pedidos'),{
        ...infoPedido, nombre, cambio, fecha, idRep:id
      })
      
    } catch (error) {
      console.log(error)
    
    }

//Uso la infoInicialPedido para vaciar el formulario despues de realizar el envio de datos

    setInfoPedido({...infoInicialPedido})

  }

  return <>

  {
            <div>
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
                            <br></br>

                            <Link to={`/repartidor/${id}`} >
                            <Button>Ver pedidos del repartidor {nombre}</Button>
                            </Link>
                            
                
                          </div>
                        </form>
                
                  </div>

                </div>
              
  }
  
  </>
}

export default Tabla