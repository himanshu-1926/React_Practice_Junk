import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params= useParams()
  return (
     <div className=' flex items-center justify-center min-h-screen' >
       <h1 className='text-6xl font-bold text-red-600'>{params.id} Course detail: padh lo  chahe jaha se selection hoga yha se </h1>
    </div>
  )
}

export default CourseDetail
