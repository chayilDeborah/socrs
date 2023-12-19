import HodCourse from '@/app/component/HodCourse'
import HodNav from '@/app/component/HodNav'
import React from 'react'

const HodRegistration = () => {
  return (
    <>
    <div className='flex justify-center bg-[#F2F4F7] '>
        <div className='w-full'>
            <div  className='flex'>
                <HodNav />
                <HodCourse />

            </div>

        </div>

    </div>
    </>
  )
}

export default HodRegistration