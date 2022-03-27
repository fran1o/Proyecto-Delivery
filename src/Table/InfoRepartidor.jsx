import React from 'react'
import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'



const InfoRep = () => {

  const db = getFirestore()

  const infoInicial = {
    nombre:'',
    cambio:'',
    fecha:''
  }
  const [infoRepartidor, setInfoRepartidor] = useState (infoInicial)

  const capturarDatos = (event) => {
    setInfoRepartidor({
      ...infoRepartidor,
      [event.target.name] : event.target.value
    })
  }

  const guardarDatos = async(e)=>{
    e.preventDefault();
    //console.log(infoRepartidor)
    try{
      await addDoc(collection(db,'repartidores'),{
        ...infoRepartidor
      })

    }catch(error){
      console.log(error)
    }
    setInfoRepartidor({...infoInicial})
  
  }

    return <>

           <div className='row'>
            <div className='col-md-4'>
              <h3 className='text-center mb-3'>Ingrese los datos de su repartidor</h3>
              
              <form onSubmit={guardarDatos}>
                <div className='card card-body'>
                  <div className='form-group'>
                    <input type='text' name='nombre' className='form-control mb-3' placeholder='Nombre del repartidor' onChange={capturarDatos} value={infoRepartidor.nombre} />
                    <input type='text' name='cambio' className='form-control mb-3' placeholder='Cambio inicial' onChange={capturarDatos} value={infoRepartidor.cambio} />
                    <input type='text' name='fecha' className='form-control mb-3' placeholder='Fecha de hoy' onChange={capturarDatos} value={infoRepartidor.fecha} />
                  </div>

                  <button className="btn btn-success">Guardar datos</button>

                </div>

              </form>

            </div>
          </div>

          
          
        
</>

}


export default InfoRep