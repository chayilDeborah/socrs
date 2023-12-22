import React from 'react'
import RegNav from './RegNav'
import RegOverview from './RegOverview'

const RegOfficerDashboard = () => {
  return (
    <>
    <div className='flex justify-center'>
        <div className='w-full'> 
        <div className='flex'>
            <RegNav />
            <RegOverview />

        </div>

        </div>

    </div>
    </>
  )
}

export default RegOfficerDashboard