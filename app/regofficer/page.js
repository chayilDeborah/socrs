import React from 'react'
import RegOfficerDashboard from '../component/RegOfficerDashboard'

const RegOfficer = () => {
  return (
    <>
    <div className='flex justify-center bg-[#F2F4F7]'>
      <div className='lg:max-w-[1440px] w-full '>
        <div>
            <RegOfficerDashboard />
        </div>
      </div>

    </div>
    </>
  )
}

export default RegOfficer