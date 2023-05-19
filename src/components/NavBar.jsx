import React from 'react';
import avatar from '../assets/avatar.png'

function NavBar() {
  return (
    <div className='w-full'>
      <img className='h-16 w-16 mx-8 mt-2' src={avatar} alt="avatar" />
      <span className="text-base font-normal text-white mx-5">Good Morning, {"Eldessouki"}</span>
    </div>
  )
}

export default NavBar