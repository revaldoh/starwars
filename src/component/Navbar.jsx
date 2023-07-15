  import React from 'react'
  import Logo from './../assets/images/logo.png'
  import { Link } from 'react-router-dom';
  const links = [
      {
        id: 1,
        link: 'Home',
        navi:'/'
      },
    ];
    
    

  const Navbar = () => {
    return (
      <div className='px-4 bg-black flex items-center w-full h-20 fixed z-50'>
        <div>
          <img src={Logo} alt=""  className='w-32' />
        </div>
        <ul className='hidden md:flex'>
          {links.map(({ id, link,navi }) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hoover:scale-105 duration-200'>
              <Link to={navi}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  export default Navbar