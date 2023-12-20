import React from 'react'
import DeanNav from './DeanNav'
import DeanPage from './DeanPage'

const DeanDashboard = () => {
  return (
    <>
    <div className='flex justify-center'>
        <div className='w-full'> 
        <div className='flex'>
            <DeanNav />
            <DeanPage />

        </div>

        </div>

    </div>
    </>
  )
}

export default DeanDashboard