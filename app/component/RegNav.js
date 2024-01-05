import Image from 'next/image'
import React from 'react';
import avt from '../assets/avt.svg'
import Link from 'next/link';
import settings from '../assets/settings.svg'
import students from '../assets/students.svg'
import resources from '../assets/resources.svg'
import dash from '../assets/dash.svg';
import course from '../assets/course.svg';
import notification from '../assets/notification.svg';
import help from '../assets/help.svg';
import usertick from '../assets/usertick.svg'
import logout from '../assets/logout.svg'

const RegNav = () => {
  return (
    <>
    <div className='flex justify-center bg-[#fff] border-[1px] border-[#CECECE] pt-[64px] pl-[70px] pr-[34px] '>
        <div>
        <Image src={avt} alt='admin' className='mx-auto' />
          <div className='text-[24px] font-bold text-[#344054] mt-[10px] w-[224px] text-center '>Tom Keen </div>
            <div className='text-[#344054] opacity-[0.5] text-[16px] font-bold text-center '>Registration Officer</div>
            <div className='my-[64px] text-[#344054] '>
           <Link href='/regofficer'> <div className='flex hover:text-[#00B3D1]'>
              <Image src={dash} alt='dashboard' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Overview</div>
            </div></Link>
            <Link href='/regofficer/student'>
            <div className='flex mt-[24px] hover:text-[#00B3D1] '>
              <Image src={students} alt='student' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Students</div>
            </div>
            </Link>
            
            <Link href='/regofficer/course'>
              <div className='flex mt-[24px] hover:text-[#00B3D1] '>
                <Image src={course} alt='register' className='' />
               <div className='text-[16px] font-semibold ml-[8px] '>Registration</div>
              </div>
            </Link>
            <Link href='/regofficer/status'>
            <div className='flex mt-[24px] hover:text-[#00B3D1] '>
              <Image src={resources} alt='resource' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Status</div>
            </div>
            </Link>
            <div className='flex mt-[24px] hover:text-[#00B3D1] '>
              <Image src={notification} alt='notify' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Notification</div>
            </div>
            <div className='flex mt-[24px] hover:text-[#00B3D1] '>
              <Image src={settings} alt='setting' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Settings</div>
            </div>
           
            <div className='flex mt-[24px] hover:text-[#00B3D1] '>
              <Image src={help} alt='help' className='' />
              <div className='text-[16px] font-semibold ml-[8px] '>Help and Support</div>
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

export default RegNav