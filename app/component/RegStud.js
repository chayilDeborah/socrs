import Image from 'next/image'
import React from 'react'
import totalsales from '../assets/totalsales.png'

const RegStud = () => {
  return (
   <>
   <div className='flex justify-center w-full ml-[21px]'>
    <div className='w-full'>
        <div>
        <div className='text-[#344054] text-[24px] font-bold mb-[8px] mt-[64px] mb-[16px] '>Adeola Adeleke</div>
            <hr className='text-[#344054] ' />
          <div className='grid grid-cols-1 space-y-[8px] text-[#344054] text-[16px] mt-[20px]'>
            <div>Name: Adeola Adeleke</div>
            <div>Matric Number: CSC/18/3357</div>
            <div>School: Computing</div>
            <div>Course of Study: Computer Science</div>
            <div>Level/Status: 500L [RETURNING]</div>
            <div>Semester/Session: 1ST [2023/2024]</div>
            <div>Phone/Email: 08114147940 [aniyikayeolamide@gmail.com]</div>
          </div>
          <div className='flex mt-[24px] '>
            <div className='text-[#344054] text-[16px] font-bold'>Status:.</div>
            <button className='w-[93px] h-[19px] bg-[#009318] text-[8px] text-[#fff] my-auto rounded-[4px] ml-[8px] '>Registered</button>
          </div>
          <Image src={totalsales} alt='chart' className='mt-[16px]' />
        </div>

    </div>
   </div>
   </>
  )
}

export default RegStud