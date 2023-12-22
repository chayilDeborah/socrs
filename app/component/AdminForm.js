import Image from 'next/image'
import React from 'react';
import user from '../assets/user.svg';
import password from '../assets/password.svg'
import Link from 'next/link';


const AdminForm = () => {
  return (
    <>
    <div className='flex justify-center '>
                <div className='w-[90%]'>
                    <form>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-[12px] py-[9px] w-[353px] h-[42px] pointer-events-none">
                                <Image src={user} alt='user' className='' />
                            </div>
                            <input
                                className="border-[1px] border-[#CECECE] bg-[#F2F4F7] text-[16px] w-[353px] h-[42px] pl-[45px] leading-[22.4px] rounded-[4px] outline outline-none "
                                placeholder="User ID"
                            />
                        </div>
                        <div className="relative mt-[16px] mb-[8px] ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-[12px] py-[9px] w-[353px] h-[42px] pointer-events-none">
                                <Image src={password} alt='password' className='' />
                            </div>
                            <input
                                className="border-[1px] border-[#CECECE] bg-[#F2F4F7] text-[16px] w-[353px] h-[42px] pl-[45px] leading-[22.4px] rounded-[4px] outline outline-none "
                                placeholder="Password"
                            />
                        </div>
                        <input type="checkbox" id='student' className='w-[16px] h-[16px] rounded-[4px] bg-[#fff] border-[1px] border-[#CECECE] focus:ring-none focus:border-none' />
                        <label for="astype" className='text-[14px] font-light leading-[16.9px] text-[#344054] ml-[4px]   '>Remember Me</label>
                        <Link href='/admin'><button className='bg-[#00B3D1] rounded-[8px] opacity-[0.8] w-[353px] h-[42px] text-[16px] leading-[22.4px] hover:bg-[#1dcae5] mt-[18px] font-bold text-[#F2F4F7] mb-[16px] '>Login Now</button></Link>
                        <div className='text-[#344054] text-[16px] leading-[22.4px] mb-[47px] '>Can’t remember your password, <a href='#' className='text-[#00B3D1]'>Click Here</a></div>
                    </form>
                </div>
            </div>
      
    </>
  )
}

export default AdminForm
