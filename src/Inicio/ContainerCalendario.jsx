import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';


const ContainerCalendario = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])
 
  return (
      <>
        {loading ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <div>
                        <h1>¡ Buenas Noches !</h1>
        
                    <div>
                        <h4>Fecha de hoy:</h4>    
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    </div>
             }
       
      
      </>
   
  )
}

export default ContainerCalendario