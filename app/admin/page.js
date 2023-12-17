import React from 'react'
import AdminNav from '../component/AdminNav'

const Admin = () => {
  return (
    <>
    <div className='flex justify-center bg-[#F2F4F7]'>
      <div className='lg:max-w-[1440px] w-full '>
        <div>
          <AdminNav />
        </div>

      </div>
    </div>
    </>
  )
}

export default Admin