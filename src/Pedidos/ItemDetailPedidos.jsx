import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from '../CSS/form.module.css'
import ItemDetail from './ItemDetail'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemDetailPedidos = () => {
    const [repartidores, setRepartidores] = useState([])
    const [loading, setLoading] = useState (true)
    const {idRepartidor} = useParams()
  
    useEffect(() => {
  
      const db = getFirestore();
      const itemReference = doc(db, 'repartidores', idRepartidor);
  
      getDoc(itemReference) 
      .then((res) => setRepartidores ({ id: res.id, ...res.data() }) )
      .catch((err) => console.log(err))
    
    },[idRepartidor])
  
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
                <ItemDetail repartidores={repartidores} />
                }
  
  </>
}

export default ItemDetailPedidos