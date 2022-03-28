import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../CSS/form.module.css'

const Historial = () => {

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
                  <h1>HISTORIAL</h1>
        }

  </>
}

export default Historial