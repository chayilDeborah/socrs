import Image from 'next/image'
import React from 'react';
import student from '../assets/student.png';
import dash from '../assets/dash.svg';
import course from '../assets/course.svg';
import pay from '../assets/pay.svg';
import notification from '../assets/notification.svg';
import help from '../assets/help.svg';
import logout from '../assets/logout.svg'
import Link from 'next/link';
import avatar from '../assets/avatar.svg'

const StudentNav = () => {
  return (
    <div className='flex justify-center bg-[#fff] border-[1px] border-[#CECECE] pt-[64px] pl-[70px] pr-[34px] '>
        <div>
            <Image src={avatar} alt='student' className='mx-auto w-[154px] h-[154px] ' />
            <div className='text-[24px] font-bold text-[#344054] mt-[10px] w-[224px] '>Olamide Deborah</div>
            <div className='my-[64px] '>
                <Link href='/student'>
                <div className='flex hover:text-[#00B3D1]'>
                    <Image src={dash} alt='dashboard' className='' />
                    <div className='text-[16px] font-semibold ml-[8px] '>Dashboard</div>
                </div>
                </Link>
                <Link href='/student/course'>
                <div className='flex mt-[24px] hover:text-[#00B3D1] '>
                    <Image src={course} alt='dashboard' className='' />
                    <div className='text-[16px] font-semibold ml-[8px] '>Courses</div>
                </div>
                </Link>
                <div className='flex mt-[24px] hover:text-[#00B3D1] '>
                    <Image src={pay} alt='dashboard' className='' />
                    <div className='text-[16px] font-semibold ml-[8px] '>Payments</div>
                </div>
                <div className='flex mt-[24px] hover:text-[#00B3D1] '>
                    <Image src={notification} alt='dashboard' className='' />
                    <div className='text-[16px] font-semibold ml-[8px] '>Notification</div>
                </div>
                <div className='flex mt-[24px] hover:text-[#00B3D1] '>
                    <Image src={help} alt='dashboard' className='' />
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
  )
}

export default StudentNav