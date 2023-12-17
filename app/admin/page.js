import React from 'react'
import AdminDashboard from '../component/AdminDashboard'

const Admin = () => {
  return (
    <>
    <div className='flex justify-center bg-[#F2F4F7]'>
      <div className='lg:max-w-[1440px] w-full '>
        <div>
        <AdminDashboard />
        </div>

      </div>
    </div>
    </>
  )
}

export default Admin