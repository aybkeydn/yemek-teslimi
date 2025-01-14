import React from 'react'
import { Link } from "react-router-dom";


const Cancel = () => {
  return (
    <div className='max-w-4xl mx-auto p-5 bg-red-100 rounded-lg shadow my-72'>
      <h1 className='text-3xl font-bold text-red-800'>Ödeme engellendi ya da iptal edildi!</h1>
      <p className='mt-4'>Ödemeniz tamamlanamadı. Lütfen tekrar deneyin.</p>
      <div className='mt-16'>
         <Link to="/" className='bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-900'>Anasayfaya dönün</Link> 
      </div>
    </div>
  )
}

export default Cancel