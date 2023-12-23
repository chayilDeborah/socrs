import HodStudent from '@/app/component/HodStudent'
import RegNav from '@/app/component/RegNav'
import React from 'react'

const RegStudent = () => {
  return (
    <>
     <div className='flex justify-center  lg:max-w-[1440px] mx-auto bg-[#F2F4F7] '>
        <div className='w-full'>
            <div  className='flex'>
                <RegNav />
                <HodStudent />

            </div>

        </div>

    </div>
    </>
  )
}

export default RegStudent