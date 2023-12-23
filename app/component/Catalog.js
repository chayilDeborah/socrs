import Image from 'next/image'
import React from 'react'
import cata from '../assets/cata.png'
import newcourse from '../assets/newcourse.png'
import totalsales from '../assets/totalsales.png'
import pages from '../assets/pages.png'
import showing from '../assets/showing.png'

const Catalog = () => {
  return (
    <>
    <div className='flex justify-center w-full ml-[36px] pb-[100px]'>
        <div  className='w-full'>
            <div>
            <div className='text-[#344054] text-[24px] font-bold mb-[8px] mt-[64px] mb-[16px] '>Course Catalog</div>
            <hr className='text-[#344054] ' />
            <form className='flex'>
              <input placeholder='Looking for something' className='hodsearch w-[80%] h-[40px] pl-[24px] mt-[20px] mb-[8px] pl-[24px] leading-[22.4px] text-[12px] outline outline-none ' />
              <button className='text-[14px] font-bold leading-[22.4px] ml-[8px] mt-[20px] hover:bg-[#07ceed] w-[90px] h-[40px] my-auto bg-[#00B3D1] rounded-[4px] text-[#fff] '>Search</button>
            </form>
            <div className='text-[#344054] text-[24px] font-semibold mb-[16px] mt-[20px]  '>Overview</div>
            <div className=' grid grid-cols-2 w-[60%] '>
                    <div className='admingrid w-[254px] h-[188px] text-[#344054] py-[24px] pl-[24px] '>
                        <Image src={cata} alt='courses' className='mb-[16px] ' />
                        <div  className='text-[16px] leading-[24px] mb-[8px] '>Total Students</div>
                        <div className='text-[32px] font-semibold leading-[43.8px] -tracking-[0.8px] ' >48</div>
                    </div>
                    <div className='admingrid w-[254px] h-[188px] text-[#344054] py-[24px] pl-[24px] '>
                        <Image src={newcourse} alt='newcourse' className='mb-[16px] ' />
                        
                    </div>
                </div>
                <div>
                    <div className='text-[#344054] text-[24px] font-semibold mb-[16px] mt-[20px]  '>Listings</div>
                    <Image src={totalsales} alt='chart' className='mt-[16px]' />
                    <div className='flex justify-between w-[95%] h-[38px] '>
                        <Image src={showing} alt='list' className='' />
                        <Image src={pages} alt='pages-list' className='' />

                    </div>
                </div>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Catalog