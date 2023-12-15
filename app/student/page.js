import React from 'react'
import StudentDashboard from '../component/StudentDashboard'

const Student = () => {
  return (
    <>
    <div className='flex justify-center bg-[#F2F4F7]'>
      <div className='lg:max-w-[1440px] w-full '>
        <div>
            <StudentDashboard />
        </div>
      </div>

    </div>
    </>
  )
}

export default Student