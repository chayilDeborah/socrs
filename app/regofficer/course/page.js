import RegNav from '@/app/component/RegNav'
import RegStud from '@/app/component/RegStud'
import Registration from '@/app/component/Registration'
import React from 'react'

const RegCoursePage = () => {
  return (
    <>
<div className='flex justify-center bg-[#F2F4F7] '>
      <div className='w-full'>
          <div className='flex'>
             <RegNav />
             <RegStud />              
          </div>
  
      </div>
  
     </div>
    </>
  )
}

export default RegCoursePage