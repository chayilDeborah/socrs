import React from 'react'
import AdminNav from './AdminNav'
import AdminPage from './AdminPage'

const AdminDashboard = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='w-full'>
                    <div className='flex'>
                        <AdminNav />
                        <AdminPage />
                    </div>

                </div>

            </div>
        </>
    )
}

export default AdminDashboard