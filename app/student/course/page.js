import React from 'react';
import StudentNav from '@/app/component/StudentNav';
import StudCourse from '@/app/component/StudCourse';

const StudentCourse = () => {
    return (
      <>
      <div className='flex justify-center bg-[#F2F4F7] '>
      <div className='w-full'>
          <div className='flex'>
              <StudentNav />
              <StudCourse />
              
          </div>
  
      </div>
  
     </div>
      </>
    )
  }
  
  export default StudentCourse