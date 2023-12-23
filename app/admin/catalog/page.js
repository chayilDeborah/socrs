import AdminNav from '@/app/component/AdminNav'
import Catalog from '@/app/component/Catalog'
import React from 'react'

const Admin = () => {
  return (
    <>
    <div className='flex justify-center lg:max-w-[1440px] mx-auto bg-[#F2F4F7]'>
      <div className='lg:max-w-[1440px] w-full '>
        <div>
        <div className='flex'>
             <AdminNav />
             <Catalog />
              
          </div>
</div>
      </div>
    </div>
    </>
  )
}

export default Admin