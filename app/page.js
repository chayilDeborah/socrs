import Image from 'next/image'
import Login from './component/Login'

export default function Home() {
  return (
    <>
    <div className='flex justify-center bg-[#F2F4F7]'>
      <div className='lg:max-w-[1440px] w-full '>
        <div>
          <Login />
        </div>
      </div>

    </div>
    </>
  )
}
