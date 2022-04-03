import React, { useEffect, useState } from 'react'
import Tabla from './Tabla'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../CSS/form.module.css'


const TablaPedido = () => {

//Variables de estado

  const [listRepartidores, setListRepartidores] = useState([])

//Conecto firebase y llamo a esa collection

  const db = getFirestore()
  const queryCollection = collection(db, 'repartidores')

//Traigo la info del repartidor de mi base de datos y la guardo en setListRepartidores

  getDocs(queryCollection)
  .then((resp) => 
          setListRepartidores(
            resp.docs.map((rep) => ({id: rep.id, ...rep.data() } ))
          ))
  .catch((err) => console.log(err))

//loading..

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
                listRepartidores.map(repartidor => 
                <Tabla key={repartidor.id}
                      id={repartidor.id}
                      nombre={repartidor.nombre}
                      cambio={repartidor.cambio}
                      fecha={repartidor.fecha} 
                />)
              }           
  
  </>
}

export default TablaPedido
