import HodNav from '@/app/component/HodNav'
import HodStudent from '@/app/component/HodStudent'
import React from 'react'

const HStudentPage = () => {
  return (
    <>
    <div className='flex justify-center  lg:max-w-[1440px] mx-auto bg-[#F2F4F7] '>
        <div className='w-full'>
            <div  className='flex'>
                <HodNav />
                <HodStudent />

            </div>

        </div>

    </div>
    </>
  )
}

export default HStudentPage