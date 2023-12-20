import Image from 'next/image'
import React from 'react'
import alan from '../assets/alan.png';
import sms from '../assets/sms.png';
import sandra from '../assets/sandra.png';
import jonath from '../assets/jonath.png';
import emily from '../assets/emily.png'
import rach from '../assets/rach.png'
import kev from '../assets/kev.png';
import julia from '../assets/julia.png';
import david from '../assets/david.png'
import laura from '../assets/laura.png';
import mic from '../assets/mic.png';


const HodLecturer = () => {
  return (
    <>
      <div className='flex justify-center w-full ml-[36px] pb-[100px]'>
        <div className='w-full'>
          <div>
            <div className='text-[#344054] text-[24px] font-bold mb-[8px] mt-[64px] mb-[16px] '>Lecturers</div>
            <hr className='text-[#344054] ' />
            <form className='flex'>
              <input placeholder='Looking for something' className='hodsearch w-[80%] h-[40px] pl-[24px] mt-[20px] mb-[8px] pl-[24px] leading-[22.4px] text-[12px] outline outline-none ' />
              <button className='text-[14px] font-bold leading-[22.4px] ml-[8px] mt-[20px] hover:bg-[#07ceed] w-[90px] h-[40px] my-auto bg-[#00B3D1] rounded-[4px] text-[#fff] '>Search</button>
            </form>
            <div className='grid grid-cols-1 text-[#344054] mt-[20px] space-y-[20px] '>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={alan} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Professor Alan Smith</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={sandra} alt='avatar' className='h-[50px] my-auto' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Dr. Sandra Davis</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={jonath} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Professor Jonathan Miller</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={rach} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Dr. Rachel Johnson</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={emily} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Dr. Emily Clark</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={mic} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Professor Michael Turner</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={kev} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Dr. Kevin Brooks</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={david} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Professor David Martin</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={julia} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Professor Julia Mitchell</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={mic} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Professor Megan Anderson</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={david} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Dr. Victor Lee</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={julia} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Professor Lisa Baker</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={jonath} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Dr. Daniel Davis</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>
              <div className='w-[90%] rounded-[16px] border-[1px] border-[#CECECE] bg-[#fff] flex justify-between py-[16px] px-[32px] '>
                <div className='flex'>
                  <Image src={alan} alt='avatar' className='h-[50px] my-auto ' />
                  <div className='ml-[8px]'>
                    <div className='text-[20px] font-bold'>Professor Alan Smith</div>
                    <div className='text-[20px] font-bold opacity-[0.5] '>Department of Computer Science</div>
                  </div>

                </div>
                <div>
                  <Image src={sms} alt='sms' className='mx-auto mb-[8px] cursor-pointer ' />
                  <div className='text-[16px]'>Message</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default HodLecturer