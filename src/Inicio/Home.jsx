import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../CSS/containerNavbar.module.css'
import Spinner from 'react-bootstrap/Spinner'



const Home = () => {

    
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() =>{
            setLoading(false);
        }, 2000)
    }, [])
 

    return (
        <>
          {loading ? <Spinner className={styles.loading} animation="border" role="status">
                      <span></span>
                  </Spinner>
                   :
                   <div className={styles.container}>
                   <h1 className={styles.goodNight}>¡ Buenas Noches !</h1>
                   
                </div>
               }
         
        
        </>
     
    )
}

export default Home