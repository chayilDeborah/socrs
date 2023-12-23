import Image from 'next/image'
import React from 'react';
import filter from '@/app/assets/filter.svg';
import hodcoursestud from '@/app/assets/hodcoursestud.png'
import AdminNav from '@/app/component/AdminNav';


const AdminStudent = () => {
  return (
    <>
    <div className='flex justify-center lg:max-w-[1440px] mx-auto'>
        <div className='w-full'> 
        <div className='flex'>
            <AdminNav />
            <>
      <div className='flex justify-center w-full ml-[36px] pb-[100px]'>
        <div className='w-full'>
          <div>
            <div className='text-[#344054] text-[24px] font-bold mb-[8px] mt-[64px] mb-[16px] '>Students</div>
            <hr className='text-[#344054] ' />
            <form className='flex'>
              <input placeholder='Looking for something' className='hodsearch w-[80%] h-[40px] pl-[24px] mt-[20px] mb-[8px] pl-[24px] leading-[22.4px] text-[12px] outline outline-none ' />
              <button className='text-[14px] font-bold leading-[22.4px] ml-[8px] mt-[20px] hover:bg-[#07ceed] w-[90px] h-[40px] my-auto bg-[#00B3D1] rounded-[4px] text-[#fff] '>Search</button>
            </form>
            <div className='flex justify-between w-[90%] '>
              <div className=' '>
                <i className='text-[16px] text-[#344054] opacity-[0.5] ml-[2px] '>Filters&gt;&gt; Levels&gt;&gt; 400L</i>
              </div>
              <div className='flex space-x-[5px] '>
                <Image src={filter} alt='filter' className='' />
                <i className='text-[16px] font-medium text-[#00B3D1] my-auto '>Filter</i>
              </div>
            </div>
            <Image src={hodcoursestud} alt='lists of students' className='mt-[10px]' />
          </div>

        </div>

      </div>
    </>

        </div>

        </div>

    </div>
    </>
  )
}

export default AdminStudent