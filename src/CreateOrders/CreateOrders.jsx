import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import styles from '../CSS/form.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import DatePiker from 'react-datepicker'
import Spinner from 'react-bootstrap/Spinner'

const CreateOrders = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() =>{
            setLoading(false);
        }, 2000)
    }, [])

  return <>

    {loading ? <Spinner className={styles.loading} animation="border" role="status">
                    <span></span>
                </Spinner> 
              :
              <Form className={styles.divForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><h6>Nombre</h6></Form.Label>
                   <br></br>
                <Form.Control type="email" placeholder="Nombre" />
                  <Form.Text className="text-muted">
                    Ingrese el nombre de quien lleva los siguientes pedidos
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><h6>Ingrese el cambio en $ que tiene el repartidor</h6></Form.Label>
                    <br></br>
                  <Form.Control type="text" placeholder="Ingrese solo numeros" />
                </Form.Group>
                    <br></br>
                <div>
                  <h6 className={styles.date}>Fecha de hoy:</h6>

                  <DatePiker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                  <br></br>
                <Button variant="danger">
                   Comenzar pedidos 
                </Button>
  
              </Form>
  
  }
  
  
  


  
  
  </>
}

export default CreateOrders