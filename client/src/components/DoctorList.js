import { Cursor } from 'mongoose'
import React from 'react'
import {useNavigate} from  'react-router-dom'

const DoctorList = ({doctor}) => {
    const navigate=useNavigate()
  return (
    <div>
     <div className="card m-2" style={{cursor:'pointer'}} onClick={()=>navigate(`/doctor/book-appointment/${doctor._id}`)}>
     <div className="card-header">
     Dr. {doctor.firstName} {doctor.lastName}
     <div className="card-body">
      <p>
      <b>Specialization</b>{doctor.specialization}
      </p>
    
      <p>
      <b>Experiance</b>{doctor.experience}
      </p>

      <p>
      <b>fees per cunsultation</b>{doctor.cunsultationfees}
      </p>

      <p>
      <b>timings</b>{doctor.timings[0]}-{doctor.timings[1]};
      </p>


     </div>
     </div>
     
     </div>
    </div>
  )
}

export default DoctorList
