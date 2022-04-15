import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../CSS/form.module.css'
import ItemHistorial from './ItemHistorial'


const PedidosFirebase = () => {

//loading..

  const [loading, setLoading] = useState(true)
    
    
  useEffect(() => {
    setTimeout(() =>{
        setLoading(false);
    }, 2000)
  }, [])


      return <>
            {
              loading ? <Spinner className={styles.loading} animation="border" role="status">
                              <span></span>
                        </Spinner>
                      :
                                                         
                      <ItemHistorial />
            }
            
      
      </>

  }

export default PedidosFirebase