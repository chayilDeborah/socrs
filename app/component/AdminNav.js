import React from 'react';
import Image from 'next/image';
import donald from '../assets/donald.png'
import Link from 'next/link';
import settings from '../assets/settings.svg'
import students from '../assets/students.svg'
import resources from '../assets/resources.svg'
import dash from '../assets/dash.svg';
import usertick from '../assets/usertick.svg';
import notification from '../assets/notification.svg';
import help from '../assets/help.svg';
import logout from '../assets/logout.svg'

const AdminNav = () => {
  return (
    <>
      <div className='flex justify-center bg-[#fff] border-[1px] border-[#CECECE] pt-[64px] pl-[70px] pr-[34px] '>
        <div>
          <Image src={donald} alt='donald' className='mx-auto bg-[#D9D9D9] p-[11px] rounded-[50%] ' />
          <div className='text-[24px] font-bold text-[#344054] mt-[10px] w-[224px] text-center '>Donald Ressler</div>
          <div className='text-[#344054] opacity-[0.5] text-[16px] font-bold text-center '>Admin</div>
          <div className='my-[64px] text-[#344054] '>
            <Link href='/admin'>
            <div className='flex hover:text-[#00B3D1] cursor-pointer'>
              <Image src={dash} alt='dashboard' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Overview</div>
            </div>
            </Link>
            <Link href='/admin/student'>
            <div className='flex mt-[24px] hover:text-[#00B3D1] cursor-pointer '>
              <Image src={students} alt='dashboard' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Students</div>
            </div>
            </Link>
            <Link href='/admin/lecturer'>
              <div className='flex mt-[24px] hover:text-[#00B3D1] cursor-pointer '>
                <Image src={usertick} alt='dashboard' className='' />
                <div className='text-[16px] font-semibold ml-[8px] '>Faculty</div>
              </div>
            </Link>
            
            <div className='flex mt-[24px] hover:text-[#00B3D1] cursor-pointer '>
              <Image src={notification} alt='dashboard' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Reports</div>
            </div>
            <Link href='/admin/catalog'>
            <div className='flex mt-[24px] hover:text-[#00B3D1] cursor-pointer '>
              <Image src={resources} alt='dashboard' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Courses Catalog</div>
            </div>
            </Link>
            <div className='flex mt-[24px] hover:text-[#00B3D1] cursor-pointer '>
              <Image src={settings} alt='dashboard' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Settings</div>
            </div>
          </div>
          <Link href='/'>
          <div className='flex mb-[100px] '>
                <Image src={logout} alt='logout' className='' />
                <div className='text-[16px] text-[#F24E1E] ml-[8px] '>Logout</div>
            </div>
            </Link>
        </div>

      </div>
    </>
  )
}

export default AdminNav