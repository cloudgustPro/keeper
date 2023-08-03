import React from 'react'
import Logo from '../assets/images.png'

const Header = () => {
  return (
    <div className='flex mx-7 w-auto'>
        <img src={Logo} alt="todo_image" className='w-12 h-12 mt-1' />
        <span className=' mt-4'>Keeper</span>

        <div className='justify-end'>
             <ul className='flex mt-4 ml-[1000px]'>
                <li className='font-bold mr-4'><a href="http://">Sign up</a></li>
                <li className='font-bold mr-4'><a href="http://">Log in</a></li>
             </ul>
           
        </div>
    </div>
  )
}

export default Header;
