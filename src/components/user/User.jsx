import React from 'react'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const User = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
            user
        </div>
    </div>
    </>
  )
}

export default User;