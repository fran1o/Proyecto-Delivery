import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import styles from '../CSS/form.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'



const CreateOrders = () => {


  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() =>{
        setLoading(false);
    }, 2000)
  }, [])

  const [infoRepartidor, setInfoRepartidor] = useState({
    
    nombre:'',
    cambio:'',
    fecha:'',

  })

  const handleChange = (event) => {

    setInfoRepartidor({
      ...infoRepartidor,
      [event.target.name] : event.target.value
    })
  }

  const guardarDatos = (e) =>{
    e.preventDefault()
    console.log(infoRepartidor.nombre + ' ' + infoRepartidor.cambio + ' ' + infoRepartidor.fecha)
    alert('Los datos de ' + infoRepartidor.nombre + ' han sido guardados correctamente, haga click en Comenzar pedidos para continuar.' )
  }


  return <>

    {loading ? <Spinner className={styles.loading} animation="border" role="status">
                    <span></span>
                </Spinner> 
              :
              <Form className={styles.divForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><h6>Nombre</h6></Form.Label>
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
                    
                    <Button onClick={e => guardarDatos(e)} variant="success" >
                        Guardar datos del repartidor
                    </Button>
                  <br></br>
                  <Link to='/pedidos'>
                  <Button variant="danger" >
                     Comenzar pedidos
                  </Button>
                  </Link>

              </Form>
  
  }
  
  </>
}

export default CreateOrders

