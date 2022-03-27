import React from 'react'
import styles from '../CSS/form.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import InfoRepartidor from '../Table/InfoRepartidor'


const Repartidores = () => {

  
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
              <div className={styles.divContainer}>

                <InfoRepartidor />
                
              </div>
              
  
  }
  
  </>
}

export default Repartidores

