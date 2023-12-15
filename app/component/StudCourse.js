import React from 'react'

const StudCourse = () => {
  return (
    <>
    <div className='flex justify-center w-full ml-[21px]'>
      <div className='w-full'>
        <div>
          <div className='text-[#344054] text-[24px] font-bold mb-[8px] mt-[64px] '>Explore Your Courses</div>
          <div className='text-[#344054] text-[16px] mb-[16px] '>Welcome Back Olamide, ready for your next lessons?</div>
          <hr className='text-[#344054] mb-[20px] '/>
          <div  className='text-[#344054] text-[20px]  font-semibold mb-[16px]'>My Courses: <span className='font-medium text-[#344054] opacity-[0.5] '>12 Courses | 64 Classes</span></div>
          <div className='grid grid-cols-1 space-y-[8px] text-[#344054] text-[16px] mt-[43px]'>
            <div>Name: Aniyikaye Olamide Tehillah</div>
            <div>Matric Number: CSC/18/3357</div>
            <div>School: Computing</div>
            <div>Course of Study: Computer Science</div>
            <div>Level/Status: 500L [RETURNING]</div>
            <div>Semester/Session: 1ST [2023/2024]</div>
            <div>Phone/Email: 08114147940 [aniyikayeolamide@gmail.com]</div>
          </div>
          <div className='font-bold text-[#344054] text-[16px] mt-[24px] '>Status: <i className='font-normal'>Pending...</i></div>
        </div>

      </div>
      
    </div>
    </>
  )
}


export default StudCourse