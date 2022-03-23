import React from 'react'
import styles from '../CSS/form.module.css'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useCartContext } from '../Context/CartContext'


const Formulario = () => {

    const { guardarDatos, handleChange, buttonForm } = useCartContext()
    
    

  return <>

            <Form className={styles.divForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><h6>Nombre del Repartidor</h6></Form.Label>
                   <br></br>
                <Form.Control type="text" placeholder="Nombre" name='nombre' onChange={handleChange} />
                  <Form.Text className="text-muted">
                    Ingrese el nombre de quien lleva los siguientes pedidos
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><h6>Ingrese el cambio en $ que tiene el repartidor</h6></Form.Label>
                    <br></br>
                  <Form.Control type="text" placeholder="Ingrese solo numeros" name='cambio' onChange={handleChange} />
                </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><h6>Ingrese la fecha de hoy </h6></Form.Label>
                    <br></br>
                  <Form.Control type="text" placeholder="**/**/****" name='fecha' onChange={handleChange}  />
                </Form.Group>
                  <br></br>

                    {
                      buttonForm ? <Button onClick={e => guardarDatos(e)} variant="success" >
                                                      Guardar datos del repartidor
                                                  </Button>
                                                :
                                                <Link to='/pedidos'>
                                                  <Button variant="danger" >
                                                    Comenzar pedidos
                                                  </Button>
                                                </Link>
                    
                  
                  }
                    
    

              </Form>
  
  
  
  
  </>
}

export default Formulario