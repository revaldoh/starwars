import React from 'react'
import Logo from './../assets/images/logo.png'
const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
  ];

const Navbar = () => {
  return (
    <div className='px-4 bg-black flex items-center w-full h-20 fixed z-50'>
      <div>
        <img src={Logo} alt=""  className='w-32' />
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hoover:scale-105 duration-200'>
            <a href="">{link}</a>
          </li>
        ))}
      </ul>
      <input type="text" className='border border-white rounded-md w-52'  placeholder='Search'/>
    </div>
  )
}

export default Navbar