import Image from 'next/image'
import React from 'react'
import studentno from '../assets/studentno.svg'
import lecturers from '../assets/lecturers.svg'
import registered from '../assets/registered.svg';

const RegOverview = () => {
  return (
    <>
    <div className='flex justify-center w-full '>
        <div  className='w-[90%]'>
            <div className='text-[#344054]'>
                <div className='text-[#344054] text-[24px] font-bold mb-[8px] mt-[64px] '>Welcome Back Tom,</div>
                <div className=' text-[16px] mb-[16px] '>Explore your admin dashboard now.</div>
                <hr />
                <div className='mt-[20px] grid grid-cols-3 '>
                    <div className='admingrid w-[254px] h-[188px] text-[#344054] py-[24px] pl-[24px] '>
                        <Image src={studentno} alt='students' className='mb-[16px] ' />
                        <div  className='text-[16px] leading-[24px] mb-[8px] '>Total Students</div>
                        <div className='text-[32px] font-semibold leading-[43.8px] -tracking-[0.8px] ' >82</div>
                    </div>
                    <div className='admingrid w-[254px] h-[188px] text-[#344054] py-[24px] pl-[24px] '>
                        <Image src={registered} alt='registered' className='mb-[16px] ' />
                        <div  className='text-[16px] leading-[24px] mb-[8px] '>Total Registered</div>
                        <div className='text-[32px] font-semibold leading-[43.8px] -tracking-[0.8px] ' >36</div>
                    </div>
                    <div className='admingrid w-[254px] h-[188px] text-[#344054] py-[24px] pl-[24px] '>
                        <Image src={lecturers} alt='lecturers' className='mb-[16px] ' />
                        <div  className='text-[16px] leading-[24px] mb-[8px] '>Lecturers</div>
                        <div className='text-[32px] font-semibold leading-[43.8px] -tracking-[0.8px] ' >16</div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default RegOverview