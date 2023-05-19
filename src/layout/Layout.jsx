import React from 'react'
import NavBar from '../components/NavBar';


function Layout({ children }) {
  return (
    <div className='h-full relative'>
        <NavBar/>
        { children }
    </div>
  )
}

export default Layout