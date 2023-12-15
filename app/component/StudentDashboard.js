import React from 'react'
import StudentNav from './StudentNav'
import StudentPage from './StudentPage'

const StudentDashboard = () => {
  return (
   <>
   <div className='flex justify-center'>
    <div className='w-full'>
        <div className='flex'>
            <StudentNav />
            <StudentPage />
            
        </div>

    </div>

   </div>
   </>
  )
}

export default StudentDashboard