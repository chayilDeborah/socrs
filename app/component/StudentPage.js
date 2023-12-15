import React from 'react'

const StudentPage = () => {
  return (
   <>
   <div className='flex justify-center w-full '>
    <div className='w-[90%]'>
        <div>
            <div className='text-[#344054] text-[32px] font-bold mb-[8px] mt-[64px] '>Hello Olamide</div>
            <div className='text-[#344054] text-[16px] mb-[16px] '>11th December, 2023</div>
            <hr className='text-[#344054] '/>
            <div className='text-[#344054] text-[24px] font-semibold mt-[20px] mb-[16px] '>Academic Summary</div>
            <div className='w-[692px] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] pt-[16px] pb-[25px] px-[14px] '>
                <div className='text-[#344054] text-[20px]  font-semibold mb-[16px]'>Current Courses</div>
                <div className='rounded-[8px] border-[1px] border-[#CECECE] px-[10px] pt-[9px] '>
                    <div className='flex justify-between '>
                        <div className='text-[#344054] text-[16px]  font-medium'>Course Title</div>
                        <div className='text-[#344054] text-[16px]  font-medium'>Course Code</div>
                    </div>
                    <hr className='mt-[7.75px]'/>
                    <div className='mt-[54.3px] text-[16px] text-[#344054] text-center mb-[89px] '>You have no registered course(s) at the moment</div>

                </div>
            </div>
            
        </div>
    </div>

   </div>
   </>
  )
}

export default StudentPage