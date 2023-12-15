"use client"
import { useState } from 'react';
import StudentForm from './StudentForm';
import AdminForm from './AdminForm';

const Login = () => {

    const [activeTab, setActiveTab] = useState('student');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'student':
                return <StudentForm />;
            case 'admin':
                return <AdminForm />;
            default:
                return null;
        }
    }
    return (
        <div className='flex justify-center'>
            <div className='w-full'>
                <div className='flex'>
                    <div className='h-screen w-[720px] flex justify-center items-center bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1702516792/loginbg_rarakk.svg")] '>
                        <div className='text-[32px] font-bold text-[#fff] my-auto w-[503px] '>Student Online Course Registration System [SOCRS]</div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='rounded-[16px] border-[1px] border-[#CECECE] pt-[47px] px-[29px] '>
                            <div>
                                <div className='text-[16px] font-semibold leading-[22.4px] text-[#00B3D1] mt-[20px] '>Kindly Read the Registration Procedure</div>
                                <div className='flex bg-[#fff] w-[386px] rounded-t-[8px] mb-[18px]  '>
                                    <div className='text-[#344054] text-[16px] w-[193px] rounded-t-[8px] leading-[22.4px] font-bold pt-[9px] pb-[10px] text-center ' onClick={() => handleTabClick('student')} style={{ backgroundColor: activeTab === 'student' ? '#00B3D1' : 'transparent', color: '#F2F4F7' }} >Student</div>
                                    <div className='text-[#344054] text-[#000] text-[16px] rounded-t-[8px] w-[193px] leading-[22.4px] font-bold pt-[9px] pb-[10px] text-center ' onClick={() => handleTabClick('admin')} style={{ backgroundColor: activeTab === 'admin' ? '#00B3D1' : 'transparent', color: '#F2F4F7' }} >Admin</div>
                                </div>
                                {renderTabContent()}
                            </div>

                        </div>
                        


                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}

export default Login