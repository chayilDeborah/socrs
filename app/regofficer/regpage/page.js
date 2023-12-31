import RegNav from '@/app/component/RegNav'
import Registration from '@/app/component/Registration'
import React from 'react'

const RegPage = () => {
  return (
    <>
<div className='flex justify-center  lg:max-w-[1440px] mx-auto bg-[#F2F4F7] '>
      <div className='w-full'>
          <div className='flex'>
             <RegNav />
             <Registration />              
          </div>
  
      </div>
  
     </div>
    </>
  )
}

export default RegPage