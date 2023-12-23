import Image from 'next/image'
import React from 'react';
import courseform from '../assets/courseform.png'

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
            <div>Name: Olamide Deborah</div>
            <div>Matric Number: CSC/18/3357</div>
            <div>School: Computing</div>
            <div>Course of Study: Computer Science</div>
            <div>Level/Status: 500L [RETURNING]</div>
            <div>Semester/Session: 1ST [2023/2024]</div>
            <div>Phone/Email: 08114147940 [aniyikayeolamide@gmail.com]</div>
          </div>
          <div className='font-bold text-[#344054] text-[16px] mt-[24px] mb-[8px] '>Status: <i className='font-normal'>Pending...</i></div>
          <div className='my-[24px]'>
            <Image src={courseform} alt='form ' className='' />
          </div>
          <div className='text-[#344054] text-[16px] mb-[90px]'>Do you have any issues on your  course form that needs rectification, contact your registration officer on mail at <i className='text-[#00B3D1] cursor-pointer'>xyznigga@gmail.com</i> or 
call him on <i className='text-[#00B3D1] cursor-pointer '>+2349144835593</i> to schedule a meeting.</div>
        </div>

      </div>
      
    </div>
    </>
  )
}


export default StudCourse