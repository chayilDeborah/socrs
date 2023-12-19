import Image from 'next/image'
import React from 'react';
import filter from '../assets/filter.svg'

const HodCourse = () => {
    return (
        <>
            <div className='flex justify-center w-full ml-[21px]'>
                <div className='w-full'>
                    <div>
                        <div className='text-[#344054] text-[24px] font-bold mb-[8px] mt-[64px] mb-[16px] '>Course Registration</div>
                        <hr className='text-[#344054] ' />
                        <form className='flex'>
                            <input placeholder='Looking for something' className='hodsearch w-[80%] h-[40px] pl-[24px] mt-[20px] mb-[8px] pl-[24px] leading-[22.4px] text-[12px] outline outline-none ' />
                            <button className='text-[14px] font-bold leading-[22.4px] ml-[8px] mt-[20px] hover:bg-[#07ceed] w-[90px] h-[40px] my-auto bg-[#00B3D1] rounded-[4px] text-[#fff] '>Search</button>
                        </form>
                        <div className='text-[16px] font-bold text-[#00B3D1] '>You have pending course forms to sign. Kindly treat as urgent.</div>
                        <div className='flex justify-between w-[80%] '>
                            <div className='mt-[19px] '>
                                <input type="checkbox" id='student' className='w-[16px] h-[16px] rounded-[4px] bg-[#fff] border-[1px] border-[#CECECE] focus:ring-none focus:border-none' />
                                <label for="astype" className='text-[16px] text-[#344054] ml-[8px] font-medium   '>Sign All</label>
                            </div>
                            <div>
                                <Image src={filter} alt='filter' className='' />
                                

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HodCourse