import React from 'react'
import HodNav from './HodNav'
import HodPage from './HodPage'

const HodDashboard = () => {
  return (
    <>
    <div className='flex justify-center'>
        <div className='w-full'> 
        <div className='flex'>
            <HodNav />
            <HodPage />

        </div>

        </div>

    </div>
    </>
  )
}

export default HodDashboard